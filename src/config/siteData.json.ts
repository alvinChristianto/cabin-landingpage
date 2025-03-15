export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "The Cabin Hotel Lovina",
	// Your website's title and description (meta fields)
	title: "The Cabin Hotel Lovina",
	description:
		"The Cabin Hotel Lovina Bali with spacious room, clean and affordable price",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "the cabin hotel lovina",
		email: "info@thecabinhotelgroup.com",
		twitter: "the cabin hotel lovina",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "the cabin hotel lovina",
	},
};

export default siteData;
