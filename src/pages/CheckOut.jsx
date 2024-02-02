import React from "react";
import { useContext } from "react";
import { SepetContext } from "../context/SepetContext";

const CheckOut = () => {
  const { items, DeleteAzalt, addToCart } = useContext(SepetContext); //context yapısına abone olma
  const total = items.reduce(
    //reduce() iki parametr alır:total ve 2.paramtereyi sen veriyorsun
    (total, item) => total + item.price * item.amount,
    0 //virgül koyup ilk değeri yani başlangıç değerini ver yani "0" koymamız gerekiyor.
  );
  return (
    <div className="d-grid gap-4 p-4">
      <h2>Toplam Tutar:{total}</h2>
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center ">
          <img className="h-90 rounded" src={item.image} />
          <h1>{item.name}</h1>
          <h1 className="text-success">{item.price * item.amount}TL</h1>
          <p>miktar:{item.amount}</p>
          <button
            onClick={() => DeleteAzalt(item)}
            className="button bg-danger"
          >
            {item.amount > 1 ? "AZALT " : "KALDIR"}
          </button>
          <button className="button bg-danger" onClick={() => addToCart(item)}>
            EKLE
          </button>
        </div>
      ))}
    </div>
  );
};

export default CheckOut;
