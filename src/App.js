import './App.css';
import User from './components/Users';
import Header from './components/Header';

const friends =[{id:1, name: "Mehmet"},{id:2, name: "Aslı"},{id:3,name: "Ahmet"},{id:4,name: "Deniz"},{id:5,name: "Cansu"}]

function App() {
  // return React.createElement("div",null,"Hello");

  return (
    <>
      <User 
      //name="Ezgi" 
      surname="SARI" 
      isLoggedIn={true} 
      age={"25"} 
      friends={friends}
      address ={{
        title: "Atasehir/istanbul",
        zip: 34755
      }}
      />

    
    </>
  );
}

export default App;
