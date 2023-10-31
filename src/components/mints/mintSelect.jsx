import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

const MintName = () => {
    const [name, setName]  = useState('');
    const [optionList,setOptionList] = useState([]);

    const fetchData = () => {
        axios
          .get(backendUrl+'/mintlocations/locations')
          .then((response) => {
            if(response.status === 200){
                //check the api call is success by stats code 200,201 ...etc
                setOptionList(response.data.name.rows)
            }else{
                //error handle section 
            }
          })
          .catch((error) => console.log(error));
      };

    useEffect(()=>{
        fetchData();
    },[])
    return (
        <select
            disabled={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
        >
            {optionList.map((item, value) => (
            <option key={value} value={item.name}>
                {item.name}
            </option>
            ))}
        </select>
    );
}

export default MintName;