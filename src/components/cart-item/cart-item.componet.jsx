import { useContext } from "react";
import { CartContext } from "../../context/cart-context.component";
import "./cart-item.component.css";

export const CartItem = (props) => {
  const { item, cantidad } = props.item;
  const contexto = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <div>
        <img src={item.imagen} className="cart-item-img" />
      </div>
      <div className="cart-item-description">
        <div className="cart-item-name">{item.nombre}</div>
        <div>{item.descripcion}</div>
        <div>
          Precio unitario:{" "}
          <span className="cart-item-precio">${item.precio}</span> - cantidad:{" "}
          <span className="cart-item-precio">{cantidad}</span> - total:{" "}
          <span className="cart-item-precio">${cantidad * item.precio}</span>
        </div>
      </div>
      <div>
        <svg
          onClick={() => {
            contexto.eliminarItem(item.id);
          }}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-trash-fill cart-item-eliminar"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </div>
    </div>
  );
};
