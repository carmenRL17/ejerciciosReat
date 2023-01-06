import React, { useCallback, useMemo, useState } from "react";
import { useTable } from "react-table";
import { BotonBiologico, CampoBusqueda, useRows, useColumns } from "./App";
import logo from "./recursos/imagenes/logo.png";

export function PaginaPrincipal(props) {
  const filas = useRows();
  const columnasB = useColumns();
  const [textoInput, setTextoInput ]= useState("");
  const [filasFiltradas, setFilasFiltradas] = useState(filas);
  // const filasFiltradas = useMemo(() => {
  //   return filas.filter((fila) => {
  //     return fila.nombre.toLowerCase().includes(textoInput.toLowerCase());
  //   });
  // }, [textoInput, filas])
  
  

  

  const tablaB = useTable({
    columns: columnasB,
    data:  filasFiltradas
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tablaB;


  function buscar() {
    const datosFiltrados = filtrarFilas();
    setFilasFiltradas(datosFiltrados);
  }

  const filtrarFilas = useCallback(() => {
    console.log(`el valor del input es: ${textoInput}`)
    return filas.filter((fila) => {
       return fila.nombre.toLowerCase().includes(textoInput.toLowerCase());
    });
  }, [textoInput, filas]);

  const agregar = () => {
    console.log("agreagndo biologico");
  };

  const distribucion = () => {
    console.log("realizando distribucion");
  };
  const editar = () => {
    console.log("editando biologico");
  };
  function actualizarValor(evento){
    console.log(evento.target.value);
    setTextoInput(evento.target.value);
    if (evento.target.value === "") {
      setFilasFiltradas(filas);
    }
  }

  return (
    <>
      <h1>Agregando Componente</h1>
      <div>
        <img src={logo} alt="vacuna" width={60} height={60} />
        <CampoBusqueda valorBusqueda= {textoInput} onClick={buscar} onChange={actualizarValor}/>
      </div>

      <br />

      <BotonBiologico texto="agregar Biologico" onClick={agregar} />
      <BotonBiologico texto="Distribucion" onClick={distribucion} />
      <BotonBiologico texto="Editar Distribucion" onClick={editar} />
      <br />
      {/*/  agregamos propiedades a nuestra tabla nativa*/}
      <table {...getTableProps()}>
        <thead>
          {
            // Recorremos las columnas que previamente definimos
            headerGroups.map((headerGroup) => (
              // Añadimos las propiedades al conjunto de columnas
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map((column) => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <th {...column.getHeaderProps()}>
                      {
                        // Pintamos el título de nuestra columna (propiedad "Header")
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Añadimos las propiedades al cuerpo de la tabla */}
       <tbody {...getTableBodyProps()}>
         {
           // Recorremos las filas
           rows.map(row => {
             // Llamamos a la función que prepara la fila previo renderizado
             prepareRow(row);
             return (
               // Añadimos las propiedades a la fila
               <tr {...row.getRowProps()}>
                 {
                   // Recorremos cada celda de la fila
                   row.cells.map((cell) => {
                     // Añadimos las propiedades a cada celda de la fila
                     return (
                       <td {...cell.getCellProps()}>
                         {
                           // Pintamos el contenido de la celda
                           cell.render("Cell")
                         }
                       </td>
                     );
                   })
                 }
               </tr>
             );
           })
         }
       </tbody>
      </table>
    </>
  );
}
