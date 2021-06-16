import Modal from 'react-modal'

type ModalTransactionProps = {
    isOpen: boolean
    onRequestClose: () => void
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalTransactionProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} >
            <h2>Cadastrar</h2>
        </Modal>
    )
}
