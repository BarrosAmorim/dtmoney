import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export const TransactionsTable = () => {

    useEffect(() => {
        api.get('/transactions').then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ + 5.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>14/06/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ - 300,00</td>
                        <td>Impressora</td>
                        <td>14/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default TransactionsTable
