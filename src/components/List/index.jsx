import trashIcon from '../../assets/icons/trash.svg'
import emptyList from '../../assets/emptyList.svg'
import './style.scss'
 
function List({ transactions, removeTransaction }) {
    function translateType(type) {
    switch (type) {
    case 'income':
    return 'entrada';
    case 'expense':
    return 'despesa';
    default:
    return '';
    }
}

if (transactions.length < 1) {
    return (
    <div className='emptyList'>
        <p>Você ainda não possui nenhum lançamento</p>
        <img src={emptyList} alt='empty list' />
    </div>
    );
}

return (
    <ul className='transactions'>
    {transactions.map(({ id, description, value, type }) => {
    return (
        <li
        key={id}
        className={`trasactionItem ${type === 'income' ? 'trasactionItemIncome' : ''}`}>
        <div className='transactionInfo'>
            <h3>{description}</h3>
            <span>{translateType(type)}</span>
        </div>

        <div className='transactionValueArea}'>
            <span>
            R${' '}
            {Number(value).toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            })}
            </span>
            <button onClick={() => removeTransaction(id)} className='trash'>
            <img src={trashIcon} alt='trash' />
            </button>
            </div>
        </li>
        )
    })}
    </ul>
)
}

export default List