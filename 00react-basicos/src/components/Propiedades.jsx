/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        // eslint-disable-next-line react/prop-types
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
  cadena: PropTypes.cadena.isRequired,
};
