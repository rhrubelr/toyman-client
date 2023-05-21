import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const views = useLoaderData()
    console.log(views)
    return (
        <div>
            <h3>{views.name}</h3>
        </div>
    );
};

export default ViewDetails;