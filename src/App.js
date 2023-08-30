import './App.css';

function App() {
  return (
    <div>
      <header>
        { <div className='bx bx-menu' id="menu-icon"></div> }
        <a href="#" className='logo'><img src='chicks-logo-large.png'/></a>

        
        <ul className="navbar">
          <li><a href="#">CURRENCY</a></li>
          <li><a href="#">ITEMS</a></li>
          <li><a href="#">ACCOUNTS</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">SWAP</a></li>
          <li><a href="#">SELL</a></li>
        </ul>

        <div className='main'>
        <a href='#' className='user'>USD</a>
          <div className='sign'>
            <button href='#' className='user2'>SIGN IN < i className="ri-user-fill"></i></button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
