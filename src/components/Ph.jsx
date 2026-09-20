// Highlights any [PLACEHOLDER_TAG] found inside a string so you can see what
// still needs replacing. Once you replace the text, the highlight disappears.
const TAG = /(\[[A-Z0-9][A-Z0-9_ ,/-]*\])/g;

export default function Ph({ children }) {
  if (typeof children !== "string") return children;
  const parts = children.split(TAG); // odd indexes are the matched tags
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark className="ph" key={i}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
