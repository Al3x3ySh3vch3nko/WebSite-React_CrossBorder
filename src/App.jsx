import './App.css';
import Header from './Components/Header' 
import Card from './Components/Card' 

function App()
{
  return (
    <div className="App">
      <Header />
      <main>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </main>
    </div>
  );
}

export default App;
