import React from 'react';
import { useState } from 'react';

export default function AddTransaction() {
    const [text, setText] = useState();
    const [amount, setAmount] = useState();
    return (
        <>
     <h3>Add new transaction</h3>
      <htmlForm>
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
      </htmlForm> 
      </>
      
  )
}
