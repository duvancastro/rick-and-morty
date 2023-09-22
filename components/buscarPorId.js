import Style from '../styles/buscarPorId.module.css'
const buiscarPorId = () => {
  return (
    <div className={Style.contenedor}>
      <div>
        <h1>Buscar Elemento por ID</h1>
        <form id="buscarForm">
          <label for="id">ID:</label>
          <input type="number" id="id" name="id" required />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default buiscarPorId;
