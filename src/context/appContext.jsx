import { createContext, useContext, useEffect, useState } from "react";
import { getResources } from "../services/getResources";
import { apiCall } from "../utils/apiCall";

const AppContext = createContext(); 

export const AppProvider = ({children}) => {

    const [people, setPeople] = useState ([])
    const [vehicles, setVehicles] = useState ([])
    const [planets, setPlanets] = useState ([])
    

    const defaultFavorites = [];
    const [favorites, setFavorites] = useState(defaultFavorites);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
      };
      
      const removeFromFavorites = (item) => {
        const updatedFavorites = favorites.filter((fav) => fav !== item);
        setFavorites(updatedFavorites);
      };
      

    useEffect (()=> {
    
        const fechData = async () =>{
            const peopleUrl = await getResources('people')
            const vehiclesUrl = await getResources('vehicles')
            const planetsUrl = await getResources('planets')

           const peopleResponse = await Promise.all(peopleUrl.results.map(people => apiCall(people.url)));
           const vehiclesResponse =  await Promise.all(vehiclesUrl.results.map(planets => apiCall(planets.url)));
           const planetsResponse =  await Promise.all(planetsUrl.results.map(vehicles => apiCall(vehicles.url)));

            setPeople(peopleResponse)
            setVehicles(vehiclesResponse)
            setPlanets(planetsResponse)

            console.log (peopleResponse)

        }

        fechData();        
    }, []); 

    const store = {
        people,
        vehicles,
        planets,
        favorites,
        addToFavorites,
        removeFromFavorites,
    }

    return (
        <AppContext.Provider value = {{store}}>
            {children}
        </AppContext.Provider>
    )
}; 

const useAppContext = () => useContext (AppContext); 

export default useAppContext; 

