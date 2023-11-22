import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ name, type, id, placeholder, value, onChange, required, children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                ref={inputRef}
                name={name}
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </>
    );
};

export default InputWithLabel;




