import React from 'react';
import {MyButton, MyInput} from 'dogram-ui-kit';

function App() {
	return (
		<div className="App">
			<h2>MyButton</h2>
			<MyButton color="black">Click Me</MyButton>
			<h2>MyButton</h2>
			<MyInput name="username" placeholder="Input here..." big={false} label="MyLabel"/>
		</div>
	);
}

export default App;
