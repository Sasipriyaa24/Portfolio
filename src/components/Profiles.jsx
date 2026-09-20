import SectionHeading from "./SectionHeading.jsx";
import SmartLink from "./SmartLink.jsx";
import Icon from "./Icons.jsx";
import Ph from "./Ph.jsx";
import { profiles } from "../data/portfolioData.js";
import { hasValue, isFilled, prettyUrl } from "../utils/helpers.js";

export default function Profiles() {
  const visible = profiles.filter((p) => hasValue(p.url));

  return (
    <section id="profiles" className="section">
      <div className="container">
        <SectionHeading
          title="Profiles"
          subtitle="Find me and my work on these platforms."
        />

        <ul className="profiles__grid" style={{ "--cols": Math.min(visible.length, 4) }}>
          {visible.map((profile) => (
            <li key={profile.id}>
              <SmartLink
                href={profile.url}
                className="profile-card"
                aria-label={`${profile.label} profile`}
              >
                <span className="icon-tile">
                  <Icon name={profile.id} size={22} />
                </span>
                <span className="profile-card__label">{profile.label}</span>
                <span className="profile-card__url">
                  <Ph>{isFilled(profile.url) ? prettyUrl(profile.url) : profile.url}</Ph>
                </span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
