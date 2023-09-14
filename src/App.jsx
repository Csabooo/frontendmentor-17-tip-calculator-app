import React from "react";
import Attribution from "./components/Attribution/Attribution";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

export default function App() {
  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <main className="max-w-md mx-auto">
        <UserInput></UserInput>
        <Results></Results>
      </main >

      <Attribution></Attribution>
    </>
  )

}