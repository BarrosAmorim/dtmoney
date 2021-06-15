import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export const App = () => {
  const [modalIsOpen,setModalIsOpen] = useState(false)

    const hadleOpenModal = () => {
        setModalIsOpen(true)
    }
    const hadleCloseModal = () => {
        setModalIsOpen(false)
    }
  return (
    <>
      <Header onOpenNewModal={hadleOpenModal} />
      <Dashboard />
      <Modal isOpen={modalIsOpen} onRequestClose={hadleCloseModal} >
        <h2>Cadastrar</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}


