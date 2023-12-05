// create your App component here

import React, { useState, useEffect } from 'react';

function App () {
    const [image, setImage] = useState();

    useEffect ( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => { 
                setImage(data.message);

            });
    }, []);

    if (!image) return <p>Loading...</p>;       

    return <img src = {image} alt = "Random Dog" />;

}

export default App;