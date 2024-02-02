import React from "react";
import Cart from "../components/Cart";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "ceket",
      image: "https://picsum.photos/200",
      price: 100,
    },
    {
      id: 2,
      title: "pantolon",
      image: "https://picsum.photos/201",
      price: 110,
    },
    {
      id: 3,
      title: "kazak",
      image: "https://picsum.photos/203",
      price: 300,
    },
    {
      id: 4,
      title: "etek",
      image: "https://picsum.photos/204",
      price: 1200,
    },
    {
      id: 5,
      title: "yüzük",
      image: "https://picsum.photos/205",
      price: 600,
    },
    {
      id: 6,
      title: "mont",
      image: "https://picsum.photos/206",
      price: 1100,
    },
    {
      id: 7,
      title: "kemer",
      image: "https://picsum.photos/207",
      price: 400,
    },
    {
      id: 8,
      title: "hırka",
      image: "https://picsum.photos/208",
      price: 550,
    },
    {
      id: 9,
      title: "hırka",
      image: "https://picsum.photos/230",
      price: 550,
    },
    {
      id: 10,
      title: "hırka",
      image: "https://picsum.photos/270",
      price: 550,
    },
    {
      id: 11,
      title: "hırka",
      image: "https://picsum.photos/260",
      price: 550,
    },
  ];
  return (
    <div className=" container d-flex flex-wrap p-4 gap-4 justify-content-between">
      {products.map((product) => (
        <Cart {...product} />
      ))}
    </div>
  );
};

export default Products;
