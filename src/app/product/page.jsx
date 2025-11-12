import "./product.css";
import ProductCard from "../items/card";

const infavoriteProducts = [
  {
    image: "images/main_new_1.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "images/main_new_2.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
  {
    image: "images/main_new_3.png",
    title: "Босоніжки жіночі із натуральної замші",
    price: 5000,
  },
];

export default function Product() {
  return (
    <main className="product container">
      <section className="product__breadcrumbs">
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
          <li>
            <a href="#">Босоніжки жіночі із натуральної замші</a>
          </li>
        </ul>
      </section>

      <section className="product__details">
        <ul className="product__details--prw-photo">
          <li className="product__preview">
            <img
              src="/images/product_image_1.png"
              alt="product image preview"
            />
          </li>
          <li className="product__preview active">
            <img
              src="/images/product_image_2.png"
              alt="product image preview"
            />
          </li>
          <li className="product__preview">
            <img
              src="/images/product_image_3.png"
              alt="product image preview"
            />
          </li>
          <li className="product__preview">
            <img
              src="/images/product_image_4.png"
              alt="product image preview"
            />
          </li>
          <li className="product__preview">
            <img
              src="/images/product_image_5.png"
              alt="product image preview"
            />
          </li>
        </ul>

        <div className="product__details--main-photo-wrapper">
          <img
            className="product__details--main-photo"
            src="/images/product_image_main.png"
            alt="product image"
            width={667}
            height={799}
          />
        </div>

        <div className="product__info">
          <div className="product__info--textinfo">
            <h2 className="product__info--name">
              Босоніжки жіночі із натуральної замші
            </h2>
            <div className="product__info--price-art">
              <div className="product__info--price">
                <p className="product__sale">5000 грн</p>
                <p className="product__price">5000 грн</p>
              </div>
              <p className="product__article">Art. 123456</p>
            </div>
          </div>
          <div className="product__size">
            <div className="product__size--title">
              <h3 className="product__info--subtitle">Розмір</h3>
              <p>Розмірна сітка</p>
            </div>
            <ul className="product__size--buttons">
              <li>
                <button>36</button>
              </li>
              <li>
                <button>37</button>
              </li>
              <li>
                <button>38</button>
              </li>
              <li>
                <button>39</button>
              </li>
              <li>
                <button>40</button>
              </li>
            </ul>
            <p className="product__info--availability">В наявності</p>
          </div>

          <div className="product__colour">
            <h3 className="product__info--subtitle">Колір</h3>
            <ul className="product__card--color">
              <li>
                <button>colour</button>
              </li>
              <li>
                <button>colour</button>
              </li>
              <li>
                <button>colour</button>
              </li>
            </ul>
          </div>

          <ul className="product__order--btns">
            <li>
              <button className="product__order--btn-black">
                Додати до кошику
              </button>
            </li>
            <li>
              <a href="/order">
                <button className="product__order--btn-white">
                  Купити в 1 клік
                </button>
              </a>
            </li>
          </ul>

          <ul className="product__informations">
            <li>
              <h3>Деталі</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                cursus lectus consectetur lorem porta, at ornare turpis
                lobortis.
              </p>
              <button>more</button>
            </li>
            <li>
              <h3>Про товар</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                cursus lectus consectetur lorem porta, at ornare turpis
                lobortis.
              </p>
              <button>more</button>
            </li>
            <li>
              <h3>Доставка, оплата та гарантія</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                cursus lectus consectetur lorem porta, at ornare turpis
                lobortis.
              </p>
              <button>more</button>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="product__infavorite--top">
          <h2>ВИ ТАКОЖ ЗБЕРЕГЛИ</h2>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <ul className="product__infavorite">
          {infavoriteProducts.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </ul>
      </section>
    </main>
  );
}
