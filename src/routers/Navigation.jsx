import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import Layout from '../components/Layout';

const Navigation = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
            </Routes>
        </Layout>
    )
}

export default Navigation