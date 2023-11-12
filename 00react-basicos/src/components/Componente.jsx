/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Componente = (props) => {
  return (
    <div className="componente">
      <h2>{props.msg}</h2>
    </div>
  );
};

/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

export default Componente;
