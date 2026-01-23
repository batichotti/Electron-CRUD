import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableList({ searchTerm, onEdit, onDelete, refreshKey, onTotalsUpdate }) {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    const calculateTotals = (data) => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        let monthly = 0;
        let annual = 0;

        data.forEach((item) => {
            const parsedValue = Number(item.nota_valor) || 0;

            // Normalize date to local time to avoid off-by-one month/year due to timezone
            const rawDate = new Date(item.nota_data);
            if (Number.isNaN(rawDate.getTime())) return;
            const date = new Date(rawDate.getTime() + rawDate.getTimezoneOffset() * 60000);

            if (date.getFullYear() === currentYear) {
                annual += parsedValue;
                if (date.getMonth() === currentMonth) {
                    monthly += parsedValue;
                }
            }
        });

        return { monthly, annual };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/notas');
                setTableData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [refreshKey]);

    useEffect(() => {
        if (typeof onTotalsUpdate === 'function') {
            onTotalsUpdate(calculateTotals(tableData));
        }
    }, [tableData, onTotalsUpdate]);

    const loweredSearch = searchTerm.toLowerCase();
    const filteredData = tableData.filter((item) =>
        item.nota_descricao.toLowerCase().includes(loweredSearch) ||
        item.nota_numero.toLowerCase().includes(loweredSearch)
    );

    return (
        <>
        
        {error && <div className="alert alert-error">{error}</div>}

        <div className="mt-10 h-96 overflow-auto rounded-lg">
        <table className="table table-pin-rows">
            <thead className="sticky top-0 bg-base-100 z-10">
            <tr>
                <th></th>
                <th>Data</th>
                <th>N° Nota Fiscal</th>
                <th>CNPJ</th>
                <th>Valor</th>
                <th>Descrição</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody className="hover">
            {filteredData.map((item) => (
                <tr key={item.nota_id}>
                <th>{item.nota_id}</th>
                <td>{new Date(new Date(item.nota_data).getTime() + new Date(item.nota_data).getTimezoneOffset() * 60000).toLocaleDateString('pt-BR')}</td>
                <td>{item.nota_numero}</td>
                <td>{item.nota_cnpj}</td>
                <td>{item.nota_valor}</td>
                <td>{item.nota_descricao}</td>
                <td><button onClick={() => onEdit(item)} className="btn btn-secondary w-20">Atualizar</button></td>
                <td><button onClick={() => onDelete(item.nota_id)} className="btn btn-accent w-20">Deletar</button></td>
                </tr>
            ))}

            </tbody>
        </table>
        </div>
        </>
    )
}