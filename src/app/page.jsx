import "./styles/main.css";
import ProductCard from "./items/card";


const products = [
  { image: "images/main_new_1.png", title: "Босоніжки жіночі із натуральної замші", price: 5000 },
  { image: "images/main_new_2.png", title: "Босоніжки жіночі із натуральної замші", price: 5000 },
  { image: "images/main_new_3.png", title: "Босоніжки жіночі із натуральної замші", price: 5000 },
];


export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text--main">
            <h1>НАЗВА КОЛЕКЦІЇ</h1>
            <p>LOREM IPSUM DOLORES</p>
          </div>
          <p>ТРАВЕНЬ 2025</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </section>

      <section>
        <ul className="main__galery">
          <li>
            <img src="/images/main_galery_1.png" alt="product image" />
          </li>
          <li>
            <img src="/images/main_galery_2.png" alt="product image" />
          </li>
        </ul>
      </section>

      <section className="main__new">
        <div className="main__new--top">
          <h2>НОВІ НАДХОДЖЕННЯ</h2>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <ul className="main__new--products">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </ul>
      </section>

      <section>
        <ul className="main__galery">
          <li>
            <img src="/images/main_galery_2.png" alt="product image" />
          </li>
          <li>
            <img src="/images/main_galery_1.png" alt="product image" />
          </li>
        </ul>
      </section>

      <section className="main__bestsellers">
        <div className="main__bestsellers--top">
          <h2>БЕСТСЕЛЕРИ</h2>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <ul className="main__bestsellers--products">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </ul>
      </section>
    </main>
  );
}
