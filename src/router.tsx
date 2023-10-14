import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import CharityDetailPage from './pages/CharityDetailPage';
import RootPage from './pages/RootPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/charity/:id',
				element: <CharityDetailPage />,
			},
			{
				path: '/favorites',
				element: <FavoritesPage />,
			},
			{
				path: '/search/:cause',
				element: <SearchPage />,
			},
		],
	},
]);
