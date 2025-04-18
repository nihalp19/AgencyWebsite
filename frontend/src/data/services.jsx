import React from 'react';
import { Search, FileText, Share2, DollarSign, Users, Video, ShoppingCart, Smartphone } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "SEO",
    description: "Boost your visibility in search results with our data-driven SEO strategies to drive organic traffic and increase conversions.",
    icon: <Search className="h-10 w-10" />,
    features: [
      "Comprehensive SEO audits",
      "Keyword research and strategy",
      "On-page and off-page optimization",
      "Technical SEO improvements",
      "Local SEO for businesses"
    ]
  },
  {
    id: 2,
    title: "Content Writing",
    description: "Engage your audience with compelling, SEO-optimized content that builds authority and drives action.",
    icon: <FileText className="h-10 w-10" />,
    features: [
      "Blog posts and articles",
      "Website copy",
      "Email newsletters",
      "Whitepapers and ebooks",
      "Social media content"
    ]
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience through strategic social media campaigns.",
    icon: <Share2 className="h-10 w-10" />,
    features: [
      "Platform strategy and management",
      "Content creation and curation",
      "Community management",
      "Paid social campaigns",
      "Performance analysis"
    ]
  },
  {
    id: 4,
    title: "Pay Per Click",
    description: "Drive targeted traffic and maximize ROI with expertly managed PPC campaigns across multiple platforms.",
    icon: <DollarSign className="h-10 w-10" />,
    features: [
      "Google Ads management",
      "Bing Ads campaigns",
      "Display and remarketing",
      "Shopping campaigns",
      "Budget optimization"
    ]
  },
  {
    id: 5,
    title: "Influencer Marketing",
    description: "Connect with your target audience through authentic partnerships with relevant influencers.",
    icon: <Users className="h-10 w-10" />,
    features: [
      "Influencer identification",
      "Campaign strategy",
      "Content collaboration",
      "Performance tracking",
      "Relationship management"
    ]
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
    ]
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
    ]
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
    ]
  }
];
