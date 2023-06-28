import React, { useState } from "react";
import { formattingNumber } from "./utils";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (value) => {
    let numbers = value?.match(/\d/g)?.join("");
    if (phoneNumber.length > value.length || /^[0-9]/.test(value.at(-1)))
      setPhoneNumber(numbers ? formattingNumber(numbers) : "");
  };

  return (
    <div className="container text-center">
      <input
        type="text"
        id="phone"
        maxLength="14"
        value={phoneNumber}
        onChange={({ currentTarget }) => handlePhoneNumber(currentTarget.value)}
        placeholder="mobile number"
        autoComplete="off"
      />
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
        <div>
         question 1: above solution 
        </div>
 
        <div>
          Q2 : <br />
          Consider the scenario where a user removes some digits from the middle
          of the formatted number. 
          ####(unable to understand this question pls give some type of test case for it) 
        </div>
      </div>
    </div>
  );
}
