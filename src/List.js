import React from 'react';

const List = (props) => 
{
  return (
    props.persons.map(person => {
      const {id, name, age, image} = person;
      return (
        <article id={id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
              <p>{age} years old</p>
          </div>
        </article>
      )
    }
    )
  )
}

export default List;
