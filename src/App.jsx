import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
