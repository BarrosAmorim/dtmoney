import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => {
    return (
        <div>
            <Container>
                <Content>
                    <img src={logoImg} alt="dt money" />
                    <button type="button">Nova Transação</button>
                </Content>
            </Container>
        </div>
    )
}

