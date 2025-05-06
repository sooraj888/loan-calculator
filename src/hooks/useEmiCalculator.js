import { useMemo } from "react";

const useEmiCalculator = (
  loanAmount,
  interestRate,
  years,
  currency = "USD",
  toggle
) => {
  return useMemo(() => {
    if (!loanAmount || !interestRate || !years)
      return { emi: "0.00", schedule: [] };

    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseInt(years * 12);

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    let balance = P;
    const schedule = [];

    for (let month = 1; month <= N; month++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      schedule.push({
        month,
        principal: formatCurrency(principal, currency),
        interest: formatCurrency(interest, currency),
        remainingBalance: formatCurrency(balance > 0 ? balance : 0, currency),
      });
    }

    return {
      emi: formatCurrency(emi, currency),
      schedule,
    };
  }, [currency, toggle]);
};

// Currency formatter
const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
};

export default useEmiCalculator;
