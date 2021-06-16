import Modal from 'react-modal'
import { Container } from './styles'

import close from '../../assets/close.svg'

type ModalTransactionProps = {
    isOpen: boolean
    onRequestClose: () => void
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalTransactionProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content" >
            <button type="button" onClick={onRequestClose} className="react-modal-close"> <img src={close} alt="botão fechar modal" /> </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
