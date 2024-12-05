import React from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onsubmit = e => {
    e.preventdefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

    return (
        <>
     <h3>Add new transaction</h3>
      <form onSubmit={onsubmit} >
        <div className="Form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="Form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form> 
      </>
  )
}
