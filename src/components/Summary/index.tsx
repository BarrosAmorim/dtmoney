import { Container } from './styles'
import entradas from '../../assets/entrada.svg'
import saida from '../../assets/saida.svg'
import total from '../../assets/total.svg'

export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="ícone de uma seta para cima" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saida} alt="ícone de uma seta para baixo" />
                </header>
                <strong> - R$ 100,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>R$ 900,00</strong>
            </div>
        </Container>
    )
}
