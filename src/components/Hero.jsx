import ImageBox from "./ImageBox.jsx";
import Ph from "./Ph.jsx";
import { personal } from "../data/portfolioData.js";
import { hasValue } from "../utils/helpers.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          {hasValue(personal.availability) && (
            <p className="status hero-anim" style={{ "--i": 0 }}>
              <span className="status__dot" aria-hidden="true" />
              <Ph>{personal.availability}</Ph>
            </p>
          )}

          <h1 className="hero-anim" style={{ "--i": 1 }}>
            <Ph>{personal.name}</Ph>
          </h1>

          <p className="hero__role hero-anim" style={{ "--i": 2 }}>
            <Ph>{personal.role}</Ph>
          </p>

          <p className="hero__intro hero-anim" style={{ "--i": 3 }}>
            <Ph>{personal.intro}</Ph>
          </p>

          <div className="hero__actions hero-anim" style={{ "--i": 4 }}>
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn--secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__media hero-anim" style={{ "--i": 2 }}>
          <div className="hero__frame">
            <ImageBox
              src={personal.image}
              alt={`${personal.name} profile photo`}
              label="[YOUR_PROFILE_IMAGE]"
              variant="avatar"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
