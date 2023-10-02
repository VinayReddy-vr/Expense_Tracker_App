import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>(transaction.amount));
  const total = amounts.reduce((acc,val)=>acc+val,0).toFixed(2);
  // useEffect(() => {
  //   localStorage.setItem('Balance', total);
  // }, [total]);
  return (
    <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
   </>
   
  )
}

export default Balance