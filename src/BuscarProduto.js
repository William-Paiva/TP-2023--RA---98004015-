import { useEffect, useState } from "react";
import axios from "axios";
import produtoEdit from "./produtoEdit";

const BuscarProduto = () => {
    const [nomeProd, setNomeProd] = useState()
    const [viewProd, setViewProd] = useState([])
     

   }

    return (
      <div className="container mt-5">
        <h1>Editar os Produtos</h1>
        <input type="text" className="form-control rounded shadow mt-2 " placeholder="Digite o nome do produto para encontrá-lo..."></input>
        <button className="btn btn-primary mt-2">Buscar Produto</button>
        <produtoEdit nameProd = {nameProd}></produtoEdit>

      </div>
    );
  

  export default BuscarProduto;