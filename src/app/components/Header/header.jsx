import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        <img src="/icons/enemy_logo.svg" alt="enemy logo" />
      </a>
      <ul className="header__navbar">
        <li>
          <a href="#">НОВА КОЛЕЦІЯ</a>
        </li>
        <li>
          <a href="#">Взуття</a>
          <button>v</button>
        </li>
        <li>
          <a href="#">CУМКИ</a>
          <button>v</button>
        </li>
        <li>
          <a href="#">ЗНИЖКИ</a>
        </li>
        <li>
          <a href="#">КОНТАКТИ</a>
        </li>
      </ul>

      <div className="header__langbar">
        <img src="/icons/globe.svg" alt="globe icon" />
        <button>UA</button>
      </div>

      <ul className="header__aktions">
        <li>
          <img src="/icons/favorite_unactive.svg" alt="favorite icon" />
        </li>
        <li>
          <img src="/icons/basket.svg" alt="basket icon" />
        </li>
      </ul>
    </header>
  );
}
