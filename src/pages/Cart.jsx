import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {

  const navigate = useNavigate();
  // 🧮 Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // ❌ remove item
  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">

                {/* LEFT SIDE */}
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                </div>

                {/* RIGHT SIDE */}
                <div className="cart-item-meta">

                  <span className="cart-qty">Quantity: {item.qty}</span>

                  <span className="cart-price">Price: ${item.price}</span>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}
          </div>

          {/* 🧾 TOTAL */}
          <div className="cart-total">
            <h2>Total: ${total}</h2>
          </div>

           {/* 🛒 CHECKOUT BUTTON */}
          <div className="checkout-container">
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
        </>
      )}
    </section>
  );
}