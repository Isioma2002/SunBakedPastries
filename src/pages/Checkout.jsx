import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Checkout({ cart }) {
  const [method, setMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const [orderDate, setOrderDate] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  // 🧮 CALCULATIONS
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = method === "delivery" ? 5 : 0;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 4);
  const minDateString = minDate.toISOString().split("T")[0];

  const tipAmountRaw =
    tip === "custom" ? Number(customTip || 0) : subtotal * (tip / 100);

  const tipAmount = Math.max(0, tipAmountRaw);

  const finalTotal = subtotal + deliveryFee + tipAmount;

  const deliveryDisplay =
    method === "delivery" ? `$${deliveryFee.toFixed(2)}` : "N/A";

  // 🧾 CART TABLE
  const formatCartTable = () => {
    return cart
      .map(
        (item) => `
          <tr>
            <td>${item.name}</td>
            <td align="center">${item.qty}</td>
            <td align="right">$${item.price.toFixed(2)}</td>
          </tr>
        `
      )
      .join("");
  };

  // 📩 EMAILS
  const sendEmails = (generatedId) => {
    const templateParams = {
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      order_id: generatedId,
      order_date: orderDate,
      order_items: formatCartTable(),

      order_method: method,
      address: method === "delivery" ? address : "N/A",

      subtotal: subtotal.toFixed(2),
      delivery_fee: deliveryDisplay,
      tip: tipAmount.toFixed(2),
      total: finalTotal.toFixed(2),
    };

    emailjs.send(
      "service_qt61hqs",
      "template_04c6i6b",
      templateParams,
      "5bCQqWfXy_THhxtPr"
    );

    emailjs.send(
      "service_qt61hqs",
      "template_fzasu8a",
      templateParams,
      "5bCQqWfXy_THhxtPr"
    );
  };

  const handlePlaceOrder = () => {
    if (!name || !phone || !email || (method === "delivery" && !address)) {
      alert("Please fill all required fields");
      return;
    }

    if (!orderDate) {
      alert("Please select an order date");
      return;
    }

    const id =
      "SBP-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    setOrderId(id);
    sendEmails(id);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <h1>Order Confirmation</h1>

        <div className="checkout-card confirmation">
          <h2>Your order is confirmed 🎉</h2>

          <p>
            A confirmation email has been sent to <strong>{email}</strong>
          </p>

          <p>
            <strong>Order ID:</strong> {orderId}
          </p>

          <p>
            <strong>Total:</strong> ${finalTotal.toFixed(2)}
          </p>

          <hr />

          <p>
            Please send an e-transfer to:{" "}
            <strong>sunbakedpastry@gmail.com</strong>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      {/* ORDER METHOD */}
      <div className="checkout-card">
        <h2>Order Method</h2>

        <button onClick={() => setMethod("pickup")}>Pickup</button>
        <button onClick={() => setMethod("delivery")}>Delivery</button>

        {method === "delivery" && (
          <input
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        )}
      </div>

      {/* DATE */}
      <div className="checkout-card">
        <h2>Pickup/Delivery Date</h2>

        <p style={{ fontSize: "0.95rem", marginBottom: "10px", color: "#666" }}>
          All orders require a minimum of <strong>4 days</strong> notice. The earliest date is{" "}
          <strong>{minDateString}</strong>.
        </p>

        <input
          type="date"
          min={minDateString}
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
        />
      </div>

      {/* CUSTOMER */}
      <div className="checkout-card">
        <h2>Customer Info</h2>

        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      {/* TIP SYSTEM */}
      <div className="checkout-card">
        <h2>Tip</h2>

        {/* PRESET BUTTONS */}
        {[0, 10, 20, 30].map((p) => (
          <button key={p} onClick={() => setTip(p)}>
            {p}%
          </button>
        ))}

        {/* CUSTOM TOGGLE */}
        <button onClick={() => setTip("custom")}>Custom</button>

        {/* CUSTOM INPUT (manual only, no arrows, no scroll) */}
        {tip === "custom" && (
          <input
            className="custom-tip-input"
            type="number"
            placeholder="Enter custom tip ($)"
            value={customTip}
            min="0"
            step="0.01"
            onWheel={(e) => e.target.blur()}
            onChange={(e) => {
              const value = Number(e.target.value);
              setCustomTip(value < 0 ? "0" : e.target.value);
            }}
          />
        )}
      </div>

      {/* SUMMARY */}
      <div className="checkout-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>

        {method === "delivery" && (
          <p>Delivery: ${deliveryFee.toFixed(2)}</p>
        )}

        <p>Tip: ${tipAmount.toFixed(2)}</p>

        <p>
          <strong>Total: ${finalTotal.toFixed(2)}</strong>
        </p>

        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </section>
  );
}