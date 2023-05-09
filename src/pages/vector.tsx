export default function index() {
  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="50 2 90 25 90 75 50 98 10 75 10 25"
          fill="black"
          stroke="white"
          stroke-width="6"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <polygon
          points="50 2 90 25 90 75 50 98 10 75 10 25"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <text
          x="48.5"
          y="93"
          text-anchor="middle"
          font-size="50"
          fill="white"
          style={{ fontFamily: "auto", fontSize: "103px" }}
        >
          V
        </text>
      </svg>
    </>
  );
}
