import './App.css';
import './styles/global.css';
import { Home } from './components/pages/Home';
import { ResponsiveProvider } from './contexts';


function App() {
  return (
    <ResponsiveProvider>
      <Home />
    </ResponsiveProvider>
  );
}

export default App;
