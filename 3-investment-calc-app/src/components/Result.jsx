import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ data }) {
  let totalInterest = 0;
  let capital = 0;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {data.initialInvestment != null &&
          data.annualInvestment != null &&
          data.expectedReturn != null &&
          data.duration != null &&
          data.duration > 0 ? (
            calculateInvestmentResults(data).map((finalData) => {
              totalInterest += finalData.interest;
              capital = finalData.valueEndOfYear - totalInterest;

              return (
                <tr key={finalData.year}>
                  <td>{finalData.year}</td>
                  <td>{formatter.format(finalData.valueEndOfYear)}</td>
                  <td>{formatter.format(finalData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(capital)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>
                {data.duration < 1 && data.duration != null ? (
                  <p className="error">The duration must be greater than 0.</p>
                ) : (
                  <p className="empty">
                    Please fill in the data to see results.
                  </p>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
