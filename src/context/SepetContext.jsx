import React, { createContext, useState } from "react";

export const SepetContext = createContext();

export function SepetProvider({ children }) {
  const [items, setItems] = useState([]);

  //sepete yeni eleman ekleme fonksiyonu
  const addToCart = (product) => {
    const foundItem = items.find((item) => item.id === product.id);
    if (foundItem) {
      foundItem.amount++;
      const clone = [...items];
      const index = clone.findIndex((i) => i.id === product.id);
      clone[index] = product;
      setItems(clone);
    } else {
      setItems([...items, product]);
    }
  };
  //sepetten eleman eksiltme
  const DeleteAzalt = (product) => {
    const findDelete = items.find((item) => item.id === product.id);
    if (findDelete.amount > 1) {
      const cloneItems = [...items];
      product.amount--;
      const index = cloneItems.findIndex((i) => i.id === product.id);
      cloneItems[index] = product;
      setItems(cloneItems);
    } else {
      const filterDelete = items.filter((item) => item.id !== product.id);
      setItems(filterDelete);
    }
  };
  return (
    <SepetContext.Provider value={{ items, addToCart, DeleteAzalt }}>
      {children}
    </SepetContext.Provider>
  );
}
