export default function ShoppingItem({
  name,
  quantity,
  onQuantityDecrease,
  onQuantityIncrease,
}) {
  if (quantity === 0) {
    return null;
  }
  return (
    <div className="item-container">
      <div className="item-name">{name}</div>
      <div className="item-quantity">
        <button onClick={onQuantityDecrease}> - </button> <p> {quantity} </p>
        <button onClick={onQuantityIncrease}> + </button>
      </div>
    </div>
  );
}
