import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import ManagerLayout from '../components/layouts/ManagerLayout';
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
    return (
        <>
            <Router>
                <Toaster position={'top-right'} containerStyle={{ zIndex: 999 }} />
                <ManagerLayout />
            </Router>
        </>
    );
}

export default App