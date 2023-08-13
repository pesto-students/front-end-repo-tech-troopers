import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import axiosHelper from '../../axiosHelper';
import LoadingOverlay from '../../components/loader/Loader';


const FileUploadButton = ({ returnImage }) => {
    const [loading, isLoading] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [isAlertOpen, setAlertOpen] = useState(false);



    const handleFileChange = async (event) => {
        isLoading(true);

        const file = event.target.files[0];

        // Validate file type (only accept jpg and png)
        if (!file || !(file.type === 'image/jpeg' || file.type === 'image/png')) {
            alert('Please select a JPG or PNG image.');
            return;
        }

        // Validate file size (e.g., 1 MB)
        const maxFileSize = 1024 * 1024; // 1 MB in bytes
        if (file.size > maxFileSize) {
            alert('Please select an image smaller than 1 MB.');
            return;
        }

        // Upload the file to Cloudinary
        try {
            const formData = new FormData();
            formData.append('image', file);

            const data = await axiosHelper.post(
                '/resource/uploadFile',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }

            );
            isLoading(false);
            returnImage(data.url);
            // alert('Image uploaded successfully.');
        } catch (error) {
            // alert('Error uploading image.');
            console.error(error);
        }
    };

    return (
        <>
            <LoadingOverlay isLoading={loading}></LoadingOverlay>

            {/* Hidden file input to trigger file selection */}
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {/* Visible "Upload File" button */}
            <Button onClick={() => document.querySelector('input[type="file"]').click()}>
                Upload File
            </Button>
            {/* Display the image ID returned by Cloudinary */}
            {imageId && <p>Image ID: {imageId}</p>}
        </>
    );
};

export default FileUploadButton;
