export default function SectionDivider({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        lineHeight: 0,
        transform: inverted ? "rotate(180deg)" : undefined,
        userSelect: "none",
      }}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: 56 }}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill="#111111"
        />
      </svg>
    </div>
  );
}
