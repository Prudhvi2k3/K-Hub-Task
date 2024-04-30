from flask import Flask, render_template,jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId 
import numpy as np
import statistics

app = Flask(__name__)
CORS(app)
# MongoDB configuration
MONGO_URI = "mongodb://localhost:27017"  # Update with your MongoDB URI
DB_NAME = "K-Hub"  # Update with your database name

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db["task"]  # Update with your collection name

@app.route('/api',methods=['GET'])
def index():
    # Retrieve data from the MongoDB collection
    data = collection.find()
    data_list = list(data)
    for item in data_list:
        item['_id'] = str(item['_id'])
    column_a_values = [item['Total_cases'] for item in data_list]
    column_b_values = [item['Total_recovered'] for item in data_list]

    column_median1_values = [item['Total_cases'] for item in data_list]
    column_median2_values = [item['Population'] for item in data_list]

    column_mode1_values = [item['Total_cases'] for item in data_list]
    column_mode2_values  = [item['Population'] for item in data_list]

    mean_a= np.mean(column_a_values)
    mean_b = np.mean(column_b_values)

    
    median_a = np.median(column_median1_values)
    median_b = np.median(column_median2_values)

    
    mode_a = statistics.mode(column_mode1_values)
    mode_b = statistics.mode(column_mode2_values)


    

    statistics_data = {
        'mean_a': mean_a,
        'median_a': median_a,
        'mode_a': mode_a,
        'mean_b': mean_b,
        'median_b': median_b,
        'mode_b': mode_b,
    }

    response = {
        'data': data_list,
        'statistics': statistics_data
    }

    return jsonify(response)


    

if __name__ == '__main__':
    app.run(debug=True)