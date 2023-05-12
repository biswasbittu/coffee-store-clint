import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-6xl text-purple-600">Coffee House</h1>
      <div className="flex gap-4">
      <Link to='/add-coffee'><button>Add cooffee</button></Link>
      <Link to='/update-coffee'><button>Update cooffee</button></Link>
      </div>
    </>
  );
}

export default App;
