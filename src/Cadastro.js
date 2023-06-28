

function Cadastro() {
    return (
      <div className="container mt-2">
        <h1>Cadastro de Produtos</h1>
        <input type="text" className="form-control rounded shadow mt-2 " placeholder="Digite o nome do produto..."></input>
        <input type="text" className="form-control rounded shadow mt-2" placeholder="Digite o preço do produto..."></input>
        <input type="text" className="form-control rounded shadow mt-2" placeholder="Digite a quantidade no estoque..."></input>
        <input type="text" className="form-control rounded shadow mt-2" placeholder="Digite a descrição do produto..."></input>
        <input type="text" className="form-control rounded shadow mt-2" placeholder="Digite o id do produto..."></input>
        <button className="btn btn-primary mt-2">Cadastrar</button>

      </div>
    );
  }

  export default Cadastro;