import "./App.css";

function App() {
  let nombre = "Moises";
  let auth = true;
  return (
    <>
      <div className="App">
        <h1>{nombre}</h1>
        <p>{auth ? "Permitido" : "No permitido"}</p>
      </div>
    </>
  );
}

export default App;
