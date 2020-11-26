import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Create from './component/Create/create';
import Home from './component/Home/home';
import ShowAll from './component/ShowAll/showall';
import { storage } from './firebase';
import NavigationItems from './component/Navigation/NavigationItems/NavigationItems';
import NavBar from './component/NavBar/navBar';
import axios from './axios-save';

const App = () => 
{
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState([]);

  const personsHandler = (persons) =>
  {
    setPersons(persons);
  }

  const fullNameChangeHandler = (event) =>
  {
    setFullName(event.target.value);
  }

  const dateChangeHandler = (event) =>
  {
    const [year, month, day] = event.target.value.split('-');
    setDate([month, day, year].join('/'));
  }

  const isFormValid = () => {
    console.log(fullName.trim().length > 0);
    return image !=null && fullName.trim().length > 0 && date != null;
  }

  const saveOnDataBase = (url) =>
  {
    console.log('aayo');
    const data = {
      fullName : fullName,
      birthDate : date,
      imageUrl : url
    }
    axios.post('/persons.json', data)
    .then(response => {
      refreshPersons();
      setLoading(false);
      alert('saved');
      setImage(null);
      setFullName('');
      setDate(null);
    })
    .catch(error => {
      setLoading(false);
      alert(error);
      setImage(null);
      setFullName('');
      setDate(null);
    })
  }

  const refreshPersons = () =>
  {
    axios.get('/persons.json')
    .then(response => response.data)
    .then(instances => {
      const persons = [];
      for(let instance in instances)
      {
        persons.push(instances[instance]);
      }
      setPersons(persons);
    });
  }

  const onSubmitHandler = (event) =>
  {
    setLoading(true);
    event.preventDefault();
    if(!isFormValid())
    {
      alert('please give the inputs correct!');
      return;
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    snapshot => {
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    error => {
      alert(error);
    },
    () => {
      storage.ref('images')
      .child(image.name)
      .getDownloadURL()
      .then(url => {
        saveOnDataBase(url);
        });
      setImage(null);
    });
  }

  const fileChangeHandler = (event) =>
  {
    if (event.target.files[0])
    {
      setImage(event.target.files[0]);
    }
  }

  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route path="/create" 
          render=
          {() => <Create fileChangeHandler= {fileChangeHandler} onSubmitHandler= {onSubmitHandler} fullNameChangeHandler={fullNameChangeHandler} fullname={fullName} dateChangeHandler={dateChangeHandler} loading={loading} />} />
          <Route path="/show_all" render={() => <ShowAll persons={persons} personsHandler={personsHandler} /> } />
          <Route path="/" render={() => <Home persons={persons} personsHandler={personsHandler} persons={persons} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )

}

export default App;
