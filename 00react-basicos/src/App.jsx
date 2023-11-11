import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

const App = () => {
  return (
    <>
      <div className="App">
        <section>
          <Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Jon", correo: "jonmircha@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
          />
          <hr />
        </section>
      </div>
    </>
  );
};

export default App;
