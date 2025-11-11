import "./order.css";

export default function Order() {
  return (
    <main className="order container">
      <section className="order__breadcrumbs">
        <ul>
          <li>
            <a href="#">Головна</a>
          </li>
          <li>
            <a href="#">Взуття</a>
          </li>
          <li>
            <a href="#">Оформлення замовлення</a>
          </li>
        </ul>
      </section>

      <div className="order__inputs">
        <h2>Оформлення замовлення</h2>

        <div className="order__inputs--person">
          
          <div className="order__inputs-name-surname">
          <div class="form__row">
            <div class="order__inputs--form-group">
              <label for="firstName">Ваше ім’я *</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
          </div>

          <div class="order__inputs--form-group">
            <label for="lastName">Ваше прізвище *</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          </div>

          <div class="form__row">
            <div class="order__inputs--form-group">
              <label for="phone">Ваш номер телефону *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div class="form__row">
            <div class="order__inputs--form-group">
              <label for="email">Ваш email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div class="form__checkboxes">
            <label>
              <input type="checkbox" name="terms" required />Я отримувач
            </label>
            <label>
              <input type="checkbox" name="newsletter" />
              Інший отримувач
            </label>
          </div>
        </div>
      </div>

      <div className="order__detals"></div>
    </main>
  );
}
