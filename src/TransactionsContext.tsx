import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

type TransactionProps = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionsProviderProps = {
    children: ReactNode
}


type TransactionsContextData = {
    transactions: TransactionProps[]
    createTransaction: (transaction: TransactionInputProps) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider ({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionInputProps) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}