import { useState, useEffect } from "react";
import classes from "./UserInput.module.css";



function UserInput(props) {

    const [defaultPeopleState, setUserPeopleState] = useState(true);
    const [defaultBillState, setBillState] = useState(true);

    const [defaultBill, setBill] = useState(props.bill);
    const [defaultPeople, setPeople] = useState(props.people);
    const [defaultTip, setTip] = useState(props.tip);
    const [customTipValue, setCustomTipValue] = useState(props.custom);



    useEffect(() => {
        props.calc(defaultBill, defaultPeople, defaultTip, customTipValue);
    }, [defaultBill, defaultPeople, defaultTip, customTipValue]);


    useEffect(() => {
        if (props.resetTrigger) {
            setBill(0);
            setPeople(0);
            setTip(0);
            setCustomTipValue("");
            props.onResetAcknowledged();
        }
    }, [props.resetTrigger]);

    const billHandler = (event) => {
        const bill = event.target.value;
        if (bill <= 0) {
            setBillState(false);

        }
        else
            setBillState(true);
        setBill(bill);

    }

    const peopleHandler = (event) => {
        const people = event.target.value;
        if (people <= 0) {
            setUserPeopleState(false);
        }
        else
            setUserPeopleState(true);
        setPeople(people);

    }

    const tipHandler = (event) => {
        const tip = event.target.value;
        setTip(tip);
    };

    const customtipHandler = (event) => {
        const tips = event.target.value;
        setCustomTipValue(tips);
    };




    return (
        <div>
            <form className='xl:pr-7' >
                <label className={classes.label} htmlFor="bill">Bill</label>
                <input className={classes.dollar} onChange={billHandler} type="number" id='bill' min="0" value={defaultBill} />
                {!defaultBillState && <p className={classes.errorBill} >Can't be zero!</p>}

                <div className='py-5'>
                    <label className={classes.label} htmlFor="">Select Tip %</label>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-5 xl:grid-cols-3 xl:gap-x-2 ">
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="5">5%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="10">10%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="15">15%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="25">25%</button>
                        <button type="button" className={classes.buttons} onClick={tipHandler} value="50">50%</button>
                        <input className={classes.custom} onChange={customtipHandler} type="text" placeholder='Custom' value={customTipValue} />
                    </div>
                </div>

                <label className={classes.label} htmlFor="people">Number of People</label>
                <input className={classes.people} onChange={peopleHandler} type="number" id='people' min="0" value={defaultPeople} />
                {!defaultPeopleState && <p className={classes.error} >Can't be zero!</p>}

            </form>
        </div>
    )
}

export default UserInput;