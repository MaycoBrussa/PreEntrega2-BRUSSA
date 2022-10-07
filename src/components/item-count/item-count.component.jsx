import { useState } from "react";
import "./item-count.component.css";

export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

  const agregarUno = () => {
    if (contador < props.max) {
      setContador(contador + 1);
      props.onAdd(contador + 1);
    }
  };
  const restarUno = () => {
    if (contador > props.min) {
      setContador(contador - 1);
      props.onAdd(contador - 1);
    }
  };
  return (
    <div className="item-count">
      <div className="item-count-window">
        <div className="item-count-counter-container">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-cart-dash-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={restarUno}
            className="item-count-button-small"
          >
            <path
              fill-rule="evenodd"
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"
            />
          </svg>
          <span className="item-count-counter">{contador}</span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-cart-plus-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={agregarUno}
            className="item-count-button-small"
          >
            <path
              fill-rule="evenodd"
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
