import { useContext } from 'react'
import Modal from 'react-modal'
import entrada from '../../assets/entrada.svg'
import saida from '../../assets/saida.svg'
import { Container, TransactionContainer, Button } from './styles'

import close from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

type ModalTransactionProps = {
    isOpen: boolean
    onRequestClose: () => void
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalTransactionProps) => {
    const  {createTransaction}  = useContext(TransactionsContext)
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit')

    const handleCreateNewTransaction =  (event: FormEvent) => {
        event.preventDefault()
        createTransaction({title, amount, category, type})
       
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content" >
            <button type="button" onClick={onRequestClose} className="react-modal-close"> <img src={close} alt="botão fechar modal" /> </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input type="number" placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
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
                <input placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
