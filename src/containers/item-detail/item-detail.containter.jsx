import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../components/item-list/item-list.component";
import { ItemDetail } from "../../components/item-detail/item-detail.component";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts.then((result) => {
      const item = result.find((producto) => {
        return producto.id === parseInt(id);
      });
      setItem(item);
    });
  }, []);

  return <ItemDetail item={item} />;
};
