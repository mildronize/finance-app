import React from "react";
import BottomNavigation from '../../layouts/BottomNavigation';

// type AppProps = { message: string }; 

// import { useLocation } from 'react-router-dom'

const Expense = () => (
    <div>
        <p>Expense</p> 
        {/* {useLocation().pathname} */}
        <BottomNavigation />
    </div>
);

export default Expense;
