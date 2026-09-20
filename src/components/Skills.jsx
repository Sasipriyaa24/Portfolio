import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";
import { skills } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          title="Skills"
          subtitle="The languages, technologies and tools I work with."
        />

        <div className="skills__grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-card__head">
                <span className="icon-tile">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.category}</h3>
              </div>
              <ul className="chips">
                {group.items.map((skill) => (
                  <li className="chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
