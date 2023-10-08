import React from 'react';

const FormField = ({
                       labelName,
                       type,
                       name,
                       placeholder,
                       value,
                       handleChange,
                       isSurpriseMe,
                       handleSurpriseMe,
                   }) => (
    <div>
        <div className="flex items-center justify-between px-1 gap-2 mb-2">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-antiflash-white"
            >
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="font-semibold text-xs bg-alabaster py-1 px-2 rounded-3xl text-black"
                >
                    Surprise me
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="bg-input-gray border border-dark-gray text-alabaster text-sm rounded-3xl focus:ring-tomato focus:border-tomato outline-none block w-full p-3"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default FormField;