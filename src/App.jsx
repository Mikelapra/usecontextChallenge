import './App.css'; // Archivo de estilos CSS
import RoutesApp from './routes/RoutesApp';
import {ThemeProvider} from './themes/ThemeContext';

const App = () => {
  return (
    <div id="root">
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
    </div>
  );
};

export default App;
