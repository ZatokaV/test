import "./product.css";

export default function Product() {
  return (
    <main className="product">
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
        <ul>
          <li className="product__preview">
            <img src="/images/product_image_1.png" alt="product image" />
          </li>
          <li className="product__preview">
            <img src="/images/product_image_2.png" alt="product image" />
          </li>
          <li className="product__preview">
            <img src="/images/product_image_3.png" alt="product image" />
          </li>
          <li className="product__preview">
            <img src="/images/product_image_4.png" alt="product image" />
          </li>
          <li className="product__preview">
            <img src="/images/product_image_5.png" alt="product image" />
          </li>
        </ul>

        <img
          src="/images/product_image_main.png"
          alt="product image"
          width={667}
          height={799}
        />

        <section className="product__info">
          <h2>Босоніжки жіночі із натуральної замші</h2>
          <p className="product__sale">5000 грн</p>
          <p className="product__price">5000 грн</p>
          <p className="product__article">Art. 123456</p>

          <div className="product__size">
            <h3>Розмір</h3>
            <p>Розмірна сітка</p>
            <ul>
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
            <p>В наявності</p>
          </div>

          <div className="product__colour">
            <h3>Колір</h3>
            <ul>
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
              <button className="btn--white">Додати до кошику</button>
            </li>
            <li>
              <button className="btn--black">Купити в 1 клік</button>
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
        </section>

        <section className="product__infavorite">
          <h2>ВИ ТАКОЖ ЗБЕРЕГЛИ</h2>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <ul>
            <li className="product__card">
              <img src="images/main_new_1.png" alt="product image" />
              <h3>Босоніжки жіночі із натуральної замші</h3>
              <p>5000 грн</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
              <ul>
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
            </li>

            <li className="product__card">
              <img src="images/main_new_2.png" alt="product image" />
              <h3>Босоніжки жіночі із натуральної замші</h3>
              <p>5000 грн</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
              <ul>
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
            </li>

            <li className="product__card">
              <img src="images/main_new_3.png" alt="product image" />
              <h3>Босоніжки жіночі із натуральної замші</h3>
              <p>5000 грн</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
              <ul>
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
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
