import aboutImage from "../assets/s1.jpg" // replace with your actual image

export default function About() {
  return (
    <section className="home1">

      {/* About section with wrapped image */}
      <div className="about-wrapper">
        <img
          src={aboutImage}
          alt="SunBaked Pastries founders"
          className="about-image"
        />

        <p>
          SunBaked Pastries was created by two best friends who share a passion
          not only for baking, but for bringing people together through food.
        </p>

        <p>
          Our journey began in the summer of 2025, in the heart of Vancouver, BC.
          Saturdays were our days off, and we spent many of those mornings in the
          kitchen baking what we craved—not just for ourselves, but for our
          roommates and our church community. What started as a simple way to
          share homemade treats quickly grew into something bigger. Encouraged
          by the response from those around us, we took a leap of faith and
          turned our passion into a business.
        </p>

        <p>
          What began with chocolate chip cookies and blueberry crumble muffins
          has since expanded into a growing menu that includes cheesecakes,
          meat pies, and custom orders for individuals, gatherings, and special
          events.
        </p>

        <p>
          At SunBaked Pastries, we are committed to quality, care, and community.
          Our products are made using thoughtfully sourced ingredients, with
          close attention to flavor, freshness, and presentation. We believe
          great food should feel comforting, be made with intention, and still
          remain accessible.
        </p>

        <p>
          As we continue to grow, so do our offerings. In addition to small
          orders and collaborations, we now provide catering for a wide range
          of events—including but not limited to birthdays, bridal showers,
          baby showers, workplace functions, social events, and community
          gatherings. No matter the size of the order, we pride ourselves on
          reliable service, thoughtful communication, and pastries made with
          heart. We look forward to baking for your next moment worth celebrating.
        </p>
      </div>
    </section>
  )
}