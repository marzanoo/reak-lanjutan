import { useId } from "react";

function Input(props) {
  const { id = "input", label } = props;
  const inputId = useId();
  return (
    <>
      <label>
        <span>{label} </span>
        <input type="text" id={`${inputId}-${id}`} />
      </label>
      <p aria-details={`${inputId}-${id}`}>
        Name should contain at least first name and last name.
      </p>
    </>
  );
}

function App() {
  const inputId = useId();
  return (
    <>
      <input type="text" id={inputId} />
      <Input id="firstname" />
      <Input />
      <Input />
    </>
  );
}

export default App;
