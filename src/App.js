import React from 'react';
import './App.css'
import {Header} from './Component/Header';
import Balance from './Component/Balance';
import {IncomeExpenses} from './Component/IncomeExpenses';
import {TransactionList} from './Component/TransactionLIst';
import {AddTransaction} from './Component/AddTransaction';
import {GlobalProvider}  from './context/GlobalState.js';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction /></div>
    </GlobalProvider>
  );
}

export default App;
