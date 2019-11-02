import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import List from './components/List';

import Form from './components/Form';

// if (localStorage.news) {
// 	DEFAULT_NEWS = JSON.parse(localStorage.news);
// } else {
// 	DEFAULT_NEWS = [
// 		{
// 			id: 1,
// 			text: 'news1'
// 		}
// 	]
// }

const DEFAULT_NEWS = [
			{
			id: 1,
			text: 'news1'
			}
]

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