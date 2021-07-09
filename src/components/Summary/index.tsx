import { useContext } from 'react'
import { Container } from './styles'
import entradas from '../../assets/entrada.svg'
import saida from '../../assets/saida.svg'
import total from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'


export const Summary = () => {
    const { transactions } = useTransactions()

    const sumarry = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.deposits += transactions.amount
            acc.total += transactions.amount
        } else {
            acc.withdraws += transactions.amount
            acc.total -= transactions.amount
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="ícone de uma seta para cima" />
                </header>
                <strong>
                   +{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saida} alt="ícone de uma seta para baixo" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.total)}
                </strong>
            </div>
        </Container>
    )
}
