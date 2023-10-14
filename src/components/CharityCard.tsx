import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Charity } from '../utils/types';
import homeImg from '../assets/home-icon-silhouette.png';

interface ICharityCardProps {
	charity: Charity;
}

const Card = tw.div`
	flex flex-col
	justify-between
	gap-y-2
	h-full w-full
	m-auto
	p-4
	rounded 
	shadow-md hover:shadow-xl
`;

const Wrapper = tw.div`
	flex flex-row
	gap-x-2
	items-center
`;

const Name = tw.div`
	font-bold text-lg
`;

const LogoImg = tw.img`
	rounded-full
	w-[40px] h-[40px]
`;

const LocationIcon = tw.span`
	text-red-600
	material-symbols-outlined
`;

const Divider = tw.div`
	border-t border-solid border-stone-400
	mx-2 mb-2
`;

const CharityCard = ({ charity }: ICharityCardProps) => {
	const { name, location, logoUrl, slug } = charity;

	return (
		<Link to={`/charity/${slug}`}>
			<Card key={slug}>
				<Wrapper>
					<LogoImg src={logoUrl ?? homeImg} />
					<Name>{name}</Name>
				</Wrapper>
				<div>
					<Divider />
					<Wrapper>
						<LocationIcon>location_on</LocationIcon>
						{location}
					</Wrapper>
				</div>
			</Card>
		</Link>
	);
};

export default CharityCard;
