import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCoin from './pages/CreateCoins';
import ShowCoin from './pages/ShowCoin';
import EditCoin from './pages/EditCoin';
import DeleteCoin from './pages/DeleteCoin';
import CreateMint from './pages/CreateMints';
import Mints from './pages/Mints';

// creating routes to each of the pages
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mintlocations' element={<Mints />} />
      <Route path='/coins/create' element={<CreateCoin />} />
      <Route path='/coins/details/:id' element={<ShowCoin />} />
      <Route path='/coins/edit/:id' element={<EditCoin />} />
      <Route path='/coins/delete/:id' element={<DeleteCoin />} />
      <Route path='/mintlocations/create' element={<CreateMint />} />
    </Routes>
  );
};

export default App;
