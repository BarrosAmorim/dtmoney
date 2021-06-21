import Modal from 'react-modal'
import entrada from '../../assets/entrada.svg'
import saida from '../../assets/saida.svg'
import { Container, TransactionContainer } from './styles'

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
                <TransactionContainer>
                    <button type="button">
                        <img src={entrada} alt="seta verde para cima" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={saida} alt="seta vermelha para baixo" />
                        <span>Saída</span>
                    </button>
                </TransactionContainer>
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
