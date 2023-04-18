import ShoppingItem from "./ShoppingItem";

export default function ShoppingItems({ items, updateQuantity }) {
  return (
    <div className="item-list">
      {items
        .sort((a, b) => b.quantity - a.quantity) //sort items from most to less
        .map(
          (
            item,
            index //for each item render the component ShoppingItem
          ) => (
            <ShoppingItem
              onQuantityIncrease={() => updateQuantity(index, +1)}
              onQuantityDecrease={() => updateQuantity(index, -1)}
              key={index}
              name={item.name}
              quantity={item.quantity}
            />
          )
        )}
    </div>
  );
}
