import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Typography variant="h4" align="center">Productos</Typography>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
