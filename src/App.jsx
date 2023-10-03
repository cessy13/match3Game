import Slots from "./Slots";
import "./App.css";

export default function App() {
  const fruits = ["🍌", "🍒", "🥝", "🌸"];
  const getRandom = () => {
    return Math.floor(Math.random() * fruits.length);
  };

  const rand1 = fruits[getRandom()];
  const rand2 = fruits[getRandom()];
  const rand3 = fruits[getRandom()];

  return <Slots val1={rand1} val2={rand2} val3={rand3} />;
}

// const fruits = ["🍌", "🍒", "🥝", "🌸"];
