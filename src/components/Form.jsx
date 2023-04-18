import { useState, useEffect } from "react";
import "../style/form.css";

export default function Form({ onAddItem }) {
  const [inputText, setInputText] = useState(
    JSON.parse(localStorage.getItem("name")) || ""
  ); //input text set to localstorage if available, else to empty string

  const [inputQuantity, setInputQuantity] = useState(
    JSON.parse(localStorage.getItem("quantity")) || 1
  ); //same as input text

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(inputText));
    localStorage.setItem("quantity", JSON.stringify(inputQuantity));
  }, [inputText, inputQuantity]); //for each modification of input text and input quantity, the name and the quantity are stored in localstorage

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        return onAddItem({ name: inputText, quantity: inputQuantity });
      }}
    >
      <h2>Ajouter des items</h2>
      <div className="form">
        <label>
          Item :
          <input
            type="text"
            required
            placeholder="item"
            value={inputText}
            onChange={(e) =>
              setInputText(
                // from https://ricardometring.com/javascript-replace-special-characters?utm_content=cmp-true
                e.target.value
                  .normalize("NFD")
                  .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
              )
            }
          ></input>
        </label>
        <label>
          Quantité :
          <input
            type="number"
            required
            min={1}
            placeholder="qty"
            value={inputQuantity}
            onChange={(e) => parseInt(setInputQuantity(e.target.value))}
          ></input>
        </label>
        <button>Ajouter</button>
      </div>
    </form>
  );
}
