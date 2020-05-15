import React from 'react';

import Cell from './Cell';
import Button from './Button'


export default function Table({ pessoas, onRemove }) {

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th width="30px">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr>
                           <Cell value={pessoa.nome} /> 
                           <Cell value={pessoa.idade} />
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}