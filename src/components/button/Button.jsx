import './Button.css';

function Button({ type, variant, onClick, buttonText, form}) {
    return (
        <button
            type={type}
            className={variant}
            onClick={onClick}
            form={form}
        >
            {buttonText}
        </button>
    );
}

export default Button;