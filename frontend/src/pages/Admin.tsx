import React from "react";
import Table from "@vtex/styleguide/lib/Table";
import { title } from "process";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../apollo/queries";
import '../styles/Admin.css'
import { formatDate, formatPrice } from "../utils/functions";
const defaultSchema = {
  properties: {
    orderId: {
      title: "Id pedido",
    },
    date: {
      title: "Fecha",
      cellRenderer:({cellData}:any)=>{
        return formatDate(parseInt(cellData))
      }
    },
    customerDocument: {
      title: "Documento",
      // default is 200px
    },
    quantity: {
      title: "Cantidad",
    },
    totalPrice: {
      title: "Total",
      cellRenderer:({cellData}:any)=>{
        return formatPrice(cellData)
      }
        
    },
  },
};
export const Admin: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.getOrders);
  return (
    <section className="Admin">
      <h1>Ventas</h1>
      <Table schema={defaultSchema} items={data.getOrders} />
    </section>
  );
};
