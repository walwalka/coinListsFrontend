import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete, MdHome, MdAssuredWorkload, MdOutlineBubbleChart } from 'react-icons/md';
import CoinsTable from '../components/home/CoinsTable';
import CoinsCard from '../components/home/CoinsCard';
//import MintSelect from '../components/mintSelect';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

// Shows coin table on page, this code leverages axios to populate the coin object within the elements in the UI. 
const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get(backendUrl+'/coins/api')
      .then((response) => {
        setCoins(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
       setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-inbetween items-center'>
        <h1 className='text-3xl my-8'>coinList</h1>
        <div className='flex gap-x-4 justify-end'>
        <Link to='/coins/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl'/>
          </Link>  
        <Link to='/mintlocations'>
            <MdAssuredWorkload className='text-sky-800 text-4xl'/>
          </Link>
      </div>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <CoinsTable coins={coins} />
      ) : (
        <CoinsCard coins={coins} />
      )}
    </div>
  );
};

export default Home;
