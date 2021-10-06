
import './App.css';
import UserInput from './component/userInput';
import Input  from "./component/class/input"
import Weather from "./weather/weather"
import Apiprovider from './weather/Apiprovider'
function App() {
  return (
    <div className="App">
      {/* <UserInput/> for crud*/} 
      {/* < Input/> for crud in classC */}
<Apiprovider/>
    </div>
  );
}

export default App;
