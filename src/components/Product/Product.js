import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage'
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {


  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState(props.sizes[0].additionalPrice);



  const getPrice = () => {
    return currentPrice + additionalPrice;
  };

  const handleSizeSelection = (size) => {
    setCurrentSize(size.name);
    setCurrentPrice(props.basePrice);
    setAdditionalPrice(size.additionalPrice);
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
    <ProductImage name={props.name} currentColor={currentColor}/>
    <ProductForm title={props.title}
        sizes={props.sizes}
        colors={props.colors}
        basePrice={props.basePrice}
        currentColor={currentColor}
        currentSize={currentSize}
        setCurrentColor={setCurrentColor}
        setCurrentSize={setCurrentSize}
        prepareOrder={prepareOrder}
        getPrice={getPrice}
        handleSizeSelection={handleSizeSelection}/>

    </article>
  )
};

export default Product;