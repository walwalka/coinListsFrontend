import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import moment from 'moment';

const CoinsTable = ({ coins }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Coin ID</th>
          <th className='border border-slate-600 rounded-md'>Coin Type</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Mint Location
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Year Minted
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Circulated
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Grade
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={coin.id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {coin.type}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
             {coin.mintlocation}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {moment(coin.mintyear).format("YYYY")}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.circulation}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.grade}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/coins/details/${coin.id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/coins/edit/${coin.id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/coins/delete/${coin.id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinsTable;
