import React, { useState } from 'react';

const Form = ({addNewsFromProps}) => {
    const[text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);

    }
    const handleSubmit = (e)=> {        
        e.preventDefault();
        const textNews = {
            text,
            id: Date.now(),
        }       
        addNewsFromProps(textNews);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add news:
                <textarea value={text} onChange={handleChange} />
            </label>
            <input type="submit" value="Go!" />
        </form>
    );
};

export default Form;
