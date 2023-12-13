import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <h1>Main Layout <Outlet/> </h1>
        </div>
    );
};

export default MainLayout;