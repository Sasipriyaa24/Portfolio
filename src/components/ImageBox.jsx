import Icon from "./Icons.jsx";
import { hasValue, isFilled } from "../utils/helpers.js";

// Shows your image, or a labelled placeholder box until you add one.
export default function ImageBox({
  src,
  alt,
  label,
  variant = "project", // "project" | "avatar"
  priority = false,
}) {
  const filled = isFilled(src);

  return (
    <div
      className={`image-box image-box--${variant}${filled ? " image-box--filled" : ""}`}
    >
      {filled ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div
          className="image-box__placeholder"
          role="img"
          aria-label={`${alt} (placeholder)`}
        >
          <Icon
            name={variant === "avatar" ? "user" : "image"}
            size={variant === "avatar" ? 44 : 30}
          />
          <span>{hasValue(src) ? src : label}</span>
          <small>Replace in src/data/portfolioData.js</small>
        </div>
      )}
    </div>
  );
}
