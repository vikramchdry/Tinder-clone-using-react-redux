import './App.css';
import Header from './components/Header';
import SwipeButton from './components/SwipeButton';
import TinderCard from './components/TinderCard';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButton />
    </div>
  );
}

export default App;
