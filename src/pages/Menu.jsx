import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Croissant",
    description: "Buttery, flaky French pastry baked fresh daily.",
    price: 4,
    image: "/images/croissant.jpg",
  },
  {
    id: 2,
    name: "Cinnamon Roll",
    description: "Soft roll with cinnamon sugar and vanilla glaze.",
    price: 5,
    image: "/images/cinnamon-roll.jpg",
  },
  {
    id: 3,
    name: "Chocolate Éclair",
    description: "Choux pastry filled with vanilla cream.",
    price: 6,
    image: "/images/eclair.jpg",
  },
  {
    id: 4,
    name: "Macaron Box",
    description: "Assorted gourmet French macarons.",
    price: 18,
    image: "/images/macarons.jpg",
  },
  {
    id: 5,
    name: "Almond Tart",
    description: "Rich almond filling with a crisp crust.",
    price: 7,
    image: "/images/almond-tart.jpg",
  },
  {
    id: 6,
    name: "Pain au Chocolat",
    description: "Classic chocolate-filled pastry.",
    price: 5,
    image: "/images/pain-au-chocolat.jpg",
  },
  {
    id: 7,
    name: "Custom Pastry Box",
    description: "Hand-picked pastries for any occasion.",
    price: 25,
    image: "/images/pastry-box.jpg",
  },
];

export default function Menu() {
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const increaseQty = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decreaseQty = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  return (
    <section className="home1">
      <h1>Menu</h1>

      <div className="menu-grid">
        {productsData.map((product) => (
          <div className="menu-card" key={product.id}>
            <div className="menu-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="menu-content">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>

            <div className="menu-footer">
              <div className="price">
                ${product.price * quantities[product.id]}
              </div>

              <div className="quantity-controls">
                <button onClick={() => decreaseQty(product.id)}>-</button>
                <span>{quantities[product.id]}</span>
                <button onClick={() => increaseQty(product.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
