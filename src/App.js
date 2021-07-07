import './App.css';
import profileImage from './img/whatever.jpeg';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Luis Winder</h2>
      <img src={profileImage} alt="profile image" />
    </div>
  );
}

export default App;
