import React, { useState } from 'react';
import axios from 'axios';
import axiosHelper from '../../axiosHelper';
import LoadingOverlay from '../../components/loader/Loader';
import Button from '../ui/Button/Button';

const FileUploadButton = ({ returnImage }) => {
  const [loading, isLoading] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [isAlertOpen, setAlertOpen] = useState(false);

  const handleFileChange = async (event) => {
    isLoading(true);

    const file = event.target.files[0];

    if (!file || !(file.type === 'image/jpeg' || file.type === 'image/png')) {
      alert('Please select a JPG or PNG image.');
      return;
    }

    const maxFileSize = 1024 * 1024; // 1 MB in bytes
    if (file.size > maxFileSize) {
      alert('Please select an image smaller than 1 MB.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);

      const data = await axiosHelper.post('/resource/uploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      isLoading(false);
      returnImage(data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LoadingOverlay isLoading={loading}></LoadingOverlay>
      <input
        type='file'
        accept='.jpg, .jpeg, .png'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <Button
        className='py-8 bg-primary'
        bgColor={'#FF6D6D'}
        text='Upload Image'
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
      </Button>
    </>
  );
};

export default FileUploadButton;
