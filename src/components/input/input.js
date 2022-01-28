import PropTypes from 'prop-types';

function Input({ type, placeholder, name, ...rest }) {
    return (
        <>
            <input type={type} placeholder={placeholder} name={name} />
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Input;