import { useEffect, useState } from 'react'
import Filter from '../Filter'
import List from '../List'
import './style.scss'

function Transactions({ transactions, removeTransaction}) {
    const [typeActive, setTypeActive] = useState("")
    const [transactionToShow, setTransactionToShow] = useState([])

useEffect(() => {
    let filteredTransactions = transactions

    if (typeActive) {
        filteredTransactions = transactions.filter(
        (transaction) => transaction.type === typeActive
    )
    }

    setTransactionToShow(filteredTransactions)
}, [transactions, typeActive]);

function changeType(newType) {
    setTypeActive(newType);
}

return (
    <section className='transactions'>
    <Filter typeActive={typeActive} changeType={changeType} />
    <List
        transactions={transactionToShow}
        removeTransaction={removeTransaction}
    />
    </section>
)
}

export default Transactions