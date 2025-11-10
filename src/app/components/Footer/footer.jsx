import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo--contacts">
          <a className="logo" href="#">
            <img src="/icons/enemy_logo.svg" alt="enemy logo" />
          </a>
          <address className="footer__contacts">
            <a href="mailto:example@email.com">example@email.com</a>
            <a href="tel:+380123456789">+38(012) 345-67-89</a>
          </address>
        </div>

        <div className="footer__content--inform">
          <div className="footer__items">
            <h3 className="footer__column--names">Items</h3>
            <ul>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
              <li>
                <a href="#">Категорія</a>
              </li>
            </ul>
          </div>

          <div className="footer__legal">
            <h3 className="footer__column--names">legal</h3>
            <ul className="footer__columns--el">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer__forcustomers">
            <h3 className="footer__column--names">For Customers</h3>
            <ul className="footer__columns--el">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Delivery and Payment</a>
              </li>
            </ul>
          </div>

          <ul className="footer__socials">
            <li>
              <a href="#">
                <img src="/icons/tictok.svg" alt="tictok icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/facebook.svg" alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/telegram.svg" alt="telegram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/insta.svg" alt="instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright--leftside">
          <p>&copy; 2025 Enemy</p>

          <ul className="footer__paymant">
            <li>
              <img src="/icons/visa.svg" alt="visa icon" />
            </li>
            <li>
              <img src="/icons/master.svg" alt="mastercard icon" />
            </li>
            <li>
              <img src="/icons/applepay.svg" alt="applepay icon" />
            </li>
            <li>
              <img src="/icons/gpay.svg" alt="googlepay icon" />
            </li>
          </ul>
        </div>
        <p>Made by Circle studio</p>
      </div>
    </footer>
  );
}
