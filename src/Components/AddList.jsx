import React, { useState } from "react";

const AddList = (props) => {
  const [Item, setItem] = useState("");
  const [Date, setDate] = useState("");
  return (
    <div>
      <div className="  flex gap-4 mt-3 p-4">
        <input
        required
          value={Item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className="text-lg px-4 rounded-lg w-full py-2 bg-[#eee]  "
          type="text"
          placeholder="Enter Todo Here"
        />
        <input
        required
          value={Date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="text-lg px-4 rounded-lg w-full  py-2 bg-[#eee]  "
          type="date"
        />
        <button
          onClick={() => {
            setDate("");
            setItem("");
            props.newTodolist({ Item, Date });
          }}
          className="text-white text-base w-full rounded-lg bg-green-600 px-4 py-3 font-semibold"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddList;
