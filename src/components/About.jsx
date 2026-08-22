import workshopImage from "../assets/product/kisan-blower-workshop-lineup.webp";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img
            src={workshopImage}
            alt="Rows of finished Kisan Blower Udyog mist blowers ready at the workshop"
            className="photo-img"
            width="1200"
            height="800"
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <div className="section-heading section-heading--left">
            <h2>About Kisan Blower Udyog</h2>
          </div>

          <p>
            Kisan Blower Udyog is an agricultural machinery business based in
            Pimpalgaon Baswant, Nashik, Maharashtra.
          </p>
          <p>
            The company focuses on providing practical and reliable agricultural
            spraying machinery for farmers, orchard owners and agricultural
            businesses.
          </p>

          <ul className="about__points">
            <li>Agricultural machinery</li>
            <li>Practical engineering</li>
            <li>Reliability</li>
            <li>Farmer-focused products</li>
            <li>Customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
