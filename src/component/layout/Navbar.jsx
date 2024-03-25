
import './Navbar.css'


const Navbar = () => {
  return (
    <header>
        <nav>
            
            <a href="#">Reserva Aqui</a>
            <a href="#">Registrate </a>
            <a to="././Login.jsx">Inicia Sesion</a>
            <a href="#">Servicios</a>
            <a href="#">Contacto</a>
        </nav>
        <section className="textos-header">
            <h1>A aqui Podras hacer reservas en tu Universidad</h1>
            <h2>Con esta pgina wed</h2>
        </section>
       
    </header>
  )
}

export default Navbar
