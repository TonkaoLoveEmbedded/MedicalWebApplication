import React,{useState, useRef, useCallback, useEffect} from 'react';
import './FractureUploader.css';

const FractureUploader = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onFileChange = (e) => {
    const picked = e.target.files?.[0];
    if (picked){
      setFile(picked);
    }
  };


  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onDrop =(e) => {
    e.preventDefault()
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped){
      setFile(dropped);
    }
  };
  const onSubmit = useCallback(async () => {
    if (!file) return; // กันเผื่อ
    const form = new FormData();
    form.append('file', file);

    try {
      const res = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: form,
        // ถ้า backend ต้องการ token:
        // headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      alert(`อัปโหลดสำเร็จ: ${data.url || data.filename}`);
      setFile(null);           // เคลียร์สเตต
      inputRef.current.value = null;
    } 
      catch (err) {
      alert(`อัปโหลดล้มเหลว: ${err.message}`);
    }
  }, [file]);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url); // ล้างเมื่อเปลี่ยนไฟล์หรือ component ถูก unmount
    };
  }, [file]);

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
          <div
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              style={{ display: 'none' }}
              className="hidden-input"
              ref={inputRef}
              onChange={onFileChange}
            />
            {!file && (
              <div className="upload-box">
                <p className="upload-text-primary">Drag and drop your X-ray image here</p>
                <p className="upload-text-secondary">Or</p>
                <button className="select-button" type='button' onClick={() => inputRef.current?.click()}>Select File</button>
              </div>
              )
            }

            {file && (
              <div className="upload-box" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
                <p className="upload-text-primary">Selectded :</p>
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="preview-image"
                      style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                    />
                  )
                }
                <p className="upload-text-secondary">{file.name}</p>
                <button className="submit-button" type='button' onClick={onSubmit}>Submit</button>
              </div>
              )
            }


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