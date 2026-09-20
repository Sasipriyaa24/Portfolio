import Ph from "./Ph.jsx";
import { personal } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} <Ph>{personal.name}</Ph>
        </p>
        <p>Built with React and Vite</p>
      </div>
    </footer>
  );
}
