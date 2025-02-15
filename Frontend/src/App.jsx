// src/App.js

import React from "react";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Incomes from "./pages/Incomes.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Incomes from "./pages/Incomes.jsx";
import Expense from "./pages/Expense.jsx";
import Transactions from "./pages/Transactions.jsx";
import { useGlobalContext } from './context/context.jsx';

const AppContainer = styled.div`
    display: flex;
    height: 960px;
`;

function App() {
    const global = useGlobalContext()
    console.log(global);
    return (
        <AppContainer>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard/>}></Route>
                    <Route path="/transactions" element={<Transactions/>}></Route>
                    <Route path="/incomes" element={<Incomes/>}></Route>
                    <Route path="/expense" element={<Expense/>}></Route>
                </Routes>
            </Router>
        </AppContainer>
    );
}

export default App;
