import { useState } from "react";

export default function Checkout({ cart }) {
  const [method, setMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // ✅ NEW
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  // 🧮 Base total
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  // 🚚 Delivery charge
  const deliveryFee = method === "delivery" ? 5 : 0;

  // 📅 Minimum order date (3 days from today)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 4);
  const minDateString = minDate.toISOString().split("T")[0];

  // 💰 Tip calculation
  const tipAmount =
    tip === "custom"
      ? Number(customTip || 0)
      : subtotal * (tip / 100);

  // 🧾 Final total
  const finalTotal = subtotal + deliveryFee + tipAmount;

  const handlePlaceOrder = () => {
    // Basic validation
    if (!name || !phone || !email || (method === "delivery" && !address)) {
      alert("Please fill all required fields including email");
      return;
    }

    if (!orderDate) {
      alert("Please select an order date");
      return;
    }

    const id =
      "SBP-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();

    setOrderId(id);
    setOrderPlaced(true);
  };

  // ✅ Order Confirmation Screen
  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <h1>Order Confirmation</h1>

        <div className="checkout-card confirmation">
          <h2>Complete Your Payment</h2>

          <p>
            Please send an <strong>Interac e-Transfer</strong> using the details below:
          </p>

          <div className="payment-details">
            <p><strong>Email: </strong>sunbakedpastry@gmail.com</p>
            <p><strong>Customer Email: </strong>{email}</p> {/* ✅ NEW */}
            <p><strong>Amount: </strong>${finalTotal.toFixed(2)}</p>
            <p><strong>Order ID: </strong>{orderId}</p>
            <p><strong>Order Method: </strong>{method === "pickup" ? "Pickup" : "Delivery"}</p>

            {method === "delivery" && (
              <p><strong>Delivery Address: </strong>{address}</p>
            )}

            <p><strong>Order Date: </strong>{orderDate}</p>
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
          <>
            <input
              type="text"
              placeholder="Enter delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <p className="delivery-fee-note">
              🚚 Delivery fee: $5.00 will be added to your total.
            </p>
          </>
        )}
      </div>

      {/* 📅 Order Date */}
      <div className="checkout-card">
        <h2>Select Order Date</h2>

        <p className="order-date-note">
          Please allow a minimum of 3 days for your order to be prepared.
        </p>

        <input
          type="date"
          value={orderDate}
          min={minDateString}
          onChange={(e) => setOrderDate(e.target.value)}
        />
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

        {/* ✅ NEW EMAIL FIELD */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            Custom Amount
          </button>
        </div>

        {tip === "custom" && (
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter tip amount ($)"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
          />
        )}
      </div>

      {/* 🧾 Summary */}
      <div className="checkout-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>

        {method === "delivery" && (
          <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        )}

        <p>Tip: ${tipAmount.toFixed(2)}</p>

        <h2>Total: ${finalTotal.toFixed(2)}</h2>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </section>
  );
}