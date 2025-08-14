export const farmPageData = {
  farmSize: "4.5 acres",
  location: "Nashik, MH",
  currentCrops: "Wheat, Tomato",
  cropCalendar: [
    { month: "Jan", active: false },
    { month: "Feb", active: false },
    { month: "Mar", active: true },
    { month: "Apr", active: true },
    { month: "May", active: true },
    { month: "Jun", active: true },
    { month: "Jul", active: false },
    { month: "Aug", active: false },
    { month: "Sep", active: false },
    { month: "Oct", active: false },
    { month: "Nov", active: false },
    { month: "Dec", active: false },
  ],
};

export const communityPageData = {
  nearbyFarmers: 12,
  nearbyFarmersOnline: 3,
  nearbyFarmerRadius: "5km",
  expertConsultations: 5,
  expertConsultationTime: "Tomorrow 2PM",
  recentActivity: [
    {
      id: 1,
      user: "Rajesh Singh",
      action: "shared irrigation tips for wheat crops",
      time: "2 hours ago",
      helpfulCount: 8,
      userInitials: "RS",
    },
    {
      id: 2,
      user: "Dr. Anita Patel",
      action: "answered question about tomato leaf curl",
      time: "5 hours ago",
      helpfulCount: 0,
      userInitials: "AP",
    },
    {
      id: 3,
      user: "Mohan Kumar",
      action: "posted market price update for onions",
      time: "1 day ago",
      helpfulCount: 0,
      userInitials: "MK",
    },
  ],
};

export const weatherPageData = {
  forecast: [
    { day: "Mon", weather: "rainy", temp: "31°C", rain: "0.2mm", icon: "☀️" },
    { day: "Tue", weather: "", temp: "33°C", rain: "—", icon: "🌤️" },
    { day: "Wed", weather: "sunny", temp: "30°C", rain: "1.1mm", icon: "🌦️" },
    { day: "Thu", weather: "", temp: "29°C", rain: "—", icon: "☁️" },
    { day: "Fri", weather: "", temp: "28°C", rain: "2.0mm", icon: "🌧️" },
    { day: "Sat", weather: "sunny", temp: "30°C", rain: "—", icon: "⛅" },
    { day: "Sun", weather: "sunny", temp: "31°C", rain: "—", icon: "☀️" },
  ],
  cropImpact: [
    {
      icon: "🌾",
      crop: "Wheat",
      advice:
        "Irrigate mid-week; avoid afternoon watering. Optimal morning hours: 6-8 AM.",
    },
    {
      icon: "🍅",
      crop: "Tomato",
      advice:
        "Watch for leaf curl after Friday showers. Consider covering young plants.",
    },
  ],
};

export const marketPageData = [
  {
    icon: "🍅",
    name: "Tomato",
    price: 2150,
    change: "+15%",
    location: "Pune",
    priceData: [
      { day: "Mon", price: 2100 },
      { day: "Tue", price: 2180 },
      { day: "Wed", price: 2120 },
      { day: "Thu", price: 2250 },
      { day: "Fri", price: 2300 },
      { day: "Sat", price: 2220 },
      { day: "Sun", price: 2500 },
    ],
  },
  {
    icon: "🌾",
    name: "Wheat",
    price: 2020,
    change: "Stable",
    location: "Nashik",
    priceData: [
      { day: "Mon", price: 2000 },
      { day: "Tue", price: 2020 },
      { day: "Wed", price: 2010 },
      { day: "Thu", price: 2035 },
      { day: "Fri", price: 2040 },
      { day: "Sat", price: 2005 },
      { day: "Sun", price: 2060 },
    ],
  },
  {
    icon: "🧅",
    name: "Onion",
    price: 1850,
    change: "-8%",
    location: "Lasalgaon",
    priceData: [
      { day: "Mon", price: 1800 },
      { day: "Tue", price: 1700 },
      { day: "Wed", price: 1900 },
      { day: "Thu", price: 2050 },
      { day: "Fri", price: 1980 },
      { day: "Sat", price: 1850 },
      { day: "Sun", price: 1950 },
    ],
  },
];

export const knowledgePageData = {
  guides: [
    {
      title: "ICAR Wheat Irrigation Guidelines",
      description:
        "Explainable steps for optimal wheat irrigation based on soil type and climate",
      icon: "📖",
      tags: ["Expert Verified", "2 min read"],
      color: "blue",
    },
    {
      title: "IMD District Forecast Integration",
      description:
        "How to use weather data for precise farm planning and risk management",
      icon: "🌦️",
      tags: ["Updated Weekly", "3 min read"],
      color: "green",
    },
    {
      title: "PM-KISAN & Agricultural Subsidies",
      description:
        "Complete eligibility guide and application timelines for government schemes",
      icon: "🏛️",
      tags: ["Policy Update", "5 min read"],
      color: "purple",
    },
  ],
};

export const financePageData = {
  budgetUsed: 48500,
  totalBudget: 72000,
  expectedReturns: 72000,
  roi: 16,
  governmentSchemes: 3,
  schemesExpiringSoon: 2,
  availableSchemes: [
    {
      icon: "🌾",
      name: "PM-KISAN Direct Benefit",
      description: "₹2,000 installment due Dec 2024",
      status: "Eligible",
    },
    {
      icon: "🚜",
      name: "Equipment Subsidy",
      description: "50% subsidy on farm equipment",
      status: "5 days left",
    },
    {
      icon: "🏦",
      name: "Crop Insurance",
      description: "Weather-based protection",
      status: "Apply Now",
    },
  ],
};

export const notifications = [
  {
    id: "weather-alert",
    icon: "🌧️",
    title: "Weather Alert",
    description:
      "Heavy rain expected tomorrow — plan drainage for tomato fields.",
    time: "2 hours ago",
  },
  {
    id: "market-update",
    icon: "📈",
    title: "Market Update",
    description: "Tomato prices up 15% — good time to sell at Pune market.",
    time: "4 hours ago",
  },
  {
    id: "subsidy-reminder",
    icon: "📋",
    title: "Subsidy Reminder",
    description: "Equipment subsidy deadline in 5 days — submit documents now.",
    time: "1 day ago",
  },
  {
    id: "expert-available",
    icon: "👨‍🌾",
    title: "Expert Available",
    description: "Dr. Sharma has slots open for crop consultation tomorrow.",
    time: "3 days ago",
  },
];

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
  { code: "te", label: "తెలుగు" },
  { code: "ta", label: "தமிழ்" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "ur", label: "اردو" },
  { code: "as", label: "অসমীয়া" },
  { code: "mrj", label: "मराठी (जालना)" },
  { code: "bh", label: "भोजपुरी" },
  { code: "mag", label: "मगही" },
  { code: "mai", label: "मैथिली" },
  { code: "sant", label: "संथाली" },
  { code: "dog", label: "Dogri" },
  { code: "kri", label: "किरात" },
  { code: "sid", label: "सिद्दी" },
  { code: "kho", label: "खोरठा" },
  { code: "raj", label: "राजस्थानी" },
  { code: "swa", label: "स्वाहिली" },
  { code: "twi", label: "Twi" },
  { code: "yor", label: "Yoruba" },
  { code: "zul", label: "Zulu" },
  { code: "afr", label: "Afrikaans" },
  { code: "amh", label: "አማርኛ" },
  { code: "hau", label: "Hausa" },
];
