import Modal from 'react-modal'
import { useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { ModalTransaction } from './components/ModalTransaction'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

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
      <ModalTransaction isOpen={modalIsOpen} onRequestClose={hadleCloseModal} />
      <GlobalStyle />
    </>
  )
}


