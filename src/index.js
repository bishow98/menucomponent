import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { StrictMode } from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  // const style = { color: "red", textTransform: "uppercase", fontSize: "45px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Welcome to the fast react pizza service</h1>
    </header>
  );
}

function Menu() {
  const myArray = pizzaData;
  // const myArray = [];
  const Numarray = myArray.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* <Pizza
        Name="Pizza Spinaci"
        Ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        Image="pizzas/spinaci.jpg"
        Price={10}
      />
      <Pizza
        Name="Pizza Margherita"
        Ingredients="Tomato and mozarella"
        Image="pizzas/margherita.jpg"
        Price={12}
      /> */}
      {/* This one is example how can we show the content  of array in JSX */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza PizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

      {Numarray > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 cretive dishes to chooose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza PizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry we're under maintainance Please comeback later</p>
      )}
    </main>
  );
}
//we can Destructure the props: props lai destructure garna lai props kai same data lai pathauda directly access garda hunxa
function Pizza({ PizzaObj }) {
  console.log(PizzaObj);
  // if (PizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${PizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={PizzaObj.photoName} alt={PizzaObj.name} />
      <div>
        <h3>{PizzaObj.name}</h3>
        <p>{PizzaObj.ingredients}</p>
        <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.Price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const today = new Date().getHours();
  const Opening = 8;
  const Closing = 22;
  const isOpen = today >= Opening && today <= Closing;
  console.log(isOpen);

  // console.log(today);
  // if (isOpen) return <p>Hey come back later</p>;//use of multiple return outside the jsx
  return (
    <footer className="footer">
      {isOpen ? (
        <Open openHour={Opening} closeHour={Closing} />
      ) : (
        <p>
          We are happy to welcome you between {Opening}:00 and {Closing}:00
        </p>
      )}
    </footer>
  );
}

function Open({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are opened from {closeHour}:00 to {openHour}:00 . Do visit us{" "}
      </p>
      <button className="btn">For Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
