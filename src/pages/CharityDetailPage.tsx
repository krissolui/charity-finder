import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getNonprofit } from '../api/everyOrg';
import CharityDetail from '../components/CharityDetail';
import { Container, LoadingMsg } from '../styles/styledComponents';

const CharityDetailPage = () => {
	const { id } = useParams();

	const { isLoading, data, error } = useQuery({
		queryKey: ['nonprofit', id],
		queryFn: () => getNonprofit(id ?? ''),
	});

	return (
		<Container>
			{isLoading && <LoadingMsg>Loading...</LoadingMsg>}
			{!error && data && (
				<CharityDetail
					charity={data?.data.nonprofit}
					tags={data.data.nonprofitTags}
				/>
			)}
		</Container>
	);
};

export default CharityDetailPage;
