import { useState } from "react";

import classes from "./Results.module.css"

function Results(props) {

    const initialUserInput = {
        "tipAmount": 0.00,
        "total": 0.00
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


    const [userInput, setUserInput] = useState(initialUserInput);


    return (
        <div className={classes.result}>
            <form>
                <div >
                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Tip Amount</label>
                            <span>/ person</span>
                        </div>
                        <p>{formatter.format(userInput["tipAmount"])}</p>
                    </div>

                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Total</label>
                            <span>/ person</span>
                        </div>
                        <p>{formatter.format(userInput["total"])}</p>
                    </div>
                </div>

                <button type='reset'>RESET</button>
            </form>

        </div >
    )
}

export default Results;