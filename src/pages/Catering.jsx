import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";

export default function Catering() {
  return (
    <section className="home1">
      <div className="about-text">
        <h1>Catering & Event Partnerships</h1>

        <p>
          Whether you're hosting an office meeting, open house, wedding,
          church gathering, birthday celebration, or community function,
          SunBaked Pastries is here to help make your event memorable.
        </p>

        <p>
          We specialize in homemade sweet and savoury baked goods that bring
          people together. From our signature savoury meat pies and SunBaked
          Rolls to our customer-favourite blueberry crumble muffins, every
          item is prepared with care and attention to presentation.
        </p>

        <h2>Our Catering Offerings</h2>

        <h3>Savoury Favourites</h3>
        <ul>
          <li>Signature Savoury Meat Pies</li>
          <li>SunBaked Rolls</li>
          <li>Sandwich Platters</li>
        </ul>

        <h3>Sweet Selections</h3>
        <ul>
          <li>Blueberry Crumble Muffins</li>
          <li>Lemon Crumble Muffins</li>
          <li>Gourmet Cookies</li>
          <li>Cheesecakes</li>
          <li>Honey-Glazed Cornbread</li>
          <li>Dessert Boxes</li>
        </ul>

        <p>
          All catering packages can be customized to suit your event,
          including guest count, menu selections, flavours, and dietary
          considerations.
        </p>

        <h2>Perfect For</h2>
        <ul>
          <li>Corporate Meetings & Office Events</li>
          <li>Open Houses & Client Appreciation Events</li>
          <li>Weddings & Bridal Showers</li>
          <li>Church & Community Gatherings</li>
          <li>Birthdays & Family Celebrations</li>
          <li>Vendor & Event Planner Partnerships</li>
        </ul>

        <h2>Why Choose SunBaked Pastries?</h2>
        <ul>
          <li>Fresh, homemade sweet and savoury offerings</li>
          <li>Flexible catering packages for events of all sizes</li>
          <li>Reliable service and clear communication</li>
          <li>Professional presentation</li>
          <li>Customized menus tailored to your needs</li>
        </ul>

        <h2>Vendor & Business Partnerships</h2>

        <p>
          We proudly partner with businesses, realtors, event planners,
          churches, and community organizations throughout the Lower
          Mainland. Whether you're looking for catering for a one-time event
          or an ongoing partnership, we're happy to create a customized
          solution that fits your needs.
        </p>

        <h2>Let's Bake Something Special Together!</h2>

        <p>
          Planning an event? We'd love to hear about it.
        </p>

        <p>
          Contact us by phone or email to discuss your event, explore menu
          options, and receive a customized catering proposal. We look
          forward to helping make your gathering one to remember.
        </p>

        <div className="catering-images">
          <img
            src={c1}
            alt="SunBaked Pastries Catering Display"
            className="catering-image"
          />

          <img
            src={c2}
            alt="SunBaked Pastries Event Catering"
            className="catering-image"
          />
        </div>
      </div>
    </section>
  );
}