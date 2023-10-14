import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Search from './Search';
import thumbsUpImg from '../assets/thumbs-up.png';

const Banner = tw.div`
    flex flex-col md:flex-row justify-around items-center
	gap-4
    w-full
	px-4 py-6
	bg-amber-950
`;

const Wrapper = tw.div`
	flex flex-row items-center
	gap-2
`;

const Name = tw.div`
	text-2xl font-bold font-[monospace]
	text-white
`;

const IconImg = tw.img`
	w-[48px] h-[48px]
`;

const Header = () => {
	return (
		<Banner>
			<Link to="/">
				<Wrapper>
					<IconImg src="/icon.png" />
					<Name>Charity Finder</Name>
				</Wrapper>
			</Link>
			<Search />
			<Link to="/favorites">
				<IconImg src={thumbsUpImg} />
			</Link>
		</Banner>
	);
};

export default Header;
