// create your App component here

import React, { useState, useEffect } from 'react';

function App () {
    const [image, setImage] = useState();

// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request 
// to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".

    useEffect ( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => { 
                setImage(data.message);

            });
    }, []);

    if (!image) return <p>Loading...</p>;       

    return <img src = {image} alt = "A Random Dog" />;

}

export default App;