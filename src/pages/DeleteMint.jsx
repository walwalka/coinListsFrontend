import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

// Shows delete coin toast allowing for deletion.
const DeleteMint = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteMint = () => {
    setLoading(true);
    axios
      .delete(backendUrl+'/mintlocations/mints/'+id)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Mint Deleted successfully', { variant: 'success' });
        navigate('/mintlocations/mints/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check with your administrator');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Mint</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this mint?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteMint}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteMint;
