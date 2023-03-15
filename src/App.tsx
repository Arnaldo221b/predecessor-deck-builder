import './App.css';
import PredAppRoutes from './routes';
import PredNavBar from './pages/nav';

function App() {
  return (
    <div className="App">
      <PredNavBar />
      <PredAppRoutes/>
    </div>
  );
}

export default App;
