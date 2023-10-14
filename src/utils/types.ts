export type Charity = {
	description?: string;
	ein: string;
	name: string;
	profileUrl: string;
	logoUrl?: string;
	coverImageUrl?: string;
	logoCloudinaryId?: string;
	matchedTerms: string[];
	slug: string;
	location: string;
	tags: string[];
};

export type CharityDetail = {
	id: string;
	name: string;
	isDisbursable: true;
	locationAddress: string;
	ein: string;
	description: string;
	descriptionLong: string;
	primarySlug: string;
	logoCloudinaryId: string;
	coverImageCloudinaryId: string;
	directDisbursement: true;
	websiteUrl: string;
	logoUrl: string;
	coverImageUrl: string;
	profileUrl: string;
};

export type Tag = {
	id: string;
	tagName: string;
	causeCategory: string;
	title: string;
	tagImageCloudinaryId: string;
	tagUrl: string;
	tagImageUrl: string;
};
