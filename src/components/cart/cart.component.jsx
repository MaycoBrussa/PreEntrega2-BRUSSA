import { useContext } from "react";
import { CartContext } from "../../context/cart-context.component";
import { CartItem } from "../cart-item/cart-item.componet";
import "./cart.component.css";

export const Cart = () => {
  const contexto = useContext(CartContext);

  if (contexto.pedido.length === 0) {
    return (
      <div className="cart-empty">
        No hay productos seleccionados en el carrito
      </div>
    );
  } else {
    return (
      <>
        <div className="cart-list">
          {contexto.pedido.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="cart-total">TOTAL: ${contexto.montoTotalPedido}</div>
      </>
    );
  }
};
