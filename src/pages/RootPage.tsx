import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Main } from '../styles/styledComponents';

const RootPage = () => {
	return (
		<div>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
};

export default RootPage;
