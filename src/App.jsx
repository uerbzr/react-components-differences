import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import YetAnotherHelloComponent from "./components/YetAnotherHelloComponent";
function HelloComponent() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
function BetterHelloCommponent(props) {
  return (
    <>
      <h1>
        Hello {props.name} who is not {props.age}
      </h1>
    </>
  );
}
function DifferentHelloComponent({ name, age }) {
  return (
    <>
      <h1>
        Hello {name} {age}
      </h1>
    </>
  );
}
const PreferredHelloComponent = ({ name, age }) => {
  return (
    <>
      <h1>
        Hello {name} {age}
      </h1>
    </>
  );
};

function App() {
  return (
    <>
      <HelloComponent />
      <BetterHelloCommponent name={"nigel"} age={21} />
      <DifferentHelloComponent name={"nigel"} age={21} />
      <PreferredHelloComponent name={"nigel"} age={21} />
      <YetAnotherHelloComponent />
    </>
  );
}

export default App;
