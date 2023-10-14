import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Msg } from '../styles/styledComponents';
import { causes } from '../data/causes.json';
import searchImg from '../assets/search.svg';

const SearchBar = tw.div`
	w-72 sm:w-96
`;

const Form = tw.form`
	flex flex-row items-center
	relative
`;

const Input = tw.input`
	relative
	grow
	rounded
	w-full
	border-none outline-none
	px-4 py-2
	text-lg
`;

const SearchIcon = tw.img`
	w-[32px] h-[32px]
	absolute right-2
	cursor-pointer
	p-1
	rounded-full
	hover:bg-gray-100
`;

const DropDownContainer = tw.div`
	absolute 
	flex flex-wrap
	gap-2
	w-[inherit] h-fit
	px-4 py-3
	bg-white
	rounded-b
	border-solid border-t border-t-amber-950
	z-10
	drop-shadow-lg
`;

const CauseBtn = tw.div`
	px-3 py-1
	rounded-xl
	hover:bg-amber-600  hover:text-white
	cursor-pointer
`;

const Search = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [filteredCauses, setFilteredCauses] = useState<string[]>(causes);

	const navigate = useNavigate();

	const filterCauses = (searchTerm: string): string[] => {
		const match = searchTerm.split('').join('.*');
		return causes.filter((cause) => {
			return cause.search(match) > -1;
		});
	};

	useEffect(() => {
		setFilteredCauses(filterCauses(searchTerm));
	}, [searchTerm]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setSearchTerm(value);
	};

	const handleOnBlur = () => {
		setShowDropDown(false);
	};

	const handleOnClickCause = (cause: string) => {
		setSearchTerm('');
		setShowDropDown(false);
		navigate(`/search/${cause}`);
	};

	return (
		<SearchBar>
			<Form>
				<Input
					type="text"
					value={searchTerm}
					onChange={handleOnChange}
					onFocus={() => setShowDropDown(true)}
					onBlur={handleOnBlur}
					placeholder="Find charities"
				/>
				<SearchIcon src={searchImg} />
			</Form>
			{showDropDown && searchTerm.length > 0 && (
				<DropDownContainer>
					{filteredCauses.length === 0 && (
						<Msg>Try something else...</Msg>
					)}
					{filteredCauses.map((cause) => (
						<CauseBtn
							key={cause}
							onMouseDown={() => handleOnClickCause(cause)}
						>
							{cause}
						</CauseBtn>
					))}
				</DropDownContainer>
			)}
		</SearchBar>
	);
};

export default Search;
