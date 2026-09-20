import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";
import Ph from "./Ph.jsx";
import { about } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeading
          title="About me"
          subtitle="A quick introduction to who I am and what I'm working towards."
        />

        <div className="about__grid">
          <div className="about__bio">
            {about.bio.map((paragraph, i) => (
              <p key={i}>
                <Ph>{paragraph}</Ph>
              </p>
            ))}
          </div>

          <ul className="about__cards">
            {about.interests.map((item) => (
              <li className="info-card" key={item.title}>
                <span className="icon-tile">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
