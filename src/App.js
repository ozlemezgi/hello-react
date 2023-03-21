import './App.css';
import Header from './components/Header';
const name = "Ezgi"
const surname = "SARI"
const isLoggedIn = false ;


function App() {
  // return React.createElement("div",null,"Hello");

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Header />
      <h1>{name}</h1>
      <h1>{`Benim adım ${name} soyadım ${surname}`}</h1>

      {/* render with cond. */}
      <h1>{isLoggedIn && `Benim adım ${name} soyadım ${surname}`}</h1>
      <h1>{!isLoggedIn && "Giriş Yapmadınız!"}</h1>

      {/* Short if */}
      <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` :"Giriş Yapmadınız!" }</h1>
    </div>
  );
}

export default App;
