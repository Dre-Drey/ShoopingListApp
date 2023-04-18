import { useEffect, useState } from "react";
import "../style/shoppingListApp.css";
import ShoppingItems from "./ShoppingItems";
import Form from "./Form";

export default function ShoppingListApp() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("items")) || [
      { name: "Banana", quantity: 15 },
      { name: "Eggs", quantity: 8 },
      { name: "Apple", quantity: 1 },
      { name: "Carottes", quantity: 0 },
    ]
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //Increase and decrease each item
  const updateQuantity = (index, increment) => {
    setItem((items) => {
      const newItems = [...items];
      newItems[index].quantity = newItems[index].quantity + increment;
      return newItems;
    });
  };

  //Add item in the form
  const onAddItem = (newItem) => {
    setItem((items) => {
      const newItems = [...items, newItem];
      return newItems;
    });
  };

  return (
    <>
      <ShoppingItems items={items} updateQuantity={updateQuantity} />
      <Form onAddItem={onAddItem} />
    </>
  );
}
