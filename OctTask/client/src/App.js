import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFileManager, setShowFileManager] = useState(false);
  const [successAlert, setSuccessAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch the list of uploaded images when the component mounts
    fetch('http://127.0.0.1:5000/images')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Image uploaded to Minio successfully') {
            setSuccessAlert('Image Successfully Uploaded');
            setErrorAlert('');
          } else {
            setErrorAlert('Upload Failed');
            setSuccessAlert('');
          }

          // Refresh the list of uploaded images after a successful upload
          fetch('http://127.0.0.1:5000/images')
            .then((response) => response.json())
            .then((data) => {
              setImages(data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
          setErrorAlert('Upload Failed');
          setSuccessAlert('');
        });
    } else {
      setErrorAlert('No file selected for upload');
      setSuccessAlert('');
    }
  };

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const handleDelete = () => {
    if (selectedImage) {
      // Send a request to delete the image from the backend first
      fetch('http://127.0.0.1:5000/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_name: selectedImage }),
      })
        .then((response) => response.json())
        .then(() => {
          // After a successful delete from the backend, update the frontend state
          setImages((prevImages) => prevImages.filter((image) => image !== selectedImage));
          setSelectedImage(null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const openFileManager = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <div className="file-upload-container">
        <div className="drag-drop" onClick={openFileManager}>
          <p>Select Image</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload Image</button>
        {successAlert && (
          <p style={{ color: 'green' }}>{successAlert}</p>
        )}
        {errorAlert && (
          <p style={{ color: 'red' }}>{errorAlert}</p>
        )}
      </div>
      <div className="file-manager-container">
        <h2 align='center'>Uploaded Images</h2>
        <ul>
          {images.map((image) => (
            <li
              key={image}
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer' }}
            >
              {image}
            </li>
          ))}
        </ul>
      </div>
      {selectedImage && (
        <div className="image-popup">
          <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
          <h2>Selected Image: {selectedImage}</h2>
          <img
            src={`http://127.0.0.1:9000/images/${selectedImage}`}
            alt={selectedImage}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
          <button className="delete-button" onClick={handleDelete}>Delete Image</button>
        </div>
      )}
    </div>
  );
}

export default App;
