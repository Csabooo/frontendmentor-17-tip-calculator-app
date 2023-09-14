import { useState } from "react";
import classes from "./UserInput.module.css";



function UserInput() {

    const [userInput, setUserInput] = useState(true);

    const peopleHandler = (event) => {
        const people = event.target.value;
        if (people <= 0) {
            setUserInput(false);

        }
        else
            setUserInput(true);
    }



    const billHandler = (event) => {
        const bill = event.target.value;
        console.log(bill);
    }

    const tipHandler = (event) => {
        const tip = event.target.value;
        console.log(tip);
    }




    return (
        <div>
            <form className='xl:pr-7' >
                <label className={classes.label} htmlFor="bill">Bill</label>
                <input className={classes.dollar} onChange={billHandler} type="number" id='bill' min="0" />
                {/*                 {!userInput && <p className={classes.error} >Can't be zero!</p>}
 */}
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
                {!userInput && <p className={classes.error} >Can't be zero!</p>}

            </form>
        </div>
    )
}

export default UserInput