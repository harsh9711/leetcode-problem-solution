const formattingNumber = (numbersInString) => {
    let output = "";
    for (let i = 0; i < numbersInString.length; i++)
      output =
        i === 3
          ? `(${output}) ${numbersInString[i]}`
          : i === 6
          ? `${output}-${numbersInString[i]}`
          : `${output}${numbersInString[i]}`;
  
    return output;
  };
  
  export { formattingNumber };
  