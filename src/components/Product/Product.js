import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState(props.sizes[0].additionalPrice);

  const prepareColorClassName = (color) => {
    return styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`];
  };

  const getPrice = () => {
    return currentPrice + additionalPrice;
  };

  const handleSizeSelection = (size) => {
    setCurrentSize(size.name);
    setCurrentPrice(props.basePrice);
    setAdditionalPrice(size.additionalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prepareOrder();
    console.log(prepareOrder());
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ',currentSize);
    console.log('Color: ', currentColor);
  };

  const prepareOrder = () => {
    return {
      title: props.title,
      price: getPrice(),
      color: currentColor,
      size: currentSize,
    };
  };

  return (

    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                  <li key={size.name}>
                    <button
                      type='button'
                      onClick={() => {setCurrentSize(size); handleSizeSelection(size)}}
                      className={clsx({ [styles.active]: currentSize === size })}
                    >
                      {size.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                  <li key={color}>
                    <button
                      type='button'
                      onClick={() => setCurrentColor(color)}
                      className={clsx(prepareColorClassName(color), {
                        [styles.active]: currentColor === color,
                      })}
                    ></button>
                  </li>
                ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;