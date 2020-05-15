import React, { useState, useCallback } from 'react';

import './styles.css'
import Form from './component/Form';
import Table from './component/Table';


function App() {

  const [pessoas, setPessoas] = useState([]);

  const handleRemove = useCallback((pessoa) => {
    const novasPessoas = pessoas.filter(p => p !== pessoa);
    setPessoas(novasPessoas)
  }, [pessoas])



  return (
    <>
      <Form onAdd={(pessoa) => { setPessoas( [...pessoas, pessoa]); }}/>
      
      <Table pessoas={pessoas} onRemove={handleRemove}/>
    </>
  );
}

export default App;
