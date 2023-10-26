import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

// Shows coin object for editing, this code leverages axios to populate the coin object within the elements in the UI. 

const EditCoin = () => {
  const [type, setType] = useState('');
  const [mintlocation, setMintLocation] = useState('');
  const [mintyear, setMintYear] = useState('');
  const [circulation, setCirculation] = useState('');
  const [grade, setGrade] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
    .get(backendUrl+'/coins/api/'+id)
    .then((response) => {
        setMintLocation(response.data.mintlocation);
        setMintYear(response.data.mintyear)
        setType(response.data.type)
        setCirculation(response.data.circulation)
        setGrade(response.data.grade)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditCoin = () => {
    const data = {
      type,
      mintlocation,
      mintyear,
      circulation,
      grade
    };
    setLoading(true);
    axios
      .put(backendUrl+'/coins/api/'+id, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Coin Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Coin</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Type</label>
          <select 
            label="Type of Coin"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          >
            <option value="Quarter">Quarter</option>
            <option value="Dime">Dime</option>
            <option value="Penny">Penny</option>
            <option value="Nickel">Nickel</option>
            <option value="Half Dollar">Half Dollar</option>
            <option value="Dollar">Dollar</option>
          </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Mint Location</label>
          <input
            type='text'
            value={mintlocation}
            onChange={(e) => setMintLocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Mint Year</label>
          <input
            type='date'
            value={mintyear}
            onChange={(e) => setMintYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Circulated</label>
          <select 
            label="Circulated?"
            value={circulation}
            onChange={(e) => setCirculation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unsure">Unsure</option>
          </select>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditCoin}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditCoin