import { useQuery } from 'react-query';
import tw from 'tailwind-styled-components';
import { searchNonprofits } from '../api/everyOrg';
import CharityList from '../components/CharityList';
import { causes } from '../data/causes.json';
import { Container, LoadingMsg, Title } from '../styles/styledComponents';

const Hero = tw.div`
	flex items-center
	w-full h-96
	bg-[url("/toa-heftiba-_UIVmIBB3JU-unsplash.jpg")] bg-cover bg-center
	justify-center text-center
	text-[#ae9351] text-5xl
	font-bold font-[monospace]
`;

const HomePage = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['random-nonprofits'],
		queryFn: () => {
			const searchTerm =
				causes[Math.floor(Math.random() * causes.length)];
			return searchNonprofits(searchTerm);
		},
	});

	return (
		<>
			<Hero>
				<h1>Changing The World Through Kindness</h1>
			</Hero>
			<Container>
				<Title>Check These Out</Title>
				{isLoading && <LoadingMsg>Loading...</LoadingMsg>}
				{data && <CharityList charities={data.nonprofits} />}
			</Container>
		</>
	);
};

export default HomePage;
