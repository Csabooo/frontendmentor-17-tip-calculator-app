import { useState } from "react";
import Attribution from "./components/Attribution/Attribution";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

export default function App() {


  const [defaultTipAmount, setTipAmount] = useState(0);
  const [defaultTotal, setTotal] = useState(0);


  const [defaultBill, setBill] = useState(0);
  const [defaultPeople, setPeople] = useState(0);
  const [defaultTip, setTip] = useState(0);


  const calculateHandler = (bill, people, tip) => {
    setBill(bill);
    setPeople(people);
    setTip(tip);
    /*  calculate(); */

    const tipData = (+defaultTip / 100) + 1;
    const billPerPerson = +defaultBill / +defaultPeople;
    let tip_Amount_Per_Person = ((defaultBill * tipData) - defaultBill) / defaultPeople;
    let total = billPerPerson + tip_Amount_Per_Person;
    setTipAmount(tip_Amount_Per_Person);
    setTotal(total);
  };








  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <main className="max-w-md xl:grid xl:grid-cols-2 xl:max-w-4xl mx-auto">
        <UserInput calc={calculateHandler} ></UserInput>
        <Results tips={defaultTipAmount} totals={defaultTotal}></Results>
      </main >
      <Attribution></Attribution>
    </>
  )

}