import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SepetContext } from "../context/SepetContext";
const Header = () => {
  const navigate = useNavigate();
  const { items } = useContext(SepetContext); //sepetContexte abone olundu.
  const total = items.reduce((total, item) => total + item.amount, 0);
  return (
    <header className="navbar bg-dark text-light p-2">
      <Link to={"/"}>
        <h2 className="text-light">Context</h2>
      </Link>
      <div
        onClick={() => navigate("/sepet")}
        className="fs-8  d-flex gap-2 align-items-center"
      >
        {" "}
        <i class="bi bi-cart fs-3"></i>{" "}
        <span className="bange bg-danger ">{total}</span>
      </div>
    </header>
  );
};

export default Header;
