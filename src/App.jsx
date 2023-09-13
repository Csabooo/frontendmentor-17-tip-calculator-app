import React from "react";
import Attribution from "./components/Attribution/Attribution";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

export default function App() {
  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <main className="max-w-md mx-auto">
        <UserInput></UserInput>
        <ResultsTable></ResultsTable>
      </main >

      <Attribution></Attribution>
    </>
  )

}