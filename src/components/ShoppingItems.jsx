import ShoppingItem from "./ShoppingItem";

export default function ShoppingItems({ items, updateQuantity }) {
  return (
    <div className="item-list">
      {items
        .sort((a, b) => b.quantity - a.quantity)
        .map((item, index) => (
          <ShoppingItem
            onQuantityIncrease={() => updateQuantity(index, +1)}
            onQuantityDecrease={() => updateQuantity(index, -1)}
            key={index}
            name={item.name}
            quantity={item.quantity}
          />
        ))}
    </div>
  );
}
