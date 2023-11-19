/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoDeElementos from "./components/RenderizadoDeElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloDeVida from "./components/CicloDeVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";

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
              objeto={{ nombre: "Moises", correo: "moisesup.25@gmail.com" }}
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
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloDeVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <br />
            <br />
            <br />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
