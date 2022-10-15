import React, { useState } from 'react';
import { GetCharacters } from "./../data/getCharacters";
import { GridCards } from '../gridCards/gridCards';
import { Card } from "../card/card";
import "./chars.css";

const Chars = () => {
    let [characters, setCharacters] = useState({});
    GetCharacters().then((results) => setCharacters(results));
    let charactersMap = Array.from(characters);
    return (
        <>
            <h1>Personajes de la Serie</h1>
            <GridCards>
                {
                    charactersMap.map((character) => {
                        return <Card object={character} key={character.id} />
                    })
                }
            </GridCards>
        </>
    )
}

export { Chars };