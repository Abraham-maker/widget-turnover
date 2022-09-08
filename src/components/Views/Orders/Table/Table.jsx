import React, { useState } from "react";
import "./Table.css";
import TableFooter from "./TableFooter";
import { useHistory } from 'react-router-dom'
import useTable from "./useTable";

const Table = ({ data, rowsPerPage }) => {
    const { push } = useHistory()
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <>
            <div>
                <table className="table">
                    <thead className="tableRowHeader">
                        <tr>
                            <th className="tableHeader">Número de artículo</th>
                            <th className="tableHeader">Id de la orden</th>
                            <th className="tableHeader">Estado</th>
                            <th className="tableHeader">Total</th>
                            <th className="tableHeader">Fecha</th>
                            <th className="tableHeader">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slice.map((el) => (
                            <tr className="tableRowItems" key={el.id}>
                                <td className="tableCell">{el.number_of_items}</td>
                                <td className="tableCell">{el.order_id}</td>
                                <td className="tableCell">{el.status}</td>
                                <td className="tableCell">{el.total}€</td>
                                <td className="tableCell">{el.create_at}</td>
                                <td className="productosBnt" onClick={() => {
                                    return push(`/product-order/${el.order_id}`)
                                }}>Productos</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            </div>
        </>
    );
};

export default Table;