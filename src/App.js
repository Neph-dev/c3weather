import './App.css'
import rain from './assets/rain.jpeg'

import Weather from './components/Weather'


const App = () => {

  return (
    <div className="App">
      <img src={rain} alt='' className='background' />
      <Weather />
    </div>
  )
}

export default App
