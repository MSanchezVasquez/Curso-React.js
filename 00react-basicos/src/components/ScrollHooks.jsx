/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState("Moises");
  useEffect(() => {
    console.log("Moviendo el scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de Actualizacion");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });
  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}</p>
    </>
  );
}

export default ScrollHooks;
