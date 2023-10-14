import FavoriteCharities from '../components/FavoriteCharities';
import { Container, Title } from '../styles/styledComponents';

const FavoritesPage = () => {
	return (
		<Container>
			<Title>Favorites</Title>
			<FavoriteCharities />
		</Container>
	);
};

export default FavoritesPage;
