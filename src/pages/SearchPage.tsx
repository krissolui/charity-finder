import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchNonprofits } from '../api/everyOrg';
import CharityList from '../components/CharityList';
import { Container, LoadingMsg, Title } from '../styles/styledComponents';

const SearchPage = () => {
	const { cause } = useParams();
	const { isLoading, data } = useQuery({
		queryKey: [cause],
		queryFn: () => searchNonprofits(cause ?? ''),
	});

	return (
		<Container>
			<Title>Search results for: {cause}</Title>
			{isLoading && <LoadingMsg>Loading...</LoadingMsg>}
			{data && <CharityList charities={data.nonprofits} />}
		</Container>
	);
};

export default SearchPage;
