import { useState } from 'react'
import './style.scss'

function Form({ addTransaction }) {
    const [formData, setFormData] = useState({
        description: '',
        value: '',
        type: 'income',
    })

function handleSubmit(event) {
    event.preventDefault()
    
    const isEmpty = Object.keys(formData).some((key) => !formData[key])
    
    if (isEmpty) {
    alert('Preencha todos os campos');
    return
    }

    formData.value = Math.abs(formData.value)

    addTransaction(formData)

    setFormData({
        description: '',
        value: '',
        type: 'income',
    })
    }

function handleChange(event) {
    let { name, value } = event.target;

    setFormData((prevForm) => ({
    ...prevForm,
    [name]: value,
    }))
}

return (
    <form onSubmit={handleSubmit} className='formNewTransaction'>
    <div className={`inputDiv mainInputDiv`}>
        <label htmlFor=''>Descrição</label>
        <input
            id='inputDescription'
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
            maxLength={30}
            required
            placeholder='Digite aqui sua descrição'
        />
        <span>Ex: Compra de roupas</span>
        </div>
        <div className='complementDiv'>
        <div className='inputDiv'>
            <label htmlFor=''>Valor</label>
            <input
                id='inputValue'
                type='number'
                name='value'
                value={formData.value}
                onChange={handleChange}
                required
                placeholder='1'
            />
        </div>
            <div className='inputDiv'>
            <label htmlFor=''>Tipo de valor</label>
            <select
                id='inputType'
                name='type'
                value={formData.type}
                onChange={handleChange}
                required
            >
            <option value='income'>Entrada</option>
            <option value='expense'>Despesa</option>
            </select>
        </div>
    </div>

    <button type='submit'>Inserir valor</button>
    </form>
)
}

export default Form