import tw from 'tailwind-styled-components';

export const Main = tw.main`
	flex flex-col items-center
    mb-10
`;

export const Container = tw.div`
    w-full
	sm:max-w-xl md:max-w-3xl lg:max-w-4xl
    p-6
`;

export const Title = tw.h1`
	text-2xl font-bold
	mt-4 mb-8
`;

export const LoadingMsg = tw.div`
    text-center font-[monospace] text-gray-700 font-semibold
    m-4
`;

export const Msg = tw.div`
    text-center text-md font-[monospace] text-gray-700 font-semibold
    mx-4 my-2
`;
