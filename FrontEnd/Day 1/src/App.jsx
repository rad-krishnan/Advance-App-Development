import Login from './components/login';
import Registration from './components/registration';
import './assets/css/styles.css'; 

function App() {
  return (
      <div className="container">
        <Registration />
        <Login />
      </div>
  );
}

export default App;