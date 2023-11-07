import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCoin from './pages/CreateCoins';
import ShowCoin from './pages/ShowCoin';
import EditCoin from './pages/EditCoin';
import DeleteCoin from './pages/DeleteCoin';
import CreateMint from './pages/CreateMints';
import Mints from './pages/Mints';
import ShowMint from './pages/ShowMint';
import SelectMint from './components/mints/mintSelect';
import DeleteMint from './pages/DeleteMint';
import Login from './components/Login/Login';
import useToken from './components/useToken';

// creating routes to each of the pages   
const App = () => {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coins/create' element={<CreateCoin />} />
      <Route path='/coins/details/:id' element={<ShowCoin />} />
      <Route path='/coins/edit/:id' element={<EditCoin />} />
      <Route path='/coins/delete/:id' element={<DeleteCoin />} />
      <Route path='/mintlocations' element={<Mints />} />
      <Route path='/mintlocations/create' element={<CreateMint />} />
      <Route path='/mintlocations/details/:id' element={<ShowMint />} />
      <Route path='/mintselect' element={<SelectMint />} />
      <Route path='/mintlocations/delete/:id' element={<DeleteMint />} />
    </Routes>
  );
};

export default App;
