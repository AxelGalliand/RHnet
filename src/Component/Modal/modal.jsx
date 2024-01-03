import styles from '../../styles/modal.module.css';
import closeIcon from '../../assets/close.svg';


/**
 * 
 * @returns {jsx|Component}
 */
const Modal = ({setOpenModal}) => {

   const closeModal = () => {
    
   }

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
}

export default Modal;