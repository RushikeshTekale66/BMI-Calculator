import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState("");

  //logic
  let calBMI = (e)=>{

    e.preventDefault();

    if(weight===0 || height===0){
      alert("Please enter a valid weight & height");
    }
    else{
      let bmi = (weight/(height*height))*703;
      setBMI(bmi.toFixed(1));

      //Message Logic
      if(bmi<25){
        setMessage("You are underweight");
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are healthy");
      }
      else{
        setMessage("You are over weight");
      }
    }
  }

  //reload button
  let reload = ()=>{
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBMI}>
          <div>
            <label>Weight (ibs)</label>
            <input type='text' placeholder='Enter Weight value' value={weight} onChange={(e)=>{setWeight(e.target.value)}}></input>
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter Weight value' value={height} onChange={(e)=>{setHeight(e.target.value)}}></input>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
