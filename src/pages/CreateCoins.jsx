import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateCoins = () => {
  const [type, setType] = useState('');
  const [mintLocation, setMintLocation] = useState('');
  const [mintYear, setMintYear] = useState('');
  const [circulation, setCirculation] = useState('');
  const [grade, setGrade] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCoin = () => {
    const data = {
      type,
      mintLocation,
      mintYear,
      circulation,
      grade,
    };
    setLoading(true);
    axios
      .post('http://coinsbackend.walwalka.com/coins', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Coin Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  // how do I make these select from a drop down of options?;
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Coin Record</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Type</label>
          <input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Mint Location</label>
          <input
            type='text'
            value={mintLocation}
            onChange={(e) => setMintLocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Mint Year</label>
          <input
            type='number'
            value={mintYear}
            onChange={(e) => setMintYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Circulated</label>
          <input
            type='text'
            value={circulation}
            onChange={(e) => setCirculation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Grade</label>
          <input
            type='text'
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCoin}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateCoins