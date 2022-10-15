import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetCharactersById } from '../data/getCharacters';
import "./cardDetails.css";


const CardDetails = () => {
    let [char, setChar] = useState({});
    GetCharactersById(useLocation().pathname.split("/")[2]).then((character) => setChar(character));
    return (
        <>
            <div className='cardDetails'>
                <img src={char.imageUrl} />
                <p>Full Name: <b>{char.firstName} {char.lastName}</b></p>
                <p>Work: <b>{char.title}</b></p>
                <p>Family: <b>{char.family}</b></p>
                <a href='/chars'><button class="button-five">Volver a la pagina de Personajes</button></a>
            </div>

        </>
    )
}

export { CardDetails }
