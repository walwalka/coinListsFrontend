import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const MintsTable = ({ mints }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Mint ID</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Name
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            City
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            State
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {mints.map((mint, index) => (
          <tr key={mint.id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {mint.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {mint.city}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {mint.state}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/mintlocations/details/${mint.id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/mintlocations/edit/${mint.id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/mintlocations/delete/${mint.id}`}>
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

export default MintsTable;
