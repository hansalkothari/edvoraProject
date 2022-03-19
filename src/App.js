import { useEffect,useState } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import List from './components/List'

function App() {

  const [ride , setRide] = useState([])
  const [upcomingRides , setUpcomingRides] = useState([])

  useEffect(() => {
      
      fetch("https://assessment.api.vweb.app/rides")
      .then((res) => res.json())
      .then((data) => {setRide(data) ; console.log(data)})
      
      
  },[])



  return (
    <div className="App">
      <div>
        <Header></Header>
        <NavigationBar></NavigationBar>
      </div>
      <div>
        <List ride = {ride}></List>
      </div>
    </div>
  );
}

export default App;
