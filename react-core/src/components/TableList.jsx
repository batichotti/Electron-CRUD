import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableList({ handleOpen }) {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:3001/api/notas');
                console.log(response.data);
                setTableData(response.data);

            } catch (err){
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        
        {error && <div className="alert alert-error">{error}</div>}

        <div className="overflow-x-auto mt-10">
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Data</th>
                <th>CNPJ</th>
                <th>N° Nota Fiscal</th>
                <th>Valor</th>
                <th>Descrição</th>
            </tr>
            </thead>
            <tbody className="hover">
            {tableData.map((item) => (
                <tr key={item.nota_id}>
                <th>{item.nota_id}</th>
                <td>{new Date(new Date(item.nota_data).getTime() + new Date(item.nota_data).getTimezoneOffset() * 60000).toLocaleDateString('pt-BR')}</td>
                <td>{item.nota_numero}</td>
                <td>{item.nota_cnpj}</td>
                <td>{item.nota_valor}</td>
                <td>{item.nota_descricao}</td>
                <td><button onClick={() => handleOpen('edit') } className="btn btn-secondary w-20">Atualizar</button></td>
                <td><button className="btn btn-accent w-20">Deletar</button></td>
                </tr>
            ))}

            </tbody>
        </table>
        </div>
        </>
    )
}