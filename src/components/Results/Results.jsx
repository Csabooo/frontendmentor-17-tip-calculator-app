import { useState, useEffect } from "react";

import classes from "./Results.module.css"


function Results(props) {

    const [defaultTipAmount, setTipAmount] = useState(props.tips);
    const [defaultTotal, setTotal] = useState(props.totals);


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    });

    useEffect(() => {
        setTipAmount(props.tips);
        setTotal(props.totals);
    }, [props.tips, props.totals]);



    const resetHandler = (event) => {
        event.preventDefault();
        props.onReset();
    };

    return (
        <div className={classes.result}>

            <form >
                <div >
                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Tip Amount</label>
                            <span>/ person</span>
                        </div>

                        <p>{formatter.format(defaultTipAmount)}</p>
                    </div>

                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Total</label>
                            <span>/ person</span>
                        </div>
                        <p>{formatter.format(defaultTotal)}</p>
                    </div>
                </div>

                <button type='button' onClick={resetHandler}>RESET</button>
            </form>

        </div >
    )
}

export default Results;