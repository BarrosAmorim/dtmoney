import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewModal: () => void
}

export const Header = ({ onOpenNewModal }: HeaderProps) => {
    return (
        <div>
            <Container>
                <Content>
                    <img src={logoImg} alt="dt money" />
                    <button type="button" onClick={onOpenNewModal}>Nova Transação</button>
                </Content>
            </Container>
        </div>
    )
}

