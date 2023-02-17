import './style.scss'

function Button({ children, isActive, onClick }) {
    return (
        <button
        className={`button ${isActive ? 'buttonActive' : ''}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button