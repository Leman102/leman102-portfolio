import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const [projects] = useState([
    {
        name: "Pet-hub",
        
    },
    {

    },
    {

    },
    {

    }
])

function Portfolio({ currentCategory }) {
    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
        </section>
    );
}

export default Portfolio;