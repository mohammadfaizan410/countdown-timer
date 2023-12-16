import './App.css';
import Counter from './components/counter';
function App() {

  return (
    <div className="App">
      <div className="background-stars"></div>
      <div className="background-mountains"></div>
      <div className="main-content" >
        <h1 className="main-title">WE'RE LAUNCHING SOON!</h1>
        <Counter />
        <div className='socials'> 
            <div className='icon-facebook'></div>
            <div className='icon-insta'></div>
            <div className='icon-pint'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
