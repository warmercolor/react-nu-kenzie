import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Transactions from '../Transactions'
import Form from '../Form'
import TotalMoney from '../TotalMoney'
import Header from '../Header'
import './style.scss'

function Home() {
    const [transactions, setTransactions] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);

useEffect(() => {
    const totalMoney = transactions.reduce((acc, { value, type }) => {
    if (type === 'income') {
        return acc + Number(value);
    }

    return acc - Number(value);
    }, 0)

    setTotalMoney(totalMoney);
}, [transactions])

function addTransaction(newTransaction) {
    newTransaction.id = nanoid()
    setTransactions((prevTransactions) => [
        newTransaction,
        ...prevTransactions,
    ]);
}

function removeTransaction(transactionId) {
    setTransactions((prevTransactions) => {
        return prevTransactions.filter(({ id }) => id !== transactionId);
    })
}

return (
    <>
    
    <Header />
    <main className='mainHome'>
        <div className='container'>
            <section className='newTransactions'>
                <Form addTransaction={addTransaction} />
                <TotalMoney totalMoney={totalMoney} />
            </section>
            <Transactions
            transactions={transactions}
            removeTransaction={removeTransaction}
            />
            </div>
        </main>
    </>
)
}

export default Home