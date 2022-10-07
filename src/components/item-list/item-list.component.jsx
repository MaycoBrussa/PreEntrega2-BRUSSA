import { useState, useEffect } from "react";
import { Item } from "../item/item.component";
import { Loading } from "../loading/loading.component";

import "./item-list.component.css";

const productos = [
  {
    id: 1,
    imagen: "../../../images/prev-1.jpg",
    nombre: "Anillos",
    descripcion: "Plata 925",
    stock: 10,
    precio: 2500,
  },
  {
    id: 2,
    imagen: "../../../images/prev-2.jpg",
    nombre: "Esclavas",
    descripcion: "Plata 925",
    stock: 20,
    precio: 3000,
  },
  {
    id: 3,
    imagen: "../../../images/prev-3.jpg",
    nombre: "Collar",
    descripcion: "Plata 925",
    stock: 12,
    precio: 5000,
  },
  {
    id: 4,
    imagen: "../../../images/prev-4.jpg",
    nombre: "Reloj pulsera",
    descripcion: "Dorado",
    stock: 100,
    precio: 10000,
  },
  
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getProducts.then((result) => {
      setItemList(result);
    });
  }, []);

  if (itemList.length) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 ">
          {itemList.map((item, indice) => {
            return <Item item={item} key={indice} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};
