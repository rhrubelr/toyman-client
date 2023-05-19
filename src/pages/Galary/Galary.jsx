import React from 'react';

const Galary = ({ toy }) => {
    const { image } = toy;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Galary;