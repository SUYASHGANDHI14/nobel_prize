import {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';
import React, {Component} from 'react';
import Select from 'react-select';

var year;



function App () {
  year=[]
for (var i = 1900; i <2018; i++) {
  
  year.push({value:i, label:i})
}

var category = [
  {value: 'chemistry', label: 'chemistry'},
  {value: 'economics', label: 'economics'},
  {value: 'literature', label: 'literature'},
  {value: 'peace', label: 'peace'},
  {value: 'physics', label: 'physics'},
  {value: 'medicine', label: 'medicine'},
];



  const [prizes, setPrizes] = useState (null);

  const fetchData = async () => {
    const response = await axios.get (
      'http://api.nobelprize.org/v1/prize.json'
    );

    
setPrizes (response.data);


  };
fetchData ();
  return (
    
    <div className="App">
      <h1>Nobel Prize Winner</h1>
      <Select   options={year}></Select> 
<Select    options={category} />

          {/* Display data from API */}
      <div className="prizes">
        {prizes &&
          prizes['prizes'].map ((prizes,index) => {

            return (
              <div className="prize" key={index}>
                <h3>Year {prizes.year}</h3>
                <h2>{prizes.category}</h2>
                
                <div className="details" >
<p>Laureates:</p>

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

}


const rootElement = document.getElementById ('root');
ReactDOM.render (<App />, rootElement);
