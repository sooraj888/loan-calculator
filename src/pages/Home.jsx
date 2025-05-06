import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PositiveNumberInput from "../components/PositiveNumberInput";
import IsValidNumber from "../utils/IsValidNumber";
import useEmiCalculator from "../hooks/useEmiCalculator";
import EmiScheduleTable from "../components/EmiScheduleTable";

export default function Home() {
  const [loanAmount, setLoanAmount] = useState("100000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [loanTerm, setLoanTerm] = useState("5");

  const [currencyType, setCurrencyType] = React.useState("USD");

  let emiCalculation = {};
  const [isToggle, setIsToggle] = useState(false);

  const { emi, schedule } = useEmiCalculator(
    loanAmount,
    interestRate,
    loanTerm,
    currencyType,
    isToggle
  );

  const onClickCalculate = () => {
    if (
      IsValidNumber(loanAmount, 1, Infinity) &&
      IsValidNumber(interestRate, 0.00001, 100) &&
      IsValidNumber(loanTerm, 1, 30)
    ) {
      handleCalculation();
    }
  };

  const handleCalculation = () => {
    setIsToggle((prev) => !prev);
  };

  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCurrencyType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ padding: "1rem" }}>
        <Typography variant="h4">Loan Calculator Dashboard</Typography>

        <PositiveNumberInput
          label="Loan Amount"
          variant="outlined"
          type="number"
          margin="normal"
          sx={{ marginRight: "1rem", marginLeft: "0px" }}
          onChange={(value) => setLoanAmount(value)}
          value={loanAmount}
          required
          max={Infinity}
        />
        <PositiveNumberInput
          label="Interest Rate %"
          variant="outlined"
          type="number"
          margin="normal"
          onChange={(value) => setInterestRate(value)}
          value={interestRate}
          sx={{ marginRight: "1rem", marginLeft: "0px" }}
          required
          min={0.00001}
          max={100}
        />
        <PositiveNumberInput
          label="Loan Term (Years)"
          variant="outlined"
          type="number"
          margin="normal"
          onChange={(value) => setLoanTerm(value)}
          value={loanTerm}
          sx={{ marginRight: "1rem", marginLeft: "0px" }}
          required
          max={30}
        />
        <Button
          sx={{ display: "block", margin: "1rem 0px" }}
          variant="contained"
          onClick={onClickCalculate}
        >
          Calculate
        </Button>

        <Container
          sx={{
            padding: "0px !important",
          }}
        >
          <Typography variant="h6">Monthly EMI: {emi}</Typography>
          <FormControl sx={{ mt: 2, mb: 2, minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={currencyType}
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
              <MenuItem value={"AUD"}>AUD</MenuItem>
              <MenuItem value={"CAD"}>CAD</MenuItem>
            </Select>
          </FormControl>
          {/* {JSON.stringify(schedule)} */}
          <Typography variant="h6" sx={{ p: 2 }}>
            Amortization Schedule ({currencyType})
          </Typography>
          <EmiScheduleTable schedule={schedule} />
        </Container>
      </Container>
    </>
  );
}
