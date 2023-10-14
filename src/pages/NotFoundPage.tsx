import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';
import { Container, Main, Msg } from '../styles/styledComponents';

const Wrapper = tw.div`
	flex flex-row
	w-full
`;

const HomeBtn = tw.button`
	w-full max-w-sm
	p-2 my-6 mx-auto
	rounded
	bg-amber-950 hover:bg-amber-900 
	text-white
`;

const NotFoundPage = () => {
	return (
		<>
			<Header />
			<Main>
				<Container>
					<Msg>Somethings Wrong...</Msg>
					<Link to="/">
						<Wrapper>
							<HomeBtn>Back to Home</HomeBtn>
						</Wrapper>
					</Link>
				</Container>
			</Main>
		</>
	);
};

export default NotFoundPage;
