import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { useEffect, useState } from "react";
import "../coinsTable.css";
import axios from 'axios';

const Header = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} className='coins-table-cell'>{column}</th>
          ))}
      </tr>
    </thead>
  );
};

const Content = ({ entries, columns }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column} className="users-table-cell">
              {entry[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

useEffect(() => {
  const url = `http://localhost:8081/api/coins?_sort=${sorting.column}&_order=${sorting.order}`;
  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      setUsers(users);
    });
}, [sorting]);

const CoinsTableFiltered = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  //  const [sorting, setSorting] = useState({ column: "Coin Type", order: "asc" });
//  const [searchValue, setSearchValue] = useState("");
  const columns = ["Coin Type", "Mint Location", "Mint Year", "Ciruclation", "Grade"];
//  const sortTable = (newSorting) => {
//    setSorting(newSorting);
//  };

return (
  <div>
    <table className="coins-table">
      <Header columns={columns}/>
      <Content entries={coins} columns={columns} />
    </table>
  </div>
);
};

export default CoinsTableFiltered;