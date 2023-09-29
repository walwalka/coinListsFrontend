import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCoin from './pages/CreateCoins';
import ShowCoin from './pages/ShowCoin';
import EditCoin from './pages/EditCoin';
import DeleteCoin from './pages/DeleteCoin';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coins/create' element={<CreateCoin />} />
      <Route path='/coins/details/:id' element={<ShowCoin />} />
      <Route path='/coins/edit/:id' element={<EditCoin />} />
      <Route path='/coins/delete/:id' element={<DeleteCoin />} />
    </Routes>
  );
};

export default App;
