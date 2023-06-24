import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {

    return (
        <div className={styles.imageContainer}>
        <img
        className={styles.image}
        alt={props.name}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
        </div>

    );
};

export default ProductImage;

ProductImage.propTypes = {
    name: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
  };