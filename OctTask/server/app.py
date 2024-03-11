from flask import Flask, request, jsonify
from minio import Minio
from minio.error import S3Error
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS

app = Flask(__name__)
# Configure CORS globally for all routes
CORS(app, resources={
    r"/upload": {"origins": "http://localhost:3000"},
    r"/images": {"origins": "http://localhost:3000"},
    r"/delete": {"origins": "http://localhost:3000"}
})

# Configure Minio
minio_client = Minio(
    "127.0.0.1:9000",
    access_key="minioadmin",
    secret_key="minioadmin",
    secure=False
)

if not minio_client.bucket_exists("images"):
    minio_client.make_bucket("images")

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No selected file"})

    image_file = request.files['image']
    if image_file.filename == '':
        return jsonify({"error": "No selected file"})

    try:
        filename = secure_filename(image_file.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image_file.save(image_path)

        # Upload to Minio
        minio_client.fput_object('images', filename, image_path)

        os.remove(image_path)

        return jsonify({"message": "Image uploaded to Minio successfully"})
    except S3Error as e:
        return jsonify({"error": str(e)})
    except Exception as e:
        return jsonify({"error": "Internal server error: " + str(e)})


@app.route('/images', methods=['GET'])
def get_images():
    image_names = []
    objects = minio_client.list_objects('images', recursive=True)
    for obj in objects:
        image_names.append(obj.object_name)
    return jsonify(image_names)


@app.route('/delete', methods=['POST'])
def delete_image():
    image_name = request.json.get('image_name')
    try:
        # Remove the image from the Minio bucket
        minio_client.remove_object('images', image_name)
        return jsonify({"message": "Image deleted successfully"})
    except S3Error as e:
        return jsonify({"error": str(e)})
    except Exception as e:
        return jsonify({"error": "Internal server error: " + str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
