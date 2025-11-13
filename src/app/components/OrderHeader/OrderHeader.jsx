import "./OrderHeader.css";

export default function OrderHeader() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src="/icons/enemy_logo.svg" alt="enemy logo" />
      </a>
      <a className="header__back" href="/new">Повернутись до покупок</a>
    </header>
  );
}
