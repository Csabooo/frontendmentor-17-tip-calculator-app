import { useState, useEffect } from "react";
import Attribution from "./components/Attribution/Attribution";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

export default function App() {


  const [defaultTipAmount, setTipAmount] = useState(0);
  const [defaultTotal, setTotal] = useState(0);


  const [defaultBill, setBill] = useState(0);
  const [defaultPeople, setPeople] = useState(0);
  const [defaultTip, setTip] = useState(0);

  const [resetTrigger, setResetTrigger] = useState(false);


  const calculateHandler = (bill, people, tip) => {
    setBill(bill);
    setPeople(people);
    setTip(tip);

  };

  const resetValues = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTipAmount(0);
    setTotal(0);
    setResetTrigger(true);

  };

  const acknowledgeReset = () => {
    setResetTrigger(false);
  };

  /*   const tipHandler = (event) => {
      tip = event.target.value;
      console.log("Tip:" + tip);
      setTip(tip);
      props.calc(defaultBill, defaultPeople, defaultTip);
    } */

  /*   Itt a setTip(tip); utasítás aszinkron módon frissíti a defaultTip értékét.Azonban közvetlenül ezután a props.calc(defaultBill, defaultPeople, defaultTip); függvényt hívod meg, amely az előző állapotot használja(mivel az állapot még nem frissült).
    Ez a viselkedés okozhatja a problémát */

  const calculate = () => {
    if (defaultPeople === 0) {
      setTipAmount(0);
      setTotal(0);
      return;
    }

    const tipData = (+defaultTip / 100) + 1;
    const billPerPerson = +defaultBill / +defaultPeople;
    let tip_Amount_Per_Person = ((defaultBill * tipData) - defaultBill) / defaultPeople;
    let total = billPerPerson + tip_Amount_Per_Person;
    setTipAmount(tip_Amount_Per_Person);
    setTotal(total);

  }

  useEffect(() => {
    calculate();

  }, [defaultBill, defaultPeople, defaultTip]);

  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <main className="max-w-md xl:grid xl:grid-cols-2 xl:max-w-4xl mx-auto">
        {/*         <UserInput calc={calculateHandler}></UserInput>
 */}

        <UserInput calc={calculateHandler} bill={defaultBill} people={defaultPeople} tip={defaultTip} resetTrigger={resetTrigger} onResetAcknowledged={acknowledgeReset}></UserInput>
        <Results tips={defaultTipAmount} totals={defaultTotal} onReset={resetValues}></Results>
      </main >
      <Attribution></Attribution>
    </>
  )

}