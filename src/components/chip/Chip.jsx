import './Chip.css';

function Chip({ variant, chipText }) {
    return (
        <span className={`subtitle ${variant}`}>{chipText}</span>
    )
}

export default Chip;