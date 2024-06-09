import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import { useEffect, useState } from "react";

function App() {
  const [billAmount , setBillAmount] = useState('');
  const [discountValue , setDiscountValue] = useState('');
  const [numPeople , setNumPeople] = useState('');
  const [customDiscountValue , setCustomDiscountValue] = useState('');
  const [totalTipPerPerson, setTotalTipPerPerson] = useState(0);
  const [totalPerPerson , setTotalPerPerson] = useState(0);

  useEffect(() => {
    if(numPeople > 0 && billAmount > 0 && discountValue > 0){
      const tipPerPerson = billAmount * discountValue / 100 / numPeople;
      const perPerson = (billAmount + billAmount * discountValue / 100) / numPeople;
      setTotalTipPerPerson(tipPerPerson);
      setTotalPerPerson(perPerson);
    }
  },[billAmount,discountValue,numPeople,totalTipPerPerson,totalPerPerson])

  const resetValues = (e) => {
    e.preventDefault();
    setBillAmount('');
    setDiscountValue('');
    setNumPeople('');
    setCustomDiscountValue('');
    setTotalPerPerson(0);
    setTotalTipPerPerson(0);
  }

  return (
    <>
      <img className="splitter" src="/icons/splitter.svg" alt=""/>
      <div className="container">
        <LeftSide billAmount={billAmount} setBillAmount={setBillAmount} discountValue={discountValue} setDiscountValue={setDiscountValue} numPeople={numPeople} setNumPeople={setNumPeople} customDiscountValue={customDiscountValue} setCustomDiscountValue={setCustomDiscountValue} />
        <RightSide totalPerPerson={totalPerPerson} totalTipPerPerson={totalTipPerPerson} resetValues={resetValues}/>
      </div>
    </>
  )
}

export default App
