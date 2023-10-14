import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Charity, CharityDetail, Tag } from '../utils/types';
import homeImg from '../assets/home-icon-silhouette.png';
import detailBannerImg from '../assets/detail-banner.svg';

interface ICharityDetailProps {
	charity: CharityDetail;
	tags: Tag[];
}

interface ILinkBtnProps {
	$primary?: boolean;
	$added?: boolean;
}

const Container = tw.div`
	flex flex-col md:flex-row
	gap-6
	max-w-4xl
	mx-auto
`;

const DetailCard = tw.div`
	flex flex-col
	w-full
	mx-auto
	md:max-w-lg lg:max-w-2xl
	shadow-lg
	drop-shadow-md
	rounded-lg
`;

const LinkCard = tw.div`
	flex flex-col
	gap-y-4
	h-fit
	p-6
	mx-auto
	w-full md:max-w-xs
	shadow-lg
	drop-shadow-md
	rounded-lg
`;

const DetailInfo = tw.div`
	flex flex-col
	gap-y-4
	w-full
	p-6
	mx-auto
	shadow-lg
	rounded-lg
`;

const Wrapper = tw.div`
	flex flex-row
	gap-x-2
	items-center
`;

const ProfileImg = tw.img`
	rounded-t-lg
`;

const Name = tw.div`
	font-bold text-2xl
`;

const LogoImg = tw.img`
	rounded-full
	w-[40px] h-[40px]
`;

const LocationIcon = tw.span`
	text-red-600
	material-symbols-outlined
`;

const Description = tw.div`
	w-full
`;

const LinkBtn = tw.button<ILinkBtnProps>`
	w-full
	px-4 py-3
	rounded-md
	${(p) => (p.$primary ? 'bg-green-600' : p.$added ? 'bg-sky-500' : 'bg-red-500')}
	text-white
	font-bold
`;

const Tags = tw.div`
	flex flex-wrap
	gap-2
`;

const TagBtn = tw.button`
	px-3 py-1
	bg-gray-400 hover:bg-gray-500 rounded-xl
	text-white
`;

const CharityDetail = ({ charity, tags }: ICharityDetailProps) => {
	const [favorites, setFavorites] = useState<Charity[]>([]);
	const [inFav, setInFav] = useState<boolean>(false);
	const [showAddedMsg, setShowAddedMsg] = useState<boolean>(false);

	useEffect(() => {
		try {
			const storedFavorites = window.localStorage.getItem('favorites');
			if (storedFavorites) {
				const favs: Charity[] = JSON.parse(storedFavorites);
				setInFav(
					favs.find((fav) => fav.ein === charity.ein) !== undefined
				);
				setFavorites(favs);
			}
		} catch (ex) {
			console.warn('failed to access local storage');
		}
	}, [charity.ein]);

	const handleAddToFav = () => {
		const favs = [
			...favorites,
			{
				description: charity.description,
				ein: charity.ein,
				name: charity.name,
				profileUrl: charity.profileUrl,
				logoUrl: charity.logoUrl,
				coverImageUrl: charity.coverImageUrl,
				logoCloudinaryId: charity.logoCloudinaryId,
				matchedTerms: [],
				slug: charity.primarySlug,
				location: charity.locationAddress,
				tags: tags.map(({ tagName }) => tagName),
			},
		];

		try {
			window.localStorage.setItem('favorites', JSON.stringify(favs));
			setFavorites(favs);
			setInFav(true);
			setShowAddedMsg(true);
		} catch (ex) {
			return;
		}
	};

	const handleRemoveFromFav = () => {
		setInFav(false);
		setShowAddedMsg(false);

		const favs = [...favorites];
		const idx = favs.findIndex(({ ein }) => ein === charity.ein);
		favs.splice(idx, 1);

		try {
			window.localStorage.setItem('favorites', JSON.stringify(favs));
			setFavorites(favs);
			setInFav(false);
			setShowAddedMsg(false);
		} catch (ex) {
			return;
		}
	};

	return (
		<Container>
			<DetailCard>
				<ProfileImg src={charity.coverImageUrl ?? detailBannerImg} />
				<DetailInfo>
					<Wrapper>
						<LogoImg src={charity.logoUrl ?? homeImg} />
						<Name>{charity.name}</Name>
					</Wrapper>
					<Wrapper>
						<LocationIcon>location_on</LocationIcon>
						{charity.locationAddress}
					</Wrapper>
					<Description>
						{charity.descriptionLong &&
						charity.descriptionLong !== ''
							? charity.descriptionLong
							: charity.description}
					</Description>
				</DetailInfo>
			</DetailCard>

			<LinkCard>
				{showAddedMsg && (
					<div>This charity is added to your Favorites!</div>
				)}
				{inFav ? (
					<LinkBtn $added={true} onClick={handleRemoveFromFav}>
						Remove from Favorites
					</LinkBtn>
				) : (
					<LinkBtn $added={false} onClick={handleAddToFav}>
						Add to Favorites
					</LinkBtn>
				)}
				<Link to={charity.profileUrl} target="blank">
					<LinkBtn $primary={true}>Check it out on Every.org</LinkBtn>
				</Link>
				Tags:
				<Tags>
					{tags.map(({ id, tagName }) => (
						<Link to={`/search/${tagName}`} key={id}>
							<TagBtn key={id}>{tagName}</TagBtn>
						</Link>
					))}
				</Tags>
			</LinkCard>
		</Container>
	);
};

export default CharityDetail;
