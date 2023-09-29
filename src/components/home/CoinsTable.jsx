import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const CoinsTable = ({ coins }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Coin Type</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Mint Location
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Mint Year
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Circulated?
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
          <tr key={coin._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {coin.type}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.mintLocation}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.mintYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.circulation}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {coin.grade}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/coins/details/${coin._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/coins/edit/${coin._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/coins/delete/${coin._id}`}>
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