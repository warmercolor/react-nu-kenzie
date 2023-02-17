import Button from '../Button'
import './style.scss'

function Filter({ typeActive, changeType }) {
    const buttons = [
        { name: 'Todos', value: '' },
        { name: 'Entradas', value: 'income' },
        { name: 'Despesas', value: 'expense' },
    ]

    return (
        <section className='filter'>
        <span>Resumo financeiro</span>
        <div className='filterButtons'>
            {buttons.map(({ name, value }, i) => {
            return (
            <Button
                key={i}
                isActive={typeActive === value}
                onClick={() => changeType(value)}
            >
                {name}
            </Button>
            )
        })}
        </div>
    </section>
)
}

export default Filter