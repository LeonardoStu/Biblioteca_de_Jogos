import PropTypes from 'prop-types'

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({label, value, setValue, placeholder}){
    return(
        <div style={{display:'inline-block', marginRight:'2rem'}}>
            <label htmlFor={label}>{label}</label>
            <input 
            type="text" 
            name={label} 
            id={label}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            />
        </div>
    )
}