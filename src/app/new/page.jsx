import "./new.css";
import ProductCard from "../items/card";

const products = [
  {
    image: "/images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "/images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
];

export default function New() {
  return (
    <main className="new container">
      <section className="new__breadcrumbs">
        <ul>
          <li>
            <a href="#">Головна</a>
          </li>
          <li>
            <a href="#">Взуття</a>
          </li>
          <li>
            <a href="#">Категорія</a>
          </li>
        </ul>
      </section>

      <section className="new__search">
        <a href="#">
          <h2>Категорія</h2>
        </a>
        <div className="new__search--rightside">
          <form
            id="searchForm"
            className="new__search--form"
            action="/search"
            method="get"
          >
            <label for="searchQuery"></label>
            <input
              type="search"
              id="searchQuery"
              name="q"
              placeholder="Я хочу знайти..."
            />
            <button type="submit">
              <img src="icons/lupa.svg" alt="lupa" />{" "}
            </button>
          </form>

          <div className="new__search--openfiltres">
            <summary>Відкрити Фільтр</summary>
            <img src="icons/tr_down.svg" alt="treangle down" />
          </div>
        </div>
      </section>
      <section className="new__search--all-items">
        <ul className="all-items__list">
          {products.map((item, index) => (
            <li key={index} className="all-items__card">
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
