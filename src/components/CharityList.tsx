import tw from 'tailwind-styled-components';
import CharityCard from './CharityCard';
import { Charity } from '../utils/types';

interface ICharityListProps {
	charities: Charity[];
}

const Container = tw.div`
	grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
	gap-6
`;

const CharityList = ({ charities }: ICharityListProps) => {
	return (
		<Container>
			{charities.map((charity) => (
				<CharityCard
					charity={charity}
					key={
						charity.ein && charity.ein !== ''
							? charity.ein
							: charity.slug
					}
				/>
			))}
		</Container>
	);
};

export default CharityList;
