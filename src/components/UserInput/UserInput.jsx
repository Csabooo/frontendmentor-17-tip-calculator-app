import React from 'react'
import classes from "./UserInput.module.css";


function UserInput() {


    return (
        <div>
            <form >
                <label className={classes.label} htmlFor="bill">Bill</label>

                <input className={classes.dollar} type="text" id='bill' />

                <div >
                    <label className={classes.label} htmlFor="">Select Tip %</label>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-5">
                        <button className={classes.buttons}>5%</button>
                        <button className={classes.buttons}>10%</button>
                        <button className={classes.buttons}>15%</button>
                        <button className={classes.buttons}>25%</button>
                        <button className={classes.buttons}>50%</button>

                        <input className={classes.custom} type="text" placeholder='Custom' />


                    </div>
                </div>


                <label className={classes.label} htmlFor="people">Number of People</label>
                <input className={classes.people} type="text" placeholder="" id='people' />

            </form>
        </div>
    )
}

export default UserInput