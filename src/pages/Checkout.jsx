import { useState } from "react";

export default function Checkout({ cart }) {
  const [method, setMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  // 🧮 base total
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  // 🎯 tip calculation
  const tipPercent = tip === "custom" ? Number(customTip || 0) : tip;
  const tipAmount = subtotal * (tipPercent / 100);

  const finalTotal = subtotal + tipAmount;

  const handlePlaceOrder = () => {
  // basic validation
  if (!name || !phone || (method === "delivery" && !address)) {
    alert("Please fill all required fields");
    return;
  }

  // 🔑 Generate Order ID (example: SBP-483921)
  const id =
    "SBP-" +
    Math.random().toString(36).substring(2, 8).toUpperCase();

  setOrderId(id);
  setOrderPlaced(true);
};

if (orderPlaced) {
  return (
    <section className="checkout-page">
      <h1>Order Confirmation</h1>

      <div className="checkout-card confirmation">
        <h2>Complete Your Payment</h2>

        <p>
          Please send an <strong>Interac e-Transfer</strong> using the details
          below:
        </p>

        <div className="payment-details">
          <p><strong>Email: </strong>sunbakedpastry@gmail.com</p>
          <p><strong>Amount: </strong>${finalTotal.toFixed(2)}</p>
          <p><strong>Order ID: </strong>{orderId}</p>
        </div>

        <hr />

        <p className="note">
          ⚠️ Your order will only be processed once payment is received.
        </p>
      </div>
    </section>
  );
}

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      {/* 🚚 Pickup or Delivery */}
      <div className="checkout-card">
        <h2>Order Method</h2>
        <div className="method-options">
          <button
            className={method === "pickup" ? "active" : ""}
            onClick={() => setMethod("pickup")}
          >
            Pickup
          </button>

          <button
            className={method === "delivery" ? "active" : ""}
            onClick={() => setMethod("delivery")}
          >
            Delivery
          </button>
        </div>

        {method === "delivery" && (
          <input
            type="text"
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        )}
      </div>

      {/* 👤 Customer Info */}
      <div className="checkout-card">
        <h2>Customer Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* 💰 Tips */}
      <div className="checkout-card">
        <h2>Add a Tip</h2>

        <div className="tip-options">
          {[0, 10, 20, 30].map((percent) => (
            <button
              key={percent}
              className={tip === percent ? "active" : ""}
              onClick={() => setTip(percent)}
            >
              {percent}%
            </button>
          ))}

          <button
            className={tip === "custom" ? "active" : ""}
            onClick={() => setTip("custom")}
          >
            Custom
          </button>
        </div>

        {tip === "custom" && (
          <input
            type="number"
            placeholder="Enter %"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
          />
        )}
      </div>

      {/* 🧾 Summary */}
      <div className="checkout-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tip: ${tipAmount.toFixed(2)}</p>
        <h2>Total: ${finalTotal.toFixed(2)}</h2>

        <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </section>
  );
}