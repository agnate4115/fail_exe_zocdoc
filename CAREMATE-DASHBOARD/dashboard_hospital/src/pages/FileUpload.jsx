import React, { useState } from 'react';

const UploadDocument = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        // Here, you would typically handle the file upload to your server
        // For demonstration, we'll just log it
        console.log('Uploading:', file.name);
        setMessage(`Successfully uploaded: ${file.name}`);

        // Reset file input
        setFile(null);
    };

    return (
        <div style={styles.uploadContainer}>
            <h1 style={styles.header}>Upload Document</h1>
            <form onSubmit={handleUpload} style={styles.uploadForm}>
                <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                    style={styles.fileInput}
                />
                <button type="submit" style={styles.uploadButton}>Upload</button>
            </form>
            {message && <p style={styles.uploadMessage}>{message}</p>}
        </div>
    );
};

// Inline CSS styles
const styles = {
    uploadContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        border: '2px solid #000', // Black border
        borderRadius: '10px',
        backgroundColor: '#fff', // White background
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '450px',
        margin: '40px auto',
        fontFamily: '"Arial", sans-serif',
    },
    header: {
        fontSize: '28px',
        marginBottom: '25px',
        color: '#000', // Black text
        textAlign: 'center',
    },
    uploadForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    fileInput: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #000', // Black border
        borderRadius: '5px',
        fontSize: '16px',
        color: '#333', // Dark gray text
    },
    uploadButton: {
        padding: '12px',
        backgroundColor: '#000', // Black button background
        color: '#fff', // White button text
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontWeight: 'bold',
    },
    uploadMessage: {
        marginTop: '20px',
        color: '#000', // Black message text
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default UploadDocument;