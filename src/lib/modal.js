import React,{Component} from 'react';

class Modal extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const modalOverlay={display:flex};
        return
        (
            <div style={modalOverlay}>
                <div className={classes.modal} ref={node => (this.modal = node)}>
                    <div className={classes.modalContent}>
                        {children}
                    </div>
                </div>
                <button
                    type="button"
                    className={classes.closeButton}
                    onClick={onCloseRequest}
                />
            </div>
        );
    }
}

export default Modal;