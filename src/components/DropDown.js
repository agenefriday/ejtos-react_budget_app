import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const DropDown = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (name) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: name,
    });
  };

  return (
    <div
      style={{ backgroundColor: "#ccd", padding: "20px", borderRadius: "5px" }}
    >
      <span
        style={{
          backgroundColor: "green",
          padding: "5px",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Currency{" "}
        <select
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
          onChange={(e) => changeCurrency(e.target.value)}
        >
          <option style={{ color: "black" }} value={"$"}>
            $ Dollar
          </option>
          <option style={{ color: "black" }} value={"£"}>
            £ Pound
          </option>
          <option style={{ color: "black" }} value={"€"}>
            € Euro
          </option>
          <option style={{ color: "black" }} value={"₹"}>
            ₹ Ruppee
          </option>
        </select>
      </span>
    </div>
  );
};

export default DropDown;
