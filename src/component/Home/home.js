import React, {useEffect, useState} from 'react';
import axios from '../../axios-save';
import Spinner from '../Spinner/Spinner';
import { isBirthDayToday, calculateAge, formatDate } from '../../calculate';

const Home = (props) => 
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
        else
        {
            setLoading(false);
        }
    }, []);

    const Peoples = (
        props.persons.map((person, index) => {
            const {birthDate, fullName, imageUrl} = person;
            if(isBirthDayToday(birthDate))
            {
                return(
                    <article key={index} className='person container'>
                        <img src={imageUrl} alt={fullName} />
                        <div>
                            <h4>{fullName}</h4>
                            <p>{calculateAge(birthDate)} years old</p>
                            <p>{formatDate(birthDate)}</p>
                        </div>
                    </article>
                );
            }
            return null;
        })
    );

    const UI = loading ? <Spinner /> : Peoples;

    const birthdays = Peoples.filter(people => people != null);
    const text = birthdays.length > 0 ? `${birthdays.length} birthdays today` : `no birthday today`;
    
    return (
        <>
            <h2 className="text-center mb-3">Birthday Today</h2>
            <h6 className="text-center mb-3">{text}</h6>
            {UI}
        </>
    )
}

export default Home;