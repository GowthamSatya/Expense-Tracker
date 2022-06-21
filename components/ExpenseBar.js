import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiMoneyStack, GiPayMoney } from "react-icons/gi";

const ExpenseBar = () => {
  const dispatch = useDispatch();
  const { spent, remaining } = useSelector((state) => state.amount);
  return (
    <div className="expense-box flex items-center justify-between w-full rounded-full px-4 py-2 my-2">
      <div className=" flex items-center">
        <div className="flex items-center justify-center expense-image w-12 h-12 -ml-1 mr-2 rounded-full">
          <GiMoneyStack size={40} className="text-[#00b300]" />
        </div>
        <div className="flex flex-col ml-2">
          <h3 className="available-bar-text font-extrabold text-xl">
            Available
          </h3>
          <p className="text-md font-semibold">
            <b>$</b> {remaining}
          </p>
        </div>
      </div>
      <div className="break-bar w-[5px] rounded-full border-black h-12"></div>
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-2">
          <h3 className="spent-bar-text font-extrabold text-xl">Spent</h3>
          <p className="text-md font-semibold">
            <b>$</b> {spent}
          </p>
        </div>
        <div className="flex items-center justify-center expense-image w-12 h-12 -mr-1 ml-2 rounded-full">
          <GiPayMoney size={35} className="text-[#ff5f1b]" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseBar;
