import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
const Result = ({ investmentObject }) => {
  const anunualData = calculateInvestmentResults(investmentObject);
  console.log("Investment Object:", investmentObject);
  console.log("Calculated Investment Data:", anunualData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {anunualData &&
          anunualData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowData.year}</td>
              <td>{rowData.valueEndOfYear}</td>
              <td>{rowData.interest}</td>
              <td>{rowData.annualInvestment}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Result;
