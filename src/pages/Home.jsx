import heroImage from '../assets/pastry-hero.png' // adjust filename if needed

export default function Home() {
  return (
    <section className="home">
      {/* Hero Image */}
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Freshly baked pastries"
        />
      </div>

      {/* Content */}
      <div className="home1">
        <h1>Freshly Baked. Made with Christ&apos;s Love.</h1>
        <p>Handcrafted pastries baked fresh for every occasion.</p>

        <h3><strong>Testimonials</strong></h3>
        <p>"Absolutely delicious!"</p>
        <p>"Best pastries in town."</p>
      </div>
    </section>
  )
}
