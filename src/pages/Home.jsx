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
        <h1>Warm. Fresh. Made with Love.</h1>
        <p>From family gatherings to special events</p>

        <h3><strong>Testimonials</strong></h3>
        <p>“The Chocolate filled cookies were a hit”</p>
        <p>“The Blueberry crumble muffins were also so delicious, especially the crusted crumble on top”</p>
        <p>“The customer service was beautiful as well, fast, respectful & very kind”</p>
        <p>“I was genuinely amazed at how good it was, not too greasy, not too salty, just perfectly balanced”</p>
        <p>“Best meat pie I’ve had in a while!! Excellent customer service”</p>
        <div className="review-link-container">
          <a
            href="https://share.google/WMmwBfF4xqwI8j2Rz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', textDecoration: 'none' }}
          >
            Leave a review!
          </a>
        </div>

      </div>
    </section>
  )
}
