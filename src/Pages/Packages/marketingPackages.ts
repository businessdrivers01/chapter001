
interface Package {
    name: string;
    overview: string;
    pricing: {
        onboarding?: string;
        commission?: string;
        basic?: string;
        premium?: string;
        elite?: string;
    };
    benefits: string[];
    performanceGuarantee?: string;
};


export const marketingPackages: Package[] = [
    {
        name: "Startup Marketing Package",
        overview:
            "Comprehensive marketing package to help startups establish an online presence, increase brand awareness, drive sales, and attract new customers.",
        pricing: {
            onboarding: "PKR 250,000 (for 3 months)",
            commission: "10% of sales profit",
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Drive website traffic and generate leads",
            "Boost sales and revenue",
            "Establish thought leadership in your industry",
            "Improve online reputation and customer engagement",
        ],
        performanceGuarantee: "2.75x ROI in 3 months",
    },
    {
        name: "E-commerce Marketing Package",
        overview:
            "Designed to help online stores increase brand awareness, drive website traffic, boost sales, and improve customer engagement.",
        pricing: {
            onboarding: "PKR 200,000 (for 3 months)",
            commission: "10% of sales profit",
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Drive website traffic and generate leads",
            "Boost sales and revenue",
            "Improve online reputation and customer engagement",
        ],
        performanceGuarantee: "3x ROI in 3 months",
    },
    {
        name: "Real Estate Marketing Pro",
        overview:
            "Comprehensive marketing package for real estate businesses to establish a strong online presence, increase brand awareness, and generate leads.",
        pricing: {
            basic: "PKR 175,000/month",
            premium: "PKR 250,000/month",
            elite: "PKR 325,000/month",
        },
        benefits: [
            "Expert team with years of experience in real estate marketing",
            "Customized approach to meet your needs",
            "Proven track record of success",
            "Cost-effective solution for marketing",
        ],
    },
    {
        name: "Comprehensive Marketing Package",
        overview:
            "A holistic approach to digital marketing, content creation, and reputation management to help businesses grow.",
        pricing: {
            basic: "PKR 100,000 (one-time) + PKR 30,000/month",
            premium: "PKR 250,000 (one-time) + PKR 75,000/month",
            elite: "PKR 500,000 (one-time) + PKR 150,000/month",
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Boost sales and revenue",
            "Establish thought leadership in your industry",
            "Develop a comprehensive video marketing strategy",
        ],
        performanceGuarantee: "3x ROI in 3 months",
    },
    {
        name: "Sales Management Package",
        overview:
            "Designed to help businesses optimize sales processes, improve performance, and increase revenue.",
        pricing: {
            basic: "PKR 150,000 (one-time) + 10% of sales profit",
            premium: "PKR 225,000 (one-time) + 16% of sales profit",
            elite: "PKR 300,000 (one-time) + 19% of sales profit",
        },
        benefits: [
            "Improved sales performance and revenue growth",
            "Optimized sales process and increased efficiency",
            "Data-driven decision making",
            "Increased sales team productivity",
        ],
        performanceGuarantee: "Up to 6x ROI in 3 months",
    },
    {
        name: "Restaurant Marketing Package Pro",
        overview:
            "Comprehensive marketing package designed to help restaurants establish a strong online presence and attract new customers.",
        pricing: {
            basic: "PKR 125,000/month",
            premium: "PKR 200,000/month",
            elite: "PKR 275,000/month",
        },
        benefits: [
            "Expert team with years of experience in restaurant marketing",
            "Customized approach for your business",
            "Cost-effective solution",
            "Proven track record of success",
        ],
    },
];

export default marketingPackages;
