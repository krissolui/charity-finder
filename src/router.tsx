import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import CharityDetail from './pages/CharityDetail';
import Search from './pages/Search';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		element: <Home />,
	},
	{
		path: '/charity/:id',
		element: <CharityDetail />,
	},
	{
		path: '/search/:search',
		element: <Search />,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
]);
