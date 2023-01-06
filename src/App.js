//import logo from './logo.svg';
import React from 'react';
import './App.css';
import buscarImg from './recursos/imagenes/buscar.png'
import {useMemo} from 'react';


export function BotonBiologico(props) {
  return (
    <button onClick={props.onClick}>{props.texto}</button>
  );
}

export function CampoBusqueda(props){
  return(
    <>
      <input 
        type="text" 
        value={props.valorBusqueda}
        onChange={props.onChange}
        /> 
      <img 
        src= {buscarImg}
        alt='lupita'
        width={25}
        height={25}
        onClick={props.onClick}
      />
    </>
  );

}
export function useColumns(){
  const columnas = useMemo(
    () => [
      {
        Header: "Alta",
        accessor: "alta"
      },
      {
        Header: "Grupo",
        accessor: "grupo"
      },
      {
        Header: "Clave",
        accessor: "clave"
      },
      {
        Header: "Presentacion",
        accessor: "presentacion"
      },
      {
        Header: "Nombre",
        accessor: "nombre"
      },
      {
        Header: "Descripcion",
        accessor: "descripcion"
      },
      {
        Header: "Cantidad",
        accessor: "cantidad"
      },
      {
        Header: "Lote",
        accessor: "lote"
      },
      {
        Header: "Caducidad",
        accessor: "caducidad"
      },
      {
        Header: "Distribucion",
        accessor: "distribucion"
      }
    ],
    []
  );
 
  return columnas;
}
export function useRows() {
  const rows = useMemo(
    () => [
      {
        alta: "B1025",
        grupo: "20",
        clave: "0148",
        presentacion: "multidosis",
        nombre: "Neumo 13 valente",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "250",
        lote:"rd-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1026",
        grupo: "20",
        clave: "2526",
        presentacion: "multidosis",
        nombre: "Pentavalente",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "250",
        lote:"rr-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1027",
        grupo: "20",
        clave: "0152",
        presentacion: "multidosis",
        nombre: "rotavirus",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "251",
        lote:"rr-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1028",
        grupo: "20",
        clave: "0152",
        presentacion: "multidosis",
        nombre: "rptavirus",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "250",
        lote:"rr-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1029",
        grupo: "20",
        clave: "0148",
        presentacion: "multidosis",
        nombre: "Neumo 13 valente",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "257",
        lote:"rd-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1030",
        grupo: "20",
        clave: "0148",
        presentacion: "multidosis",
        nombre: "Neumo 13 valente",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "254",
        lote:"ry-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      },
      {
        alta: "B1031",
        grupo: "20",
        clave: "0148",
        presentacion: "multidosis",
        nombre: "Neumo 13 valente",
        descripcion: "envase con 10 dosis cada uno",
        cantidad: "258",
        lote:"rt-123",
        caducidad:"12/12/2023",
        distribucion:"50"
      }
    ],
    []
  );
 
  return rows;
}

export function ListaSimple(){
  const nombres = ["Jeremias", "Ami", "Carmensita", "Juan"];
  return(
    <>
      <ul>
        {
          nombres.map((nombre, index) => {
            return(
                <li key={`li-${index}`}> {nombre} </li>
            )
          })
        }
      </ul>
    </>
  )
  
}

export function TablaSimple(){

  const filas = useRows();
  const columnas = useColumns();
  
  return(
    <>
      <table>
        <thead>
          <tr>
            {
              columnas.map((columna, i)=>{
                return (
                 <th key={`columna-${i}`}> {columna.Header}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
            {filas.map((fila, indice)=>{
              return(
                <tr key={`fila-${indice}`}>
                  <td>{fila.alta} </td>
                  <td>{fila.grupo}</td>
                  <td>{fila.clave}</td>
                  <td>{fila.presentacion}</td>
                  <td>{fila.nombre}</td>
                  <td>{fila.descripcion}</td>
                  <td>{fila.cantidad}</td>
                  <td>{fila.lote}</td>
                  <td>{fila.caducidad}</td>
                  <td>{fila.distribucion}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}


