import axios from 'axios';
import { EVERY_API_KEY, EVERY_ENDPOINT } from '../utils/constants';
import { Charity, CharityDetail, Tag } from '../utils/types';

interface NonprofitsResponse {
	nonprofits: Charity[];
}

interface NonprofitResponse {
	data: {
		nonprofit: CharityDetail;
		nonprofitTags: Tag[];
	};
}

export const searchNonprofits = async (searchTerm: string) => {
	try {
		const res = await axios<NonprofitsResponse>({
			method: 'get',
			baseURL: EVERY_ENDPOINT,
			url: `/search/${encodeURIComponent(
				searchTerm
			)}?apiKey=${EVERY_API_KEY}`,
		});

		return res.data;
	} catch (ex) {
		return {
			nonprofits: [],
		};
	}
};

export const getNonprofit = async (identifier: string) => {
	const res = await axios<NonprofitResponse>({
		method: 'get',
		baseURL: EVERY_ENDPOINT,
		url: `/nonprofit/${encodeURIComponent(
			identifier
		)}?apiKey=${EVERY_API_KEY}`,
	});

	return res.data;
};
