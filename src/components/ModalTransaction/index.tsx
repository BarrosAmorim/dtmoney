import Modal from 'react-modal'
import entrada from '../../assets/entrada.svg'
import saida from '../../assets/saida.svg'
import { Container, TransactionContainer, Button } from './styles'

import close from '../../assets/close.svg'
import { useState } from 'react'

type ModalTransactionProps = {
    isOpen: boolean
    onRequestClose: () => void
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalTransactionProps) => {

    const [type, setType] = useState('deposit')

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content" >
            <button type="button" onClick={onRequestClose} className="react-modal-close"> <img src={close} alt="botão fechar modal" /> </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionContainer>
                    <Button
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        >
                        <img src={entrada} alt="seta verde para cima" />
                        <span>Entrada</span>
                    </Button>
                    <Button
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={saida} alt="seta vermelha para baixo" />
                        <span>Saída</span>
                    </Button>
                </TransactionContainer>
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
