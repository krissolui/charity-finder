import { useEffect, useState } from 'react';
import CharityList from '../components/CharityList';
import { Charity } from '../utils/types';
import { Msg } from '../styles/styledComponents';

const FavoriteCharities = () => {
	const [favorites, setFavorites] = useState<Charity[]>([]);

	useEffect(() => {
		try {
			const storedFavorites = window.localStorage.getItem('favorites');
			if (storedFavorites) {
				setFavorites(JSON.parse(storedFavorites));
			}
		} catch (ex) {
			console.warn('failed to access local storage');
		}
	}, []);

	return (
		<>
			{favorites.length === 0 && (
				<Msg>
					You're favorite list is empty. Check out our catelog and
					find charities you want to support!
				</Msg>
			)}
			<CharityList charities={favorites} />
		</>
	);
};

export default FavoriteCharities;
