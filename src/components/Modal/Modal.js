import './modal.scss';

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={ active ? "modal modal_active" : "modal" } onClick={ () => setActive(false) }>
            <div className={ active 
                                ? "modal__content-container modal__content-container_active" 
                                : "modal__content-container" } 
                onClick={ e => e.stopPropagation() }>
                { children }
            </div>   
        </div>
    );
}

export default Modal;