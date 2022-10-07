import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ItemCount } from "../item-count/item-count.component";
import { CartContext } from "../../context/cart-context.component";
import "./item-detail.component.css";

export const ItemDetail = (props) => {
  const { item } = props;
  const [cantidad, setCantidad] = useState(1);
  const contexto = useContext(CartContext);
  const history = useHistory();

  const actualizarCantidad = (valor) => {
    setCantidad(valor);
  };

  const comprar = () => {
    contexto.agregarItem(item, cantidad);
    history.push("/carrito");
  };

  return (
    <div className="card mb-3 item-detail-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.imagen} className="card-img" alt={item.nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body item-detail-card-description">
            <div className="item-detail-card-description-body">
              <h5 className="card-title item-detail-name">{item.nombre}</h5>
              <p className="card-text item-detail-info">{item.descripcion}</p>
              <p className="card-text item-detail-precio">${item.precio}</p>
            </div>
            <div className="item-detail-card-description-footer">
              <ItemCount
                initial={1}
                min={1}
                max={item.stock}
                onAdd={actualizarCantidad}
              />
              <button className="item-detail-button-comprar" onClick={comprar}>
                Comprar {cantidad}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
