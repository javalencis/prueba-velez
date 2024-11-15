import React, { useState } from 'react';
import { Home } from './pages/Home';
import './styles/index.css'

const App: React.FC = () => {
	const [state, setState] = useState(0);
	return (
		<Home/>
	);
};

export default App;
