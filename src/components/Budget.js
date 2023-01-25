import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [budget_val, setBudget_val] = useState(budget);

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currency}
        <input
          type='number'
          value={budget_val}
          onChange={(e) => {
            e.target.value > 20000
              ? window.alert("Value can not be more than 20,000")
              : setBudget_val(e.target.value);

            e.target.value < expenses
              ? window.alert("Value can not be less than spending")
              : setBudget_val(e.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default Budget;
