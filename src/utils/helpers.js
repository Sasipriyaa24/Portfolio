// A value counts as a placeholder when it starts with a [BRACKETED_TAG].
export const isPlaceholder = (value) =>
  typeof value === "string" && /^\s*\[[^\]]+\]/.test(value);

export const hasValue = (value) =>
  typeof value === "string" && value.trim() !== "";

// "Filled" = the person has replaced the placeholder with a real value.
export const isFilled = (value) => hasValue(value) && !isPlaceholder(value);

// https://www.github.com/name/  ->  github.com/name
export const prettyUrl = (url) =>
  url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
