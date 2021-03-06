import React, { useEffect, useState } from 'react';
import ShowField from '../ShowField/ShowField';

const VolunteerFields = () => {
    const [volunteeringFileds, setVolunteeringFileds] = useState({});

    useEffect(() => {
        fetch('https://safe-atoll-12717.herokuapp.com/getAllEvents')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('lastEventId', data[data.length-1].id);
            setVolunteeringFileds(data);
        });
    }, []);
    return (
        <div>
            <div className='container'>
                <div className='row'>
                        {volunteeringFileds.length && volunteeringFileds.map(field => <ShowField field={field} key={field.id} />)}
                        
                </div>
            </div>
        </div>
    );
};

export default VolunteerFields;