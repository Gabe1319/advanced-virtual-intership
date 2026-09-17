import Link from 'next/link'

 function Navbar() {
   <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src="" alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <Link href="/login" className="nav__list nav__list--login">Login</Link>
          <Link href="/about" className="nav__list nav__list--mobile">About</Link>
          <Link href="/contact" className="nav__list nav__list--mobile">Contact</Link>
          <Link href="/help" className="nav__list nav__list--mobile">Help</Link>
        </ul>
      </div>
    </nav>
 }

 export default Navbar