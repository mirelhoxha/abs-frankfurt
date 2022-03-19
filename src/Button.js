import { render } from "@testing-library/react";
import react from "react";

function Button(props) {
  return (
    <div className="button-container">
      <button type="submit">{props.title}</button>
    </div>
  );
}
export default Button;
