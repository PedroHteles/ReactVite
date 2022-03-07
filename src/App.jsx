import { DataGrid } from '@mui/x-data-grid';
import './index.css'
import React from 'react';
import {IndexContext} from './context/context';
function App() {

  const {modulo} = React.useContext(IndexContext)

  const columns = [
    {
      field: 'modulo',
      headerName: 'modulo',
      width: 100
    },
    {
      field: 'rua',
      headerName: 'rua',
      type:'number',
      width: 100,
    },
    {
      field: 'predio',
      headerName: 'predio',
      type: 'number',
      width: 100
    },
    {
      field: 'nivel',
      headerName: 'nivel',
      type: 'number',
      width: 100
    },
    {
      field: 'item_sistema',
      headerName: 'Item Sitstema',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'item_contagem',
      headerName: 'item Contagem',
      type: 'number',
      width: 150,
      editable: true,
    }
    ,
    {
      field: 'item_descricao',
      headerName: 'Item descricao',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'data_contagem',
      headerName: 'Data Contagem',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'status_contagem',
      headerName: 'Status Contagem',
      type: 'string',
      width: 190,
      editable: true,
    },
    {
      field: 'usuario_contagem',
      headerName: 'Usuario Contagem',
      type: 'number',
      width: 200,
      editable: true,
    }
  ];

  function alterarDado(e) {
    console.log(e)
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%'}}>
      <header className='navbar'>
        <h1>Contagem estoque</h1>
      </header>
      <div style={{ flex:1, width: '100%',padding:'2rem' }}>
        <DataGrid 
        style={{ background: '#FFF'}}
          rows={modulo}
          columns={columns}
          disableSelectionOnClick
          onCellEditCommit={(e) =>{alterarDado(e)}}
          hideFooter
          
        />
      </div>
    </div>
  )
}

export default App
