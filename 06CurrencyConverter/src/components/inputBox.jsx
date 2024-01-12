import React, { useId } from "react";

function InputBox({
  label,                                                                         // Label for the input box
  amount,                                                                        // Amount entered by the user
  onAmountChange,                                                                // Function to be called when the amount is changed
  onCurrencyChange,                                                              // Function to be called when the currency is changed
  currencyOptions = [],                                                          // List of currency options
  selectCurrency = "usd",                                                        // Default currency
  amountDisable = false,                                                         // Whether the amount input box is disabled
  currencyDisable = false,                                                       // Whether the currency selection box is disabled
  className = "",                                                                // CSS class name
}) {
  const amountInputId = useId();

  return (
    
  );
}
