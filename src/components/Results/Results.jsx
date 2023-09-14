import React from "react";
import classes from "./Results.module.css"

function Results() {
    return (
        <div className={classes.result}>
            <form>
                <div >
                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Tip Amount</label>
                            <span>/ person</span>
                        </div>
                        <p>$4.27</p>
                    </div>

                    <div className={classes.table}>
                        <div className={classes.text}>
                            <label>Total</label>
                            <span>/ person</span>
                        </div>
                        <p>$32.79</p>
                    </div>
                </div>

                <button type='reset'>RESET</button>
            </form>

        </div >
    )
}

export default Results;