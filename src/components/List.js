import React from "react";
import "../css/List.css";

export default function List({ list, favoryteItem, selectItem }) {
  return (
    <ul>
      {typeof list === "undefined" ? (
        <div className="lds-ellipsis"></div>
      ) : list.length > 0 ? (
        list.map((tag) => (
          <li key={tag._id}>
            <span onClick={() => selectItem(tag.name)}>{tag.name}</span>
            <button
              onClick={() => favoryteItem(tag._id)}
              className="content-icon"
            >
              <span className={`icon icon-${tag.favorite}`}></span>
            </button>
          </li>
        ))
      ) : (
        <li className="no-found">Busqueda sin resultados </li>
      )}
    </ul>
  );
}
