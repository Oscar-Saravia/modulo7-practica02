import Schedule from "./_components/Schedule";

const LandingPage = () => {
  return (
    <>
      <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      <h3>Bienvenido</h3>
      <p>
        Este modulo se centra en el uso de React, incluyendo la creacion de
        componentes, el manejo de hooks, y el uso de Redux.
      </p>
      <h3>Temas de Cubiertos</h3>
      <Schedule />
      <h3>Recursos Adicionales</h3>
      <p>
        Para profundizar en los temas cuebiertos, consulta los siguientes
        recursos.
      </p>
      <a href="https://react.dev/learn/thinking-in-react">Thinking in React</a>
      <a href="https://reactjs.org/docs/getting-started.html">React Docs</a>
      <footer>2024 Modulo 7 - USIP</footer>
    </>
  );
};

export default LandingPage;
