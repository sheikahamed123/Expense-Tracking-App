import React,{useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
const AddTransaction = () => {
const {addTransaction}=useContext(GlobalContext);
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);

    const onSubmit = (event) => {
      event.preventDefault();
     const newTransaction={
      id:Math.floor(Math.random()*10000000),
      text:text,
            amount:+amount
     }
     addTransaction(newTransaction);
    }
  return (
    <div>
          <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"value={text} onChange={(event)=> setText(event.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          
          <input type="number" value={amount} onChange={(event)=> setAmount(event.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      
    </div>
  )
}

export default AddTransaction
