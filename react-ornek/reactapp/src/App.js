import './App.css';
import Dashboard from './layouts/Dashboard.jsx';
import "semantic-ui-css/semantic.min.css"
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard>

      </Dashboard>
    </div>
  );
}

export default App;
