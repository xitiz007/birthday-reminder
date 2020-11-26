import React, { useEffect, useState } from 'react';
import axios from '../../axios-save';
import Spinner from '../Spinner/Spinner';
import { calculateAge, formatDate } from '../../calculate';

const ShowAll = (props) => 
{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(props.persons.length == 0)
        {
            axios.get('/persons.json')
            .then(response => response.data)
            .then(instances => {
                const persons = [];
                for(let instance in instances)
                {
                    persons.push(instances[instance]);
                }
                props.personsHandler(persons);
                setLoading(false);
            });
        }
        else {
            setLoading(false);
        }
    }, []);

    const Peoples = (
        props.persons.map((person, index) => {
            const {birthDate, fullName, imageUrl} = person;
            return(
                <article key={index} className='person container'>
                    <img src={imageUrl} alt={fullName} />
                    <div>
                    <h4>{fullName}</h4>
                    <p>{calculateAge(birthDate)} years old</p>
                    <p>{formatDate(birthDate)}</p>
                    </div>
                </article>
            )
        })
    );

    const UI = loading ? <Spinner /> : Peoples;
    return (
        <>
        {UI}
        </>
    )
}

export default ShowAll;