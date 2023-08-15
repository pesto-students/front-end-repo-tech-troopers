import Button from '../ui/Button/Button';
import { useState } from 'react';
import useAxios from '../../hooks/useAxios';

function AddCause({ closeModal }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [amount, setAmount] = useState(0); // Change the default value as needed
  const [description, setDescription] = useState('');
  const { data, loading, error, postData } = useAxios();
  const addCause = (e) => {
    e.preventDefault();
    closeModal();
    const requestBody = {
      name: 'title',
      image,
      amount,
      description,
    };
    postData('cause/admin', requestBody);
  };
  return (
    <div className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full p-6  bg-transparent rounded-md lg:max-w-xl">
        <h1 className="text-4xl text-primary font-ellen font-normal leading-9">
          Add a new cause.
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white  rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Title*"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white  rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Image*"
            />
          </div>

          <div className="mb-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Amount*"
            />
          </div>
          <div className="mb-2">
            <input
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-4 py-2 mt-8 h-36 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Resource Description*"
            />
          </div>
          <div className="mt-6 text-center">
            <Button
              onClick={addCause}
              text="ADD CAUSE"
              bgColor="#2E4049"
              textColor="#FFF"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCause;
