import React from "react";
import { useContext } from "react";
import { SepetContext } from "../context/SepetContext";

const Cart = ({ id, title, image, price }) => {
  const { addToCart } = useContext(SepetContext); //SEPETCONTEXTEN ADDTOCARTI ÇAĞIRIRIZ.

  return (
    <div className="card">
      <img src={image} />
      <div className="card-body ">
        <div className="d-flex justify-content-between">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => {
              //contexte bulunan addToCart methodunu çalıştırırız.ÜRÜNE SEPET EKLERİZ.
              addToCart({ id, title, image, price, amount: 1 });
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
