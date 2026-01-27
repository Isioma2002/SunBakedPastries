import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Blueberry Muffins",
    description: "Classic blueberry muffins, with a crusted lemon crumble.",
    image: "/images/blueberry-muffins.jpg",
    tiers: [
      { qty: 6, price: 12 },
      { qty: 12, price: 24 },
      { qty: 24, price: 45 },
      { qty: 48, price: 90 },
    ],
  },
  {
    id: 2,
    name: "Espresso Chocolate Muffins",
    description: "Rich espresso-infused chocolate muffins.",
    image: "/images/espresso-muffins.jpg",
    tiers: [
      { qty: 6, price: 12 },
      { qty: 12, price: 24 },
      { qty: 24, price: 45 },
      { qty: 48, price: 90 },
    ],
  },
  {
    id: 3,
    name: "Cinnamon Rolls",
    description:
      "A sweet pastry filled with cinnamon and brown sugar, finished with a drizzle of icing.",
    image: "/images/cinnamon-roll.jpg",
    tiers: [
      { qty: 6, price: 20 },
      { qty: 12, price: 40 },
      { qty: 24, price: 65 },
      { qty: 48, price: 80 },
    ],
  },
  {
    id: 4,
    name: "Mini Cheesecake",
    description:
      "Mini cheesecakes with a rich creamy filling on a buttery crust.",
    image: "/images/mini-cheesecake.jpg",
    tiers: [
      { qty: 6, price: 10 },
      { qty: 12, price: 20 },
      { qty: 24, price: 35 },
      { qty: 48, price: 65 },
    ],
  },
  {
    id: 5,
    name: "Savory Meat Pies",
    description: "Golden pastry filled with seasoned ground beef and veggies.",
    image: "/images/meat-pies.jpg",
    tiers: [
      { qty: 6, price: 12 },
      { qty: 12, price: 24 },
      { qty: 24, price: 45 },
      { qty: 48, price: 90 },
    ],
  },
  {
    id: 6,
    name: "Buttermilk Cornbread",
    description:
      "Sweet cornbread loaves with coconut flakes or honey butter.",
    image: "/images/cornbread.jpg",
    tiers: [
      { qty: 6, price: 22 },
      { qty: 12, price: 35 },
      { qty: 24, price: 55 },
      { qty: 48, price: 120 },
    ],
  },
  {
    id: 7,
    name: "Classic Chocolate Cookies",
    description:
      "A timeless favorite, filled with your choice of milk or white chocolate.",
    image: "/images/chocolate-cookies.jpg",
    tiers: [
      { qty: 6, price: 11 },
      { qty: 12, price: 20 },
      { qty: 24, price: 30 },
      { qty: 48, price: 80 },
    ],
  },
];

export default function Menu() {
  // ✅ Everything starts at minimum valid quantity (6)
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 6;
      return acc;
    }, {})
  );

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => {
      if (prev[id] <= 6) return prev;
      return {
        ...prev,
        [id]: prev[id] - 1,
      };
    });
  };

  // ✅ Progressive (marginal) pricing
  const getProgressivePrice = (product, quantity) => {
    let remaining = quantity;
    let total = 0;

    // Sort tiers smallest → largest
    const tiers = [...product.tiers].sort((a, b) => a.qty - b.qty);

    for (let i = tiers.length - 1; i >= 0; i--) {
      const tierQty = tiers[i].qty;
      const unitPrice = tiers[i].price / tierQty;

      if (remaining >= tierQty) {
        const unitsAtThisTier = remaining - tierQty + 1;
        total += unitsAtThisTier * unitPrice;
        remaining -= unitsAtThisTier;
      }
    }

    return Math.round(total);
  };

  return (
    <section className="home1">
      <h1>Menu</h1>

      <div className="menu-grid">
        {productsData.map((product) => {
          const quantity = quantities[product.id];
          const price = getProgressivePrice(product, quantity);

          return (
            <div className="menu-card" key={product.id}>
              <div className="menu-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="menu-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>

              <div className="menu-footer">
                <div className="price">${price}</div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(product.id)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => increaseQty(product.id)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
