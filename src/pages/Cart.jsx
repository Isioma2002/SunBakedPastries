export default function Cart({ cart }) {
  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.qty}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}