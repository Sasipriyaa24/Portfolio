import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";
import Ph from "./Ph.jsx";
import { navLinks, personal } from "../data/portfolioData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Add a border/shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">
            <Icon name="code" size={18} />
          </span>
          <span className="navbar__name">
            <Ph>{personal.name}</Ph>
          </span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>

        <nav
          id="nav-menu"
          className={`navbar__menu ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "is-active" : ""}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
