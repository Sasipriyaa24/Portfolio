import { isFilled } from "../utils/helpers.js";

// A link that stays inert while its URL is still a [PLACEHOLDER],
// and becomes a normal link as soon as you paste a real URL.
export default function SmartLink({
  href,
  external = true,
  className = "",
  children,
  ...rest
}) {
  if (!isFilled(href)) {
    return (
      <a
        href="#"
        className={className}
        onClick={(e) => e.preventDefault()}
        title="Placeholder link. Add the real URL in src/data/portfolioData.js"
        {...rest}
      >
        {children}
      </a>
    );
  }

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={className} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
