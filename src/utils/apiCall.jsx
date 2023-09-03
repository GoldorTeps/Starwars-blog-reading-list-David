export const apiCall = (url= null, config= null) => {

    return fetch (url, config)
    .then ((res)=>res.json())
    .then ((res) => res)
    .catch ((err) => console.log (err)); 
};