import React from "react";
import "./CustomToast.css";

const CustomToast = (props) => {
  return (
    // 
    <div className={props.showToast ? "toast" : "no-toast"}>
        <h4 className="toastTitle">Already exist!!!</h4>
    </div>
  );
};

export default CustomToast;
