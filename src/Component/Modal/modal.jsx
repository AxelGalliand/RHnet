import styles from '../../styles/modal.module.css';
import closeIcon from '../../assets/close.svg';
import PropTypes from 'prop-types';


/**
 * 
 * @returns {jsx|Component}
 */
const Modal = ({setOpenModal}) => {

 return (
   <div className={styles['modalContainer']}>
    <div className={styles['modal']}>
      <div className={styles['modal_icon']}>
        <img src={closeIcon} onClick={() => setOpenModal(false)} />
      </div>  
      <span className={styles['modal_span']}>Employee successfully added</span>
    </div>
   </div>  
 )
};

Modal.propTypes ={
  setOpenModal: PropTypes.func
 }

export default Modal;