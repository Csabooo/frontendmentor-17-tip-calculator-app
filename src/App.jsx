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
  const [customTipValue, setCustomTipValue] = useState("");

  const [resetTrigger, setResetTrigger] = useState(false);


  const calculateHandler = (bill, people, tip, custom) => {
    setBill(bill);
    setPeople(people);
    setTip(tip);
    setCustomTipValue(custom);
  };

  const resetValues = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTipAmount(0);
    setTotal(0);
    setCustomTipValue("");
    setResetTrigger(true);

  };

  const acknowledgeReset = () => {
    setResetTrigger(false);
  };


  const calculate = () => {
    if (defaultPeople === 0) {
      setTipAmount(0);
      setTotal(0);
      return;
    }

    if (customTipValue) {
      setTip(customTipValue);
    }

    const tipData = (+defaultTip / 100) + 1;
    const billPerPerson = +defaultBill / +defaultPeople;
    let tip_Amount_Per_Person = ((defaultBill * tipData) - defaultBill) / defaultPeople;
    let total = billPerPerson + tip_Amount_Per_Person;
    setTipAmount(tip_Amount_Per_Person);
    setTotal(total);

  }

  /*   useEffect(() => {
      if (defaultTipAmount === "NaN" && defaultTotal === "NaN") {
        setTipAmount(0);
        setTotal(0);
      }
    }, [defaultTipAmount, defaultTotal]); */

  useEffect(() => {
    calculate();

  }, [defaultBill, defaultPeople, defaultTip, customTipValue, defaultTipAmount, defaultTotal]);

  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <main className="max-w-md xl:grid xl:grid-cols-2 xl:max-w-4xl mx-auto">

        <UserInput calc={calculateHandler} bill={defaultBill} people={defaultPeople} tip={defaultTip} custom={customTipValue} resetTrigger={resetTrigger} onResetAcknowledged={acknowledgeReset}></UserInput>
        <Results tips={defaultTipAmount} totals={defaultTotal} onReset={resetValues}></Results>
      </main >
      <Attribution></Attribution>
    </>
  )

}