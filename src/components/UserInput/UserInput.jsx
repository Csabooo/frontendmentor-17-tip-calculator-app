import { useState } from "react";
import classes from "./UserInput.module.css";



function UserInput(props) {

    const [defaultPeopleState, setUserPeopleState] = useState(true);
    const [defaultBillState, setBillState] = useState(true);

    const [defaultBill, setBill] = useState(0);
    const [defaultPeople, setPeople] = useState(0);
    const [defaultTip, setTip] = useState(0);


    let bill;
    let people;
    let tip;


    const billHandler = (event) => {
        bill = event.target.value;
        if (bill <= 0) {
            setBillState(false);

        }
        else
            setBillState(true);
        console.log("Bill:" + bill);
        setBill(bill);
    }

    const peopleHandler = (event) => {
        people = event.target.value;
        if (people <= 0) {
            setUserPeopleState(false);

        }
        else
            setUserPeopleState(true);
        console.log("People:" + people);
        setPeople(people);
    }

    const tipHandler = (event) => {
        tip = event.target.value;
        console.log("Tip:" + tip);
        setTip(tip);
        props.calc(defaultBill, defaultPeople, defaultTip);
    }



    /*    const tipAmount = () => {
           const tipData = (defaultTip / 100) + 1;
           const billPerPerson = defaultBill / defaultPeople;
           let tip_Amount_Per_Person = ((defaultBill * tipData) - defaultBill) / defaultPeople;
           let total = billPerPerson + tip_Amount_Per_Person;
           setTipAmount(tip_Amount_Per_Person);
           setTotal(total);
       } */

    return (
        <div>
            <form className='xl:pr-7' >
                <label className={classes.label} htmlFor="bill">Bill</label>
                <input className={classes.dollar} onChange={billHandler} type="number" id='bill' min="0" />
                {!defaultBillState && <p className={classes.errorBill} >Can't be zero!</p>}

                <div className='py-5'>
                    <label className={classes.label} htmlFor="">Select Tip %</label>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-5 xl:grid-cols-3 xl:gap-x-2 ">
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="5">5%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="10">10%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="15">15%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="25">25%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="50">50%</button>
                        <input className={classes.custom} onChange={tipHandler} type="text" placeholder='Custom' />
                    </div>
                </div>

                <label className={classes.label} htmlFor="people">Number of People</label>
                <input className={classes.people} onChange={peopleHandler} type="number" id='people' min="0" />
                {!defaultPeopleState && <p className={classes.error} >Can't be zero!</p>}

            </form>
        </div>
    )
}

export default UserInput;