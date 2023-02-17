import './style.scss'

function TotalMoney({ totalMoney }) {
    return (
    <div className='totalMoney'>
        <span>Valor total:</span>
        <span>$ {totalMoney.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</span>
    </div>
)
}

export default TotalMoney