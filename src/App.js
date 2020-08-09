import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigation from "./components/navigation";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
];

function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeDimensions = debounce(() => {
    setDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", resizeDimensions);
  });

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, name, Component }) => (
          <Route key={name} exact path={process.env.PUBLIC_URL + path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
