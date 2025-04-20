import React from 'react';
import { Search, FileText, Share2, DollarSign, Users, Video, ShoppingCart, Smartphone, Globe, Mail } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "SEO",
    description: "Enhance your online visibility with data-driven SEO strategies that drive organic traffic, boost rankings, and increase conversions.",
    icon: <Search className="h-10 w-10" />,
    features: [
      "Comprehensive SEO audits",
      "Keyword research and strategy",
      "On-page and off-page optimization",
      "Technical SEO improvements",
      "Local SEO for businesses"
    ],
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60"
  },
  {
    id: 2,
    title: "Content Writing",
    description: "Engage your audience with SEO-optimized content designed to build authority, foster trust, and drive meaningful customer actions.",
    icon: <FileText className="h-10 w-10" />,
    features: [
      "Blog posts and articles",
      "Website copy",
      "Email newsletters",
      "Whitepapers and ebooks",
      "Social media content"
    ],
    image: "https://images.unsplash.com/photo-1581090700227-1c065c5857f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Content Writing
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Grow your brand presence and connect with your audience through targeted social media strategies, creative content.",
    icon: <Share2 className="h-10 w-10" />,
    features: [
      "Platform strategy and management",
      "Content creation and curation",
      "Community management",
      "Paid social campaigns",
      "Performance analysis"
    ],
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Social Media Marketing
  },
  {
    id: 4,
    title: "Pay Per Click",
    description: "Accelerate your business growth by running high-performing PPC campaigns that drive targeted traffic, generate leads, and maximize ROI.",
    icon: <DollarSign className="h-10 w-10" />,
    features: [
      "Google Ads management",
      "Bing Ads campaigns",
      "Display and remarketing",
      "Shopping campaigns",
      "Budget optimization"
    ],
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Pay Per Click
  },
  {
    id: 5,
    title: "Website Development",
    description: "Create high-performing, user-friendly websites designed to deliver seamless experiences, drive engagement, and support business growth.",
    icon: <Globe className="h-10 w-10" />, // <- assuming you use <Globe> or suitable web icon
    features: [
      "Custom website design",
      "Responsive development",
      "CMS integration (WordPress, etc.)",
      "E-commerce solutions",
      "Website maintenance and support"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Website Development
  },
  {
    id: 6,
    title: "Video Marketing",
    description: "Tell your brand story and engage audiences with professional video content across multiple platforms.",
    icon: <Video className="h-10 w-10" />,
    features: [
      "Video strategy development",
      "Production coordination",
      "YouTube optimization",
      "Video ads management",
      "Social video campaigns"
    ],
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Video Marketing
  },
  {
    id: 7,
    title: "E-commerce Marketing",
    description: "Boost your online store's performance with specialized e-commerce marketing strategies.",
    icon: <ShoppingCart className="h-10 w-10" />,
    features: [
      "Conversion rate optimization",
      "Product listing optimization",
      "Shopping feed management",
      "Amazon marketing",
      "Abandoned cart recovery"
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // E-commerce Marketing
  },
  {
    id: 8,
    title: "Mobile Marketing",
    description: "Reach customers on their devices with targeted mobile marketing strategies and apps.",
    icon: <Smartphone className="h-10 w-10" />,
    features: [
      "Mobile ad campaigns",
      "SMS marketing",
      "Location-based marketing",
      "Mobile user experience",
      "App store optimization"
    ],
    image: "https://images.unsplash.com/photo-1510552776732-01acc9a4c1a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Mobile Marketing
  },
  {
    id: 9,
    title: "Email Marketing",
    description: "Nurture customer relationships and boost conversions with personalized email campaigns that engage, inform, and drive repeat business.",
    icon: <Mail className="h-10 w-10" />, // <- assuming you use <Mail> icon from lucide-react
    features: [
      "Newsletter creation and management",
      "Automated email workflows",
      "Personalized email campaigns",
      "Audience segmentation",
      "Performance tracking and analytics"
    ],
    image: "https://images.unsplash.com/photo-1591696205602-2b6a2c8296b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60", // Email Marketing
  },
  {
    id: 10,
    title: "Influencer Marketing",
    description: "Connect with your target audience through authentic partnerships with relevant influencers.",
    icon: <Users className="h-10 w-10" />,
    features: [
      "Influencer identification",
      "Campaign strategy",
      "Content collaboration",
      "Performance tracking",
      "Relationship management"
    ],
    image: "https://images.unsplash.com/photo-1614850523454-7c350d1745a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=60" // Influencer Marketing
  },
];
