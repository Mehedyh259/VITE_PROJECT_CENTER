import React from 'react';
import "./Layout.css"
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    
    return (
        <div id='project_center_page'>
            <div id='project_center_content' className='w-[95%] lg:w-[80%] mx-auto py-2 bg-base-100'>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default Layout;