import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import List from './components/List';

import Form from './components/Form';

const defaultList = [
	{
	id: 1,
	text: 'news1'
	}
]
const DEFAULT_NEWS = localStorage.news ? JSON.parse(localStorage.news) : defaultList;

const App = () => {
	const [listNews, changeListNews] = useState(DEFAULT_NEWS);

	const addNews = (item) => {		
		changeListNews([item,...listNews])			
		localStorage.news = JSON.stringify(listNews);
	}

		return (
			<div>
				<Form
					addNewsFromProps={addNews}
				/>
				<List data={listNews} />
			</div>
		);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);