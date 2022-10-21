import './App.css';
import {useEffect ,useState} from 'react'
import axios  from 'axios';
import Coin from './components/Coin';

function App() {

  const[listOfCoins,setListOfCoins] =useState([]);
  const[searchWord ,setSearchWord] =useState(" ");

  useEffect(()=>{
axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
.then((response) =>{
    setListOfCoins(response.data.coins)
  }
  );

  },[]);

const filteredCoin=listOfCoins.filter((coin)=>{
  return coin.name.toLowerCase().includes(searchWord.toLowerCase());
})
  return (
    <div className="App">
       <div className="cryptoHeader">
        <input type="text" placeholder="Bitcoin ..." onChange={(event)=> {setSearchWord(event.target.value)}}/>
       </div>
       <div className="cryptoDisplay">{filteredCoin.map((coin)=>{
        return <Coin 
        name={coin.name} 
        icon={coin.icon} 
        price={coin.price} 
         Symbol={coin.symbol}/>
       })}</div>

      
    </div>
  );
}
 
export default App;
 