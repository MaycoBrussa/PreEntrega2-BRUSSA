import { Link } from "react-router-dom";
import "./item.component.css";

export const Item = (props) => {
  const { item } = props;
  return (
    <Link to={`/producto/${item.id}`} className="router-link">
      <div className="card">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p className="card-text precio">${item.precio}</p>
        </div>
      </div>
    </Link>
  );
};
