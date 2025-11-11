import "./card.css";


export default function ProductCard({ image, title, price }) {
  return (
    <li className="product__card">
      <img src={image} alt="product image" />

      <div className="product__card--info-favorite">
        <div className="product__card--info">
          <h3>{title}</h3>
          <p>{price} грн</p>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <ul className="product__card--color">
        <li><button>colour</button></li>
        <li><button>colour</button></li>
        <li><button>colour</button></li>
      </ul>
    </li>
  );
}
