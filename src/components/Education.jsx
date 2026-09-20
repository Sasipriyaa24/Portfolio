import SectionHeading from "./SectionHeading.jsx";
import Ph from "./Ph.jsx";
import { education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeading
          title="Education"
          subtitle="My academic journey so far."
        />

        <ol className="timeline">
          {education.map((item) => (
            <li className="timeline__item" key={item.degree}>
              <article className="edu-card">
                <div className="edu-card__head">
                  <h3>{item.degree}</h3>
                  <span className="edu-card__years">
                    <Ph>{item.years}</Ph>
                  </span>
                </div>
                <p className="edu-card__institution">
                  <Ph>{item.institution}</Ph>
                </p>
                <dl className="edu-card__details">
                  {item.details.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>
                        <Ph>{row.value}</Ph>
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
