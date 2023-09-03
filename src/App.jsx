import React from 'react';
import useAppContext from './context/appContext';
import Card from './components/card';
import Navbar from './components/navbar';

import './App.css';

function App() {
  const { store } = useAppContext();

  console.log(store);

  return (
    <>
      <Navbar />

      <div className='cardContainer'>
        {store.people.map((person) => (
          <Card
            img={`https://starwars-visualguide.com/assets/img/characters/${person.result.uid}.jpg`}
            title={person.result.properties.name}
            key={person.result.uid}
            to= {`/people/${person.result.uid}`}
          />
        ))}
      </div>

      <div className='cardContainer'>
        {store.planets.map((planets) => (
          <Card
            img={`https://starwars-visualguide.com/assets/img/planets/${planets.result.uid}.jpg`}
            title={planets.result.properties.name}
            key={planets.result.uid}
            to= {`/planets/${planets.result.uid}`}
          />
        ))}
      </div>

      <div className='cardContainer'>
        {store.vehicles ? (
          store.vehicles.map((vehicles) => (
            <Card
              img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.result.uid}.jpg`}
              title={vehicles.result.properties.model}
              key={vehicles.result.uid}
              to= {`/vehicles/${vehicles.result.uid}`}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
        }; 
  export default App;

