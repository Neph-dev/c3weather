import './App.css'
import rain from './assets/rain.jpeg'

import Weather from './components/Weather'
import TimeAndDate from './components/TimeAndDate'


const App = () => {

  return (
    <div className="App">
      <img src={rain} alt='' className='background' />
      <TimeAndDate />
      <Weather />
    </div>
  )
}

export default App
