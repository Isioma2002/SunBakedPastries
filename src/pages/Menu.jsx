import { useState } from "react";

import blueberryMuffin from "../assets/MENU_blueberry muffin.jpg";
import cinnamonRolls from "../assets/MENU_cinammon rolls.jpg";
import cookies from "../assets/MENU_cookies.jpg";
import meatPie from "../assets/MENU_meat pie.jpg";
import cs from "../assets/cs.jpg";
const productsData = [
  {
    id: 1,
    name: "Blueberry Muffins",
    description: "Classic blueberry muffins, with a crusted lemon crumble.",
    image: blueberryMuffin,
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
    image: cs,
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
    image: cinnamonRolls,
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
    image: cs,
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
    image: meatPie,
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
    image: cs,
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
      "A timeless favorite, filled with milk or white chocolate.",
    image: cookies,
    tiers: [
      { qty: 6, price: 11 },
      { qty: 12, price: 20 },
      { qty: 24, price: 30 },
      { qty: 48, price: 80 },
    ],
  },
];

export default function Menu({ cart, setCart }) {
  // Selected tier per product
  const [selectedTier, setSelectedTier] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = product.tiers[0];
      return acc;
    }, {})
  );

  // 🛒 Cart state
  

  const handleChange = (product, tierIndex) => {
    setSelectedTier((prev) => ({
      ...prev,
      [product.id]: product.tiers[tierIndex],
    }));
  };

  // 🛒 Add to cart function
  const addToCart = (product) => {
    const tier = selectedTier[product.id];

    const item = {
      id: product.id,
      name: product.name,
      qty: tier.qty,
      price: tier.price,
    };

    setCart((prev) => [...prev, item]);
    console.log("Cart:", [...cart, item]); // debug
  };

  return (
    <section className="home1">

      <div className="menu-grid">
        {productsData.map((product) => {
          const tier = selectedTier[product.id];

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
                <div className="price">${tier.price}</div>

                <select
                  value={product.tiers.indexOf(tier)}
                  onChange={(e) => handleChange(product, Number(e.target.value))}
                >
                  {product.tiers.map((t, index) => (
                    <option key={index} value={index}>
                      {t.qty} for ${t.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* ✅ ADD TO CART BUTTON */}
              <div className="menu-button">
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}