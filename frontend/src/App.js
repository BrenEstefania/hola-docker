import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("https://hola-docker-zkom.onrender.com") // 
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.error("ERROR:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend actualizado Brenda </h1>
    </div>
  );
}

export default App;