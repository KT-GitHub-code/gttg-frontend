import React, { useEffect, useState, createContext} from 'react';

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        fetch('https://gttgbackendapi.azure-api.net/api/planet')
        .then(async res => {
            const newPlanets = await res.json();
            setPlanets( prevPlanets =>([ ...prevPlanets, ...newPlanets]) )})
            .catch(err => console.log("fetch", err))
    }, [])

    return (
        <PlanetContext.Provider value={{planets, setPlanets}}>
            {props.children}
        </PlanetContext.Provider>
    );
}