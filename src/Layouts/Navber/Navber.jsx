import { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./Navber.css";

const initPage = "home";

function Navber({ products, carts, setToken }) {
  const [tab, setTab] = useState("");
  const navigate = useNavigate();
  //console.log("Current tab:", tab);

  useEffect(() => {
    setTab(initPage);
    navigate("/home");
    //console.log("Tab set to:", initPage);
  }, []); //onlt in first loaded

  const homeRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentsRef = useRef();
  const todoRef = useRef();
  const productsRef = useRef();
  const cartsRef = useRef();

  useEffect(() => {
    //console.log(tab)
    if (tab === "calculator") calculatorRef.current.click();
    else if (tab === "components") componentsRef.current.click();
    else if (tab === "animation") animationRef.current.click();
    else if (tab === "todo") todoRef.current.click();
    else if (tab === "products") productsRef.current.click();
    else if (tab === "carts") cartsRef.current.click();
    else homeRef.current.click();
  }, [tab]);

  return (
    <div className="navber-container">
      <Link to="/home">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "home" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>

      <Link to="/calculator">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "calculator" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>

      <Link to="/animation">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "animation" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("animation")}
          ref={animationRef}
        >
          Animation
        </button>
      </Link>

      <Link to="/components">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "components" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("components")}
          ref={componentsRef}
        >
          Components
        </button>
      </Link>

      <Link to="/todo">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "todo" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todo
        </button>
      </Link>

      <Link to="/products">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            tab === "products" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("products")}
          ref={productsRef}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to="/carts">
        <button
          style={{ boxShadow: "0 0 0.25rem gray", position: "relative" }}
          className={
            tab === "carts" ? "btn btn-primary" : "btn btn-outline-primary"
          }
          onClick={() => setTab("carts")}
          ref={cartsRef}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : '9+'}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button className="btn btn-outline-danger" style={{ marginLeft: '1rem' }} onClick={() => { setToken('') }}>
        Logout
      </button>

    </div>
  );
}

export default Navber;
