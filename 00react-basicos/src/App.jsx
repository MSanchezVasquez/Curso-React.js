/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoDeElementos from "./components/RenderizadoDeElementos";
import Eventos from "./components/Eventos";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <Componente msg="Soy un componente" />
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
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoDeElementos />
            <hr />
            <Eventos />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
