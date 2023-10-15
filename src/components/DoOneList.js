import React from "react";

const DoOneList = (props) => {
  return (
    <div className="list-item">
      <div>
        <li>{props.item}</li>
      </div>

      <div className="icons-group">
        <span className="icons">
          <i className="fa-regular fa-pen-to-square"></i>
        </span>
        <span className="icons">
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default DoOneList;
