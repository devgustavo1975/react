import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>MinhaApp</h1>
      </div>

      <nav className="header-nav">
        <a href="#home">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>

      <div className="header-user">
        <img 
          src="https://via.placeholder.com/40" 
          alt="avatar" 
          className="header-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
