import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const lodeadcoffees = useLoaderData();

  const [coffees, setCoffees] = useState( lodeadcoffees)

  console.log(coffees);

  return (
    <>
      <h1 className="text-6xl text-purple-600 text-center">
        HOT HOT-COLD Coffee {coffees.length}
      </h1>
      <div className="flex gap-4">
        <Link to="/add-coffee">
          <button>Add cooffee</button>
        </Link>
        <Link to="/update-coffee">
          <button>Update cooffee</button>
        </Link>
      </div>
      <div className=" m-4 md:m-20">
        <div className="grid md:grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
