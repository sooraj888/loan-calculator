import React, { useState } from "react";
import { TextField } from "@mui/material";

const PositiveNumberInput = ({
  label,
  min = 1,
  max = Infinity,
  value,
  onChange,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleInputChange = (e) => {
    const val = Number.parseFloat(e.target.value);

    if (Number.isNaN(val)) {
      onChange("");
      setHelperText("Please enter a valid number");
      setError(true);
    } else {
      if (val < min) {
        setError(true);
        setHelperText(`Value must be greater than or equal to ${min}`);
        onChange(val);
        return;
      } else if (val > max) {
        setHelperText(`Value must be less than or equal to ${max}`);
        setError(true);
        onChange(val);
        return;
      } else {
        onChange(val);
        setError(false);
        setHelperText("");
      }
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleInputChange}
      error={error}
      helperText={helperText}
      inputMode="decimal"
      {...props}
    />
  );
};

export default PositiveNumberInput;
