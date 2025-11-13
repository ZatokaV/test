import "./card.css";

export default function ProductCard({ image, title, price }) {
  return (
    <li className="product__card">
      <img src={image} alt="product image" />

      <div className="product__card--info-favorite">
        <div className="product__card--info">
          <h3 className="product__name">
            <a href="/product">{title}</a>
          </h3>
          <p className="product__price">{price} грн</p>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <ul className="product__card--color">
        <li>
          <button>
            <span
              className="color-swatch"
              style={{ backgroundColor: "#5C5A5D" }}
              aria-hidden="true"
            ></span>
          </button>
        </li>
        <li>
          <button>
            <span
              className="color-swatch"
              style={{ backgroundColor: "#E7E4D1" }}
              aria-hidden="true"
            ></span>
          </button>
        </li>
        <li>
          <button>
            <span
              className="color-swatch"
              style={{ backgroundColor: "#281513" }}
              aria-hidden="true"
            ></span>
          </button>
        </li>
      </ul>
    </li>
  );
}
