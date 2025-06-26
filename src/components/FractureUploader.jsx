import React from 'react';
import './FractureUploader.css';

const FractureUploader = () => {
  return (
    <div className="uploader-container">
      <header className="uploader-header">
        <div className="header-left">

        </div>
        <div className="header-center">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        <div className="header-right">
          <button className="login-button">Login</button>
        </div>
      </header>
      <main className="upload-main">
        <div className="upload-container">
          <h1 className="upload-heading">Upload X-ray Image</h1>
          <p className="upload-description">
            Drag and drop an X-ray image file here, or click to select a file from your computer. Supported formats: PNG, JPG, JPEG. Maximum file size: 10MB.
          </p>
          <div className="upload-area">
            <div className="upload-box">
              <p className="upload-text-primary">Drag and drop your X-ray image here</p>
              <p className="upload-text-secondary">Or</p>
              <button className="select-button">Select File</button>
            </div>
          </div>
          <p className="upload-terms">
            By uploading, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
};

export default FractureUploader;