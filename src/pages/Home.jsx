import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
    <h1>Esta es la página Home</h1>
    
    <nav>
    <Link to="/">Inicio</Link>
    <Link to="/profile">Perfil</Link>
    <Link to="/myjob">Mi Trabajo</Link>
  </nav>
    <Button/>
  </>
  )
  };
export default Home;