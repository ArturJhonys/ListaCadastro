import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function Form({ onAdd }) {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    return (
        <div className="form">

            <Input label='Nome:' value={nome} onChange={setNome} />
            <Input label='Idade:' value={idade} onChange={setIdade} />

            <Button  onClick={onAdd} value={ nome , idade} text = {'SALVAR'}/>

           
        </div>
    );
}