import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import ManagerLayout from '../components/layouts/ManagerLayout';
const App = () => {
    return (
        <>
            <Router>
                <ManagerLayout/>
            </Router>
        </>
    );
}

export default App