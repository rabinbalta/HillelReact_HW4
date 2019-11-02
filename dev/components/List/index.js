import React, { useState } from 'react';

const List = ({data}) => {
    const [quanNews, changeQuanNews] = useState(2);

    const toggleShow = () => {
        changeQuanNews(quanNews+2);
    } 

    return (
        <>
            <button
                onClick={ toggleShow }
            >
                toggle 2 news
            </button>
            <ul className='News'>
                {
                    data.slice([0], [quanNews]).map(news => (
                        <li key={news.id}>                                
                            {news.text}
                        </li>
                    ))
                }                   
            </ul>               
        </>                    
    );  
}

export default List;