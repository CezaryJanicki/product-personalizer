import Product from '../Product/Product';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = (props) => {

    const prepareColorClassName = (color) => {
        return styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`];
      };

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                  <li key={color}>
                    <button
                      type='button'
                      onClick={() => props.setCurrentColor(color)}
                      className={clsx(prepareColorClassName(color), {
                        [styles.active]: props.currentColor === color,
                      })}
                    ></button>
                  </li>
                ))}
            </ul>
          </div>
    );
}

export default OptionColor;

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
  };