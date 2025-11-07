export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <h1>НАЗВА КОЛЕКЦІЇ</h1>
          <p>LOREM IPSUM DOLORES</p>
          <p>ТРАВЕНЬ 2025</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </section>

      <section className="main__galery">
        <ul>
          <li>
            <img src="/images/main_galery_1.png" alt="product image" />
          </li>
          <li>
            <img src="/images/main_galery_2.png" alt="product image" />
          </li>
        </ul>
      </section>

      <section className="main__new">
        <h2>НОВІ НАДХОДЖЕННЯ</h2>
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

      <section className="main__galery">
        <ul>
          <li>
            <img src="/images/main_galery_2.png" alt="product image" />
          </li>
          <li>
            <img src="/images/main_galery_1.png" alt="product image" />
          </li>
        </ul>
      </section>

      <section className="main__bestsellers">
        <h2>БЕСТСЕЛЕРИ</h2>
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
    </main>
  );
}
