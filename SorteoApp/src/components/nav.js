import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  //   state = { showMenu: false };

  //   toggleMenuHandler() {
  //     const menuBtn = document.querySelector(".menu-btn");
  //     const menu = document.querySelector(".menu");
  //     const menuNav = document.querySelector(".menu-nav");
  //     const menuBranding = document.querySelector(".menu-branding");
  //     const navItems = document.querySelectorAll(".nav-item");

  //     // Set Initial State Of Menu
  //     if (!this.state.showMenu) {
  //       menuBtn.classList.add("close");
  //       menu.classList.add("show");
  //       menuNav.classList.add("show");
  //       menuBranding.classList.add("show");
  //       navItems.forEach(item => item.classList.add("show"));

  //       // Set Menu State
  //       showMenu = true;
  //     } else {
  //       menuBtn.classList.remove("close");
  //       menu.classList.remove("show");
  //       menuNav.classList.remove("show");
  //       menuBranding.classList.remove("show");
  //       navItems.forEach(item => item.classList.remove("show"));

  //       // Set Menu State
  //       showMenu = false;
  //     }
  //   }

  render() {
    return (
      <div>
        <header>
          <div className='menu-btn'>
            <div className='btn-line' />
            <div className='btn-line' />
            <div className='btn-line' />
          </div>

          <nav className='menu'>
            <div className='menu-branding'>
              <div className='portrait' />
            </div>
            <ul className='menu-nav'>
              <li className='nav-item current'>
                <Link
                  to='/'
                  className='nav-link'
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => (window.location.href = '/')}
                >
                  Inicio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-link'
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => (window.location.href = '/')}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/work'
                  className='nav-link'
                  onClick={() => (window.location.href = '/')}
                >
                  Nuestros Productos
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-link'
                  onClick={() => (window.location.href = '/')}
                >
                  Contactate con nosotros
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
