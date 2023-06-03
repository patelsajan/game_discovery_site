import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';

function App() {
  return (
      <>
    <Home />
        home
      <div> this is a test div</div>
        {test()}
      </>
  );


function test() {
  return(
    <div> another test div</div>
  );
}}

export default App;
