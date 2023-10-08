import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-dark-gray sm:px-8 px-4 py-2 border-b border-b-border-gray">
            <Link to="/">
                <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>

            <Link to="/create-post" className="font-inter font-medium bg-tomato px-5 py-1.5 rounded-3xl">Create</Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-onyx min-h-[calc(100vh-53px)]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;