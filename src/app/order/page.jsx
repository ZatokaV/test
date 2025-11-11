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

      <section className="order__info">
        <div className="order__info--leftside">
          <h2>Оформлення замовлення</h2>
          <div className="order__contact-info">
            <h3>Контактна інформація</h3>
            <div className="order__contact--double-row">
              <div className="order__contact--name">
                <label htmlFor="firstName">Ваше ім’я *</label>
                <input
                  className="input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="order__contact--surname">
                <label htmlFor="lastName">Ваше прізвище *</label>
                <input
                  className="input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="order__contact--row">
              <label htmlFor="phone">Ваш номер телефону *</label>
              <input
                className="input"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="order__contact--row">
              <label htmlFor="email">Ваш email</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="order__contact--chekboxes">
              <label>
                <input type="checkbox" name="terms" required />Я отримувач
              </label>
              <label>
                <input type="checkbox" name="newsletter" />
                Інший отримувач
              </label>
            </div>
          </div>

          <div className="order__delivery--method">
            <h3>Способи доставки</h3>

            <div className="order__contact--chekboxes">
              <label>
                <input type="checkbox" name="delivery" required />
                Нова пошта поштомат
              </label>
              <label>
                <input type="checkbox" name="delivery" />
                Нова пошта кур’єр
              </label>
              <label>
                <input type="checkbox" name="delivery" />
                Нова пошта за Адресою
              </label>
            </div>

            <div className="order__contact--select">
              <label htmlFor="city">Оберіть ваше місто/смт/село</label>
              <select id="city" name="city" className="input">
                <option value="" disabled selected>
                  Оберіть
                </option>
                <option value="kyiv">Київ</option>
                <option value="lviv">Львів</option>
                <option value="odessa">Одеса</option>
                <option value="dnipro">Дніпро</option>
              </select>
            </div>
            <div className="order__contact--postnumber">
              <label htmlFor="postNumber">Оберіть номер відділення</label>
              <input
                className="input"
                type="postNumber"
                id="postNumber"
                name="postNumber"
                required
              />
            </div>
          </div>

          <div className="order__contact--paymethod">
            <h3>Способи оплати</h3>
            <div className="order__contact--chekboxes">
              <label>
                <input type="checkbox" name="paymethod" required />
                Онлайн (Google Pay, Apple Pay, Liqpay)
              </label>
              <label>
                <input type="checkbox" name="paymethod" />
                Розрахунок у відділенні нової пошти (післяплата) з мінімальною
                передплатою 90 грн (врахуйте, що нова пошта бере додаткову
                комімію в розмірі 2% від вартості товару + 20 грн )
              </label>
            </div>
          </div>

          <div className="order__contact--comment">
            <h3>Ваш коментар</h3>
            <div className="order__contact--row">
              <label htmlFor="comment">Додати коментар до замовлення</label>
              <textarea className="input" name="comment" id="comment">
                Ваше повідомлення...
              </textarea>
              <p>263 знаків залишилось</p>
            </div>
          </div>
        </div>

        <div className="order__info--rightside">
          карточка
          </div>



      </section>
    </main>
  );
}
