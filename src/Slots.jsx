export default function Slots({ val1, val2, val3 }) {
  const refresh = () => {
    return window.location.reload();
  };
  const isWinner = val1 === val2 && val1 === val3;

  return (
    <div>
      <h1 style={{ color: "blue" }}>Match All 3</h1>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {isWinner ? (
        <h2 style={{ color: "green" }}>You Win!!!</h2>
      ) : (
        <h2 style={{ color: "red" }}>Sorry Try Again!</h2>
      )}
      <button
        onClick={refresh}
        style={{ backgroundColor: "#008CBA", border: "#008CBA" }}
      >
        Click
      </button>
    </div>
  );
}
