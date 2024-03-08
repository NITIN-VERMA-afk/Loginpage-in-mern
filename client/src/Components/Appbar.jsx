
import { Link } from "react-router-dom";

const Appbar = () => {

  return (
    <div>
      <h1 className="text-3xl">
        <Link to="/">Home</Link>{" "}
      </h1>
    </div>
  );
};

export default Appbar;
