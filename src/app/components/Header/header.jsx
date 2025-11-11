import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/" >
        <img src="/icons/enemy_logo.svg" alt="enemy logo" />
      </a>
      <div className="header__menu">
        <ul className="header__navbar">
          <li>
            <a href="/new">НОВА КОЛЕЦІЯ</a>
          </li>
          <li className="header__navbar--btn">
            <a href="#">ВЗУТТЯ</a>
            <button class="icon-btn">
              <img src="/icons/btn_down.svg" alt="down"></img>
            </button>
          </li>
          <li className="header__navbar--btn">
            <a href="#">CУМКИ</a>
            <button class="icon-btn">
              <img src="/icons/btn_down.svg" alt="down"></img>
            </button>
          </li>
          <li>
            <a href="#">ЗНИЖКИ</a>
          </li>
          <li>
            <a href="#">КОНТАКТИ</a>
          </li>
        </ul>

        <div className="header__langbar">
          <img src="/icons/globe.svg" alt="globe icon" width={18} height={18} />
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
      </div>
    </header>
  );
}
