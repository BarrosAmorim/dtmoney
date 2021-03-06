import { useContext } from 'react'
import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from '../services/api'

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
    createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider ({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInputProps) {
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date()
       })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])

    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}