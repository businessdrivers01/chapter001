
interface MarketingPackage {
    name: string;
    overview: string;
    components?: {
        socialMediaManagement?: string[];
        websiteManagement?: string[];
        paidAdvertising?: string[];
        contentCreation?: string[];
        influencerMarketing?: string[];
        videoProduction?: string[];
        prAndCommunications?: string[];
        reputationManagement?: string[];
        leadGeneration?: string[];
        youtubePublication?: string[];
        productionAndEditing?: string[];
        unlimitedQuerySupport?: string[];
        emailMarketing?: string[];
        seoOptimization?: string[];
        foodpandaIntegration?: string[];
        [key: string]: string[] | undefined;
    };
    pricing?: {
        onboardingCharges?: string;
        commission?: string;
        basicPackage?: {
            price: string;
            includes: string[];
            digitalMarketing?: string[];
            contentCreation?: string[];
            seoOptimization?: string[];
            minimumAdSpend?: string;
            benefits?: string[];
        };
        premiumPackage?: {
            price: string;
            includes: string[];
            digitalMarketing?: string[];
            contentCreation?: string[];
            seoOptimization?: string[];
            reputationManagement?: string[];
            minimumAdSpend?: string;
            benefits?: string[];
        };
        elitePackage?: {
            price: string;
            includes: string[];
            digitalMarketing?: string[];
            contentCreation?: string[];
            seoOptimization?: string[];
            reputationManagement?: string[];
            videoProduction?: string[];
            minimumAdSpend?: string;
            benefits?: string[];
        };
    };
    packageOptions?: {
        [key: string]: {
            digitalMarketing?: string[];
            contentCreation?: string[];
            seoOptimization?: string[];
            reputationManagement?: string[];
            videoProduction?: string[];
            pricing: {
                setupFee?: string;
                monthlyRetainer?: string;
                commission?: string
            };
            minimumAdSpend?: string;
            benefits?: string[];
            [key: string]: any; // Allow dynamic properties
        };
    };
    packageTiers?: {
        [key: string]: {
            price: string;
            includesAllFrom?: string;
            socialMediaManagement?: string[];
            brandShoot?: string[];
            websiteManagement?: string[];
            contentCreation?: string[];
            paidAdvertising?: string[];
            youtubePublication?: string[];
            influencerMarketing?: string[];
            [key: string]: any;
        };
    };
    benefits?: string[];
    performanceGuarantee?: string;
    expectations?: string[];
    timeline?: {
        month1?: string;
        month2to3?: string;
    };
    deliverables?: string[];
    paymentTerms?: string[] | {
        onboardingCharges?: string;
        ongoingCommission?: string;
    };
    cancellationPolicy?: string[] | {
        noticePeriod?: string;
        fee?: string;
    };
    packageDetails?: {
        duration?: string;
        paymentTerms?: string[];
        cancellationPolicy?: string[];
        deliverables?: string[];
    };
    whyChooseUs?: string[];
    callToAction?: string;
    duration?: string;
}








export const marketingPackages: MarketingPackage[] = [


    // 01

    {
        name: "Startup Marketing Package",
        overview: "Our comprehensive marketing package is designed to help startups establish a strong online presence, increase brand awareness, drive sales, and attract new customers.",
        components: {
            socialMediaManagement: [
                "Creation and optimization of social media profiles (Facebook, Instagram, LinkedIn)",
                "Content creation and posting (7 posts per week)",
                "Instagram Reels creation and publishing (3 Reels per month)",
                "Engagement and response management",
                "Monthly analytics report"
            ],
            websiteManagement: [
                "Website design and development (if needed)",
                "Website updates and maintenance",
                "Search Engine Optimization (SEO)",
                "Monthly analytics report"
            ],
            paidAdvertising: [
                "Google Ads campaign creation and management",
                "Facebook and Instagram ads campaign creation and management",
                "Ad copywriting and design",
                "Monthly ad spend management (PKR 60,000)",
                "Monthly analytics report"
            ],
            contentCreation: [
                "Blog post writing (4 posts per month)",
                "Email newsletter creation and sending (2 newsletters per month)",
                "Video content creation (1 video per month)"
            ],
            influencerMarketing: [
                "Identification and partnership with influencers in your industry",
                "Influencer content creation and publishing"
            ],
            videoProduction: [
                "Professional video production for your startup",
                "Video editing and publishing"
            ],
            prAndCommunications: [
                "Press release writing and distribution",
                "Media outreach and relations"
            ],
            reputationManagement: [
                "Online review management",
                "Social media monitoring and response",
                "Reputation analysis and reporting"
            ]
        },
        pricing: {
            onboardingCharges: "PKR 250,000 (for 3 months)",
            commission: "10% of sales profit"
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Drive website traffic and generate leads",
            "Boost sales and revenue",
            "Establish thought leadership in your industry",
            "Improve online reputation and customer engagement"
        ],
        performanceGuarantee: "We guarantee a minimum 2.75x return on investment (ROI) in 3 months. If we don't meet this guarantee, we'll work with you to adjust our strategy and ensure your desired results.",
        expectations: [
            "A dedicated account manager will be assigned to your account",
            "Regular progress updates and reporting",
            "Collaboration with our team of experts to ensure your marketing goals are met"
        ],
        timeline: {
            month1: "Onboarding, social media setup, and content creation",
            month2to3: "Paid advertising, influencer marketing, and video production"
        },
        deliverables: [
            "Monthly analytics reports",
            "Quarterly progress reports",
            "Final report at the end of the 3-month period"
        ],
        paymentTerms: {
            onboardingCharges: "PKR 250,000 (due upon signing of agreement)",
            ongoingCommission: "10% of sales profit (due monthly)"
        },
        cancellationPolicy: {
            noticePeriod: "30-day notice required for cancellation",
            fee: "PKR 50,000"
        },
        callToAction: "Contact us to learn more about our marketing package and to schedule a consultation with our marketing expert."
    },


    // 02

    {
        name: "E-commerce Marketing Package",
        overview: "Our comprehensive e-commerce marketing package is designed to help online stores increase brand awareness, drive website traffic, boost sales, and improve customer engagement. Our team of experts will work closely with you to develop a customized marketing strategy that meets your specific needs and goals.",
        components: {
            socialMediaManagement: [
                "Creation and optimization of social media profiles (Facebook, Instagram, LinkedIn)",
                "Content creation and posting (7 posts per week)",
                "Instagram Reels creation and publishing (3 Reels per month)",
                "Engagement and response management",
                "Monthly analytics report"
            ],
            influencerMarketing: [
                "Identification and partnership with influencers in your industry",
                "Influencer content creation and publishing",
                "Influencer relationship management"
            ],
            paidAdvertising: [
                "Google Ads campaign creation and management",
                "Facebook and Instagram ads campaign creation and management",
                "Ad copywriting and design",
                "Monthly ad spend management (PKR minimum 150,000)",
                "Monthly analytics report"
            ],
            emailMarketing: [
                "Email newsletter creation and sending (2 newsletters per month)",
                "Email list management and growth",
                "Email automation setup"
            ],
            contentCreation: [
                "Blog post writing (4 posts per month)",
                "Product description writing and optimization",
                "Product photography and editing"
            ],
            seoOptimization: [
                "Website SEO audit and optimization",
                "Keyword research and implementation",
                "Monthly SEO report",
                "Technical SEO implementation"
            ],
            videoProduction: [
                "Professional video production for your e-commerce brand",
                "Video editing and publishing",
                "Video marketing strategy development"
            ],
            reputationManagement: [
                "Online review management",
                "Social media monitoring and response",
                "Reputation analysis and reporting"
            ]
        },
        pricing: {
            onboardingCharges: "PKR 200,000 (for 3 months)",
            commission: "10% of sales profit"
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Drive website traffic and generate leads",
            "Boost sales and revenue",
            "Establish thought leadership in your industry",
            "Improve online reputation and customer engagement"
        ],
        performanceGuarantee: "We guarantee a minimum 3x return on investment (ROI) in 3 months. If we don't meet this guarantee, we'll work with you to adjust our strategy and ensure your desired results.",
        expectations: [
            "A dedicated account manager will be assigned to your account",
            "Regular progress updates and reporting",
            "Collaboration with our team of experts to ensure your marketing goals are met"
        ],
        timeline: {
            month1: "Onboarding, social media setup, and content creation",
            month2to3: "Paid advertising, influencer marketing, and video production"
        },
        deliverables: [
            "Monthly analytics reports",
            "Quarterly progress reports",
            "Final report at the end of the 3-month period"
        ],
        paymentTerms: {
            onboardingCharges: "PKR 200,000 (due upon signing of agreement)",
            ongoingCommission: "10% of sales profit (due monthly)"
        },
        cancellationPolicy: {
            noticePeriod: "30-day notice required for cancellation",
            fee: "PKR 50,000"
        },
        callToAction: "Contact us to learn more about our marketing package and to schedule a consultation with our marketing expert."
    },


    // 03
    {
        name: "Real Estate Marketing Pro",
        overview: "Our comprehensive marketing package is designed to help real estate businesses establish a strong online presence, increase brand awareness, drive sales, and generate leads. Our team of experts will manage all aspects of your online marketing.",
        components: {
            socialMediaManagement: [
                "Creation and optimization of social media profiles (Facebook, Instagram)",
                "Content creation and posting (3 posts per week)",
                "Engagement and response management",
                "Monthly analytics report"
            ],
            websiteManagement: [
                "Website design and development (if needed)",
                "Website updates and maintenance",
                "Search Engine Optimization (SEO)",
                "Monthly analytics report"
            ],
            paidAdvertising: [
                "Google Ads campaign creation and management",
                "Facebook and Instagram ads campaign creation and management",
                "Ad copywriting and design",
                "Monthly ad spend management",
                "Monthly analytics report"
            ],
            contentCreation: [
                "Blog post writing (2 posts per month)",
                "Email newsletter creation and sending (1 newsletter per month)"
            ],
            leadGeneration: [
                "Lead generation campaign creation and management",
                "Lead capture form creation and integration",
                "Lead nurturing email sequence creation"
            ],
            youtubePublication: [
                "YouTube channel creation and optimization",
                "Video content creation (2-4 video per month)",
                "Video editing and publishing"
            ],
            productionAndEditing: [
                "Professional video production for listings, testimonials, and company promotions",
                "Editing and post-production services"
            ],
            reputationManagement: [
                "Online review management",
                "Social media monitoring and response",
                "Reputation analysis and reporting"
            ],
            unlimitedQuerySupport: [
                "Unlimited query support via phone, email, or chat",
                "Minimum 1 deal closure guarantee"
            ]
        },
        pricing: {
            basicPackage: {
                price: "PKR 175,000/month",
                includes: [
                    "Social media management",
                    "Website management",
                    "Paid advertising (PKR 25,000 ad spend)",
                    "Content creation (blog posts, email newsletters)",
                    "Lead generation",
                    "YouTube publication (2 video per month)"
                ]
            },
            premiumPackage: {
                price: "PKR 250,000/month",
                includes: [
                    "Social media management",
                    "Website management",
                    "Paid advertising (PKR 50,000 ad spend)",
                    "Content creation (blog posts, email newsletters)",
                    "Lead generation",
                    "YouTube publication (3 videos per month)",
                    "Production and editing (3 videos per month)"
                ]
            },
            elitePackage: {
                price: "PKR 325,000/month",
                includes: [
                    "Social media management",
                    "Website management",
                    "Paid advertising (PKR 75,000 ad spend)",
                    "Content creation (blog posts, email newsletters)",
                    "Lead generation",
                    "YouTube publication (4 videos per month)",
                    "Production and editing (4 videos per month)",
                    "Unlimited query support with minimum 1 deal closure guarantee"
                ]
            }
        },
        benefits: [
            "Increase online visibility and brand awareness",
            "Drive website traffic and generate leads",
            "Boost sales and revenue",
            "Establish thought leadership in your industry",
            "Improve online reputation and customer engagement"
        ],
        expectations: [
            "A dedicated account manager will be assigned to your account",
            "Regular progress updates and reporting",
            "Collaboration with our team of experts to ensure your marketing goals are met"
        ],
        callToAction: "Contact us to learn more about our marketing package and to schedule a consultation with our marketing expert."
    },


    // 04
    {
        name: "Comprehensive Marketing Package for all",
        overview: "Our comprehensive marketing package is designed to provide businesses with a holistic approach to their marketing efforts. This package includes the essential elements of digital marketing, content creation, and reputation management to help businesses establish a strong online presence, drive sales, and attract new customers.",
        packageOptions: {
            basicPackage: {
                digitalMarketing: [
                    "Social media management",
                    "Content creation and posting",
                    "Email marketing"
                ],
                contentCreation: [
                    "Blog post writing",
                    "Product description writing and optimization"
                ],
                seoOptimization: [
                    "Website SEO audit and optimization",
                    "Keyword research and implementation",
                    "Monthly SEO report"
                ],
                pricing: {
                    setupFee: "PKR 100,000 (one-time onboarding charges)",
                    monthlyRetainer: "PKR 30,000 (monthly retainer fee)"
                },
                minimumAdSpend: "PKR 50,000 per month",
                benefits: [
                    "Increase online visibility and brand awareness",
                    "Drive website traffic and generate leads",
                    "Improve online reputation and customer engagement"
                ]
            },
            premiumPackage: {
                digitalMarketing: [
                    "Social media management",
                    "Content creation and posting",
                    "Paid advertising",
                    "Email marketing"
                ],
                contentCreation: [
                    "Blog post writing",
                    "Product description writing and optimization",
                    "Video content creation",
                    "Infographic creation"
                ],
                seoOptimization: [
                    "Website SEO audit and optimization",
                    "Keyword research and implementation",
                    "Monthly SEO report",
                    "Technical SEO implementation",
                    "Link building and outreach"
                ],
                reputationManagement: [
                    "Online review management",
                    "Social media monitoring and response",
                    "Reputation analysis and reporting",
                    "Crisis management and communication"
                ],
                pricing: {
                    setupFee: "PKR 250,000 (one-time onboarding charges)",
                    monthlyRetainer: "PKR 75,000 (monthly retainer fee)"
                },
                minimumAdSpend: "PKR 100,000 per month",
                benefits: [
                    "Increase online visibility and brand awareness",
                    "Drive website traffic and generate leads",
                    "Boost sales and revenue",
                    "Establish thought leadership in your industry",
                    "Improve online reputation and customer engagement"
                ]
            },
            elitePackage: {
                digitalMarketing: [
                    "Social media management",
                    "Content creation and posting",
                    "Paid advertising",
                    "Email marketing"
                ],
                contentCreation: [
                    "Blog post writing",
                    "Product description writing and optimization",
                    "Video content creation",
                    "Infographic creation",
                    "Podcast creation"
                ],
                seoOptimization: [
                    "Website SEO audit and optimization",
                    "Keyword research and implementation",
                    "Monthly SEO report",
                    "Technical SEO implementation",
                    "Link building and outreach",
                    "SEO audit report"
                ],
                reputationManagement: [
                    "Online review management",
                    "Social media monitoring and response",
                    "Reputation analysis and reporting",
                    "Crisis management and communication",
                    "Reputation management report"
                ],
                videoProduction: [
                    "Professional video production",
                    "Video editing and publishing",
                    "Video marketing strategy development"
                ],
                pricing: {
                    setupFee: "PKR 500,000 (one-time onboarding charges)",
                    monthlyRetainer: "PKR 150,000 (monthly retainer fee)"
                },
                minimumAdSpend: "PKR 150,000 per month",
                benefits: [
                    "Increase online visibility and brand awareness",
                    "Drive website traffic and generate leads",
                    "Boost sales and revenue",
                    "Establish thought leadership in your industry",
                    "Improve online reputation and customer engagement",
                    "Develop a comprehensive video marketing strategy"
                ]
            }
        },
        packageDetails: {
            duration: "3 months",
            paymentTerms: [
                "One-time onboarding charges due upon signing of agreement",
                "Monthly retainer fee due on the 1st of each month"
            ],
            cancellationPolicy: [
                "30-day notice required for cancellation",
                "Cancellation fee applies"
            ],
            deliverables: [
                "Monthly analytics reports",
                "Quarterly progress reports",
                "Final report at the end of the package duration",
                "Monthly content calendar",
                "SEO audit report",
                "Reputation management report"
            ]
        },
        performanceGuarantee: "We guarantee a minimum 3x return on investment (ROI) in 3 months. If we don't meet this guarantee, we'll work with you to adjust our strategy and ensure your desired results.",
        expectations: [
            "A dedicated account manager will be assigned to your account",
            "Regular progress updates and reporting",
            "Collaboration with our team of experts to ensure your marketing goals are met"
        ]
    },


    // 05

    {
        name: "Sales Management Package",
        overview: "Our sales management package is designed to help businesses optimize their sales processes, improve sales performance, and increase revenue. Our team of experts will work closely with you to develop a customized sales strategy that meets your specific needs and goals.",
        packageOptions: {
            basicPackage: {
                pricing: {
                    setupFee: "PKR 150,000 (one-time setup fee)",
                    commission: "10% of sales profit (ongoing commission)"
                },
                duration: "3 months",
                performanceGuarantee: "2x return on investment (ROI)",
                components: [
                    "Sales strategy development",
                    "Sales process optimization",
                    "Sales team training",
                    "Sales performance monitoring",
                    "Sales technology implementation"
                ]
            },
            premiumPackage: {
                pricing: {
                    setupFee: "PKR 225,000 (one-time setup fee)",
                    commission: "16% of sales profit (ongoing commission)"
                },
                duration: "3 months",
                performanceGuarantee: "3.5x return on investment (ROI)",
                components: [
                    "Sales strategy development",
                    "Sales process optimization",
                    "Sales team training",
                    "Sales performance monitoring",
                    "Sales technology implementation",
                    "Advanced sales analytics and reporting",
                    "Quarterly business review and strategy session"
                ]
            },
            elitePackage: {
                pricing: {
                    setupFee: "PKR 300,000 (one-time setup fee)",
                    commission: "19% of sales profit (ongoing commission)"
                },
                duration: "3 months",
                performanceGuarantee: "6x return on investment (ROI)",
                components: [
                    "Sales strategy development",
                    "Sales process optimization",
                    "Sales team training",
                    "Sales performance monitoring",
                    "Sales technology implementation",
                    "Advanced sales analytics and reporting",
                    "Quarterly business review and strategy session",
                    "Dedicated sales coach for the duration of the package"
                ]
            }
        },
        benefits: [
            "Improved sales performance and revenue growth",
            "Optimized sales process and increased efficiency",
            "Enhanced customer engagement and satisfaction",
            "Data-driven decision making and improved sales forecasting",
            "Increased sales team productivity and morale"
        ],
        paymentTerms: [
            "One-time setup fee due upon signing of agreement",
            "Ongoing commission due monthly, based on sales profit"
        ],
        cancellationPolicy: [
            "30-day notice required for cancellation",
            "Cancellation fee applies"
        ],
        expectations: [
            "A dedicated account manager will be assigned to your account",
            "Regular progress updates and reporting",
            "Collaboration with our team of experts to ensure your sales goals are met"
        ]
    },


    // 06

    {
        name: "Restaurant Marketing Package pro",
        overview: "Our comprehensive marketing package is designed to help restaurants in Pakistan establish a strong online presence, increase brand awareness, drive sales, and attract new customers.",
        packageDetails: {
            duration: "30 days",
            paymentTerms: ["100% payment in advance"]
        },
        packageTiers: {
            basicPackage: {
                price: "PKR 125,000",
                socialMediaManagement: [
                    "Creation and optimization of social media profiles (Facebook, Instagram)",
                    "Content creation and posting (4 posts per week)",
                    "2 Instagram Reels per month",
                    "Engagement and response management",
                    "Monthly analytics report"
                ],
                brandShoot: [
                    "1 photoshoot per month (including 10 edited photos)"
                ],
                websiteManagement: [
                    "Website design and development (if needed)",
                    "Website updates and maintenance",
                    "Search Engine Optimization (SEO)",
                    "Monthly analytics report"
                ],
                contentCreation: [
                    "Blog post writing (2 posts per month)",
                    "Email newsletter creation and sending (1 newsletter per month)"
                ],
                foodpandaIntegration: [
                    "Integration with Foodpanda",
                    "Menu setup and management",
                    "Order management and tracking"
                ],
                reputationManagement: [
                    "Online review management",
                    "Social media monitoring and response",
                    "Reputation analysis and reporting"
                ]
            },
            premiumPackage: {
                price: "PKR 200,000",
                includesAllFrom: "Basic Package",
                socialMediaManagement: [
                    "5 posts per week",
                    "3 Instagram Reels per month"
                ],
                brandShoot: [
                    "2 photoshoots per month (including 20 edited photos)"
                ],
                paidAdvertising: [
                    "Google Ads campaign creation and management",
                    "Facebook and Instagram ads campaign creation and management",
                    "Ad copywriting and design",
                    "Monthly ad spend management (PKR 50,000)",
                    "Monthly analytics report"
                ]
            },
            elitePackage: {
                price: "PKR 275,000",
                includesAllFrom: "Premium Package",
                socialMediaManagement: [
                    "7 posts per week",
                    "4 Instagram Reels per month"
                ],
                brandShoot: [
                    "1 photoshoot per week (including 40 edited photos)"
                ],
                paidAdvertising: [
                    "Monthly ad spend management (PKR 75,000)"
                ],
                youtubePublication: [
                    "YouTube channel creation and optimization",
                    "Video content creation (1 video per month)",
                    "Video editing and publishing"
                ],
                influencerMarketing: [
                    "Identification and partnership with influencers in the food industry",
                    "Influencer content creation and publishing"
                ]
            }
        },
        whyChooseUs: [
            "Expert team with years of experience in restaurant marketing",
            "Proven track record of success",
            "Customized approach to meet your specific needs",
            "Cost-effective solution for your marketing needs"
        ],
        callToAction: "Contact us to learn more about our marketing package and to schedule a consultation with our marketing expert."
    },


    // Add remaining objects here following the same structure
]


export default marketingPackages;
