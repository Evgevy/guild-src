import { ScrollLock } from '../../utils/scroll-lock.js';
import { FocusLock } from '../../utils/focus-lock.js';

export class Header {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._toggle = document.querySelector('[data-toggle-menu]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onToggleClick = this._onToggleClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._toggle) {
      return;
    }

    this._toggle.addEventListener('click', this._onToggleClick);
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-open');
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-open');
    this._scrollLock.enableScrolling();
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    this._focusLock.unlock('[data-header]');
  }

  _onToggleClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('[data-close-menu]')) {
      this._closeMenu();
    }
  }


}

// if (window.innerWidth >= 670) {
//   document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.main-nav__link-jump').forEach(function (link) {
//       link.addEventListener('click', function (e) {
//         e.preventDefault();

//         const menu = this.nextElementSibling;
//         const activeLink = document.querySelector('.main-nav__link-jump.active');
//         const activeMenu = document.querySelector('.main-nav__sublist.show');

//         if (activeMenu && activeMenu !== menu) {
//           activeMenu.classList.remove('show');
//         }

//         if (!menu.classList.contains('show')) {
//           menu.classList.add('show');
//         } else {
//           window.location.href = this.getAttribute('href');
//         }

//         if (activeLink) {
//           activeLink.classList.remove('active');
//         }
//         this.classList.add('active');
//       });
//     });

//     document.addEventListener('click', function (e) {
//       if (!e.target.closest('.main-nav__link-jump, .main-nav__sublist')) {
//         document.querySelectorAll('.main-nav__sublist.show').forEach(function (menu) {
//           menu.classList.remove('show');
//         });
//         document.querySelectorAll('.main-nav__link-jump.active').forEach(function (link) {
//           link.classList.remove('active');
//         });
//       }
//     });
//   });
// } else {
//   document.querySelectorAll('.main-nav__sublist.show').forEach(function (menu) {
//     menu.classList.remove('show');
//   });
//   document.querySelectorAll('.main-nav__link-jump.active').forEach(function (link) {
//     link.classList.remove('active');
//   });
// }

// if (window.innerWidth >= 670) {
//   document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.main-nav__link-jump').forEach(function (link) {
//       link.addEventListener('click', function (e) {
//         e.preventDefault();

//         const menu = this.nextElementSibling;
//         menu.classList.toggle('show');

//         this.classList.toggle('active');
//       });
//     });
//   });
// } else {

// }

// const link = document.querySelector('.main-nav__link-jump');

// if (window.innerWidth >= 670) {
//   link.addEventListener('click', () => {
//     link.classList.remove('hover');
//     link.classList.add('active');
//   });

// };

// function toggleMenuOnClick() {
//   document.querySelectorAll('.main-nav__link-jump').forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();

//       const menu = this.nextElementSibling;
//       const activeLink = document.querySelector('.main-nav__link-jump.active');
//       const activeMenu = document.querySelector('.main-nav__sublist.show');

//       if (activeMenu && activeMenu !== menu) {
//         activeMenu.classList.remove('show');
//       }

//       if (!menu.classList.contains('show')) {
//         menu.classList.add('show');
//       } else {
//         window.location.href = this.getAttribute('href');
//       }

//       if (activeLink) {
//         activeLink.classList.remove('active');
//       }
//       this.classList.add('active');
//     });
//   });
// }

// function hideMenuOnClickOutside() {
//   document.addEventListener('click', function (e) {
//     if (!e.target.closest('.main-nav__link-jump, .main-nav__sublist')) {
//       document.querySelectorAll('.main-nav__sublist.show').forEach(function (menu) {
//         menu.classList.remove('show');
//       });
//       document.querySelectorAll('.main-nav__link-jump.active').forEach(function (link) {
//         link.classList.remove('active');
//       });
//     }
//   });
// }