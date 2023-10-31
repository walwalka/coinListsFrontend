import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/mints/BackButtonMints';
import Spinner from '../components/Spinner';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

// Shows coin page, this code leverages axios to populate the coin object within the elements in the UI. 

const ShowMint = () => {
  const [mint, setMint] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(backendUrl+'/mintlocations/mints/'+id)
      .then((response) => {
        setMint(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Mint</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{mint.id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{mint.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>City</span>
            <span>{mint.city}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>State</span>
            <span>{mint.state}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(mint.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(mint.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMint;
