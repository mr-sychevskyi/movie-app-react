import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import './style.styl';

import ButtonIcon from '../button-icon/index';
import NewMovie from '../../containers/new-movie/index';

class Modal extends Component {
    render() {
        const modalRoot = document.getElementById('modal-root');

        return modalRoot && ReactDOM.createPortal(
            this.props.children,
            modalRoot,
        );
    }
}

class ModalParent extends Component {
    state = {isOpen: false};

    toggleModal = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        const currSection = location.pathname.slice(1);

        return (
            <Fragment>
                {currSection === 'movies' && <ButtonIcon type="add" class="btn-add" action={this.toggleModal}/>}
                {this.state.isOpen &&
                <Modal>
                    <div className="modal-overlay">
                        <NewMovie onClose={this.toggleModal}/>
                    </div>
                </Modal>}
            </Fragment>
        );
    }
}

export default ModalParent;
