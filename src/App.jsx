import React from "react";
import Attribution from "./components/Attribution/Attribution";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

export default function App() {
  return (
    <>
      <div>
        <h1>SPLI<br />TTER</h1>
        <UserInput></UserInput>
        <ResultsTable></ResultsTable>
      </div >

      <Attribution></Attribution>
    </>
  )

}