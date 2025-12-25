export const projectCards = [
  {
    id: 1,
    title: "Akbar's Darbar App",
    isMobileApp: true,
    shortDesc: "Custom Food delivery app for a restaurant.",
    imageURL: "/Logos/akbarsdarbarlogo.png",
    overview:
      "Akbar's Darbar is a mobile app developed for a popular restaurant to streamline their online ordering process. The app allows users to browse the menu, place orders, and receive real-time updates on their orders.",

    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.irfandarbar24.Darbar&hl=en",

    screenshots: [
      "/Screenshots/ad8.jpg",
      "/Screenshots/ad7.jpg",
      "/Screenshots/ad6.jpg",
      "/Screenshots/ad5.jpg",
      "/Screenshots/ad4.jpg",
      "/Screenshots/ad3.jpg",
      "/Screenshots/ad2.jpg",
      "/Screenshots/ad1.jpg",
    ],

    challenges: [
      "Reliance on phone orders led to frequent errors.",
      "Delays in order processing affected customer satisfaction.",
      "Lack of an efficient online ordering system hampered sales growth.",
    ],
    solution: [
      "Developed a user-friendly mobile app for easy menu browsing and ordering.",
      "Implemented secure payment methods for a smooth transaction process.",
      "Added real-time notifications to keep customers updated on their orders.",
    ],
    myRole: [
      "Designed the entire UI/UX",
      "Implemented all features end-to-end",
      "Integrated Firebase backend and payment flow",
      "Handled testing and Play Store deployment"
    ],
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Firebase Authentication",
      "Firebase Cloud Messaging (FCM)",
      "Razorpay Payment Gateway",
      "Github",
      "Google Cloud",
    ],
    impact: [
      "The app received 500+ downloads within the first month.",
      "Online orders increased by 40%, reducing errors by 60%.",
      "100k+ INR of revenue within first 2 months of launch.",
      "Significant boost in sales and smoother operations for the restaurant.",
    ],
  },

  {
    id: 2,
    title: "Akbar's Darbar Admin Panel",
    shortDesc: "Comprehensive admin panel for restaurant order management.",
    imageURL: "/Screenshots/adminss1.png",
    overview:
      "The Akbar's Darbar Admin Panel is a web-based tool developed to give restaurant staff full control over order management, inventory, and customer service. It enables real-time monitoring and updates on orders, helping the restaurant operate more efficiently.",

    screenshots: [
      "/Screenshots/adminss4.png",
      "/Screenshots/adminss3.png",
      "/Screenshots/adminss2.png",
      "/Screenshots/adminss1.png",
    ],

    challenges: [
      "Manual order management was time-consuming and prone to errors.",
      "Lack of real-time order tracking led to delays in order processing.",
      "Difficulty in managing inventory, especially during peak hours.",
    ],
    solution: [
      "Created an intuitive dashboard for order tracking and status updates.",
      "Integrated real-time order notifications for efficient processing.",
      "Implemented inventory management features to help staff manage stock levels easily.",
    ],
    myRole: [
      "Developed frontend components and Firebase integration",
      "Implemented real-time order tracking and notification system",
      "Designed data structure in Firestore for efficient querying"
    ],
    technologies: [
      "ReactJS",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging (FCM)",
      "Github",
      "Google Cloud",
    ],
    impact: [
      "Improved order processing speed, reducing delays by 50%.",
      "Enhanced accuracy in order tracking and reduced manual errors.",
      "Increased efficiency in stock management during busy hours.",
      "Contributed to an overall boost in customer satisfaction.",
    ],
  },

  {
    id: 3,
    title: "Falaah — Islamic Super App",
    isMobileApp: true,
    shortDesc: "Prayer, Quran, Duas and Social Community — all in one.",
    imageURL: "/Logos/falaahlogo.png",
    overview:
      "Falaah is a unified Islamic app integrating Quran reading, prayer timings, duas, Qibla direction, and a spiritual community with real-time chat. Built with scalability and a clear business roadmap including ethical monetization.",

    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.falaah.app2&pcampaignid=web_share",

    screenshots: [
      "/Screenshots/fa1.jpg",
      "/Screenshots/fa2.jpg",
      "/Screenshots/fa3.jpg",
      "/Screenshots/fa4.jpg",
      "/Screenshots/fa5.jpg",
      "/Screenshots/fa6.jpg",
      "/Screenshots/fa7.jpg",
      "/Screenshots/fa8.jpg",
      "/Screenshots/fa9.jpg",
      "/Screenshots/fa10.jpg",
      "/Screenshots/fa11.jpg",
      "/Screenshots/fa12.jpg",
      "/Screenshots/fa13.jpg",
      "/Screenshots/fa14.jpg",
      "/Screenshots/fa15.jpg",
      "/Screenshots/fa16.jpg",


    ],

    challenges: [
      "Existing Islamic apps do not combine spiritual features with real-time social engagement.",
      "Prayer timings and masjid information are not personalized to the user's location.",
      "No habit-building system for Quran/Dua progress tracking.",
    ],

    solution: [
      "Prayer timings using AlAdhan API with countdown to next Salah.",
      "Nearby masjids using Google Places API with one-tap directions.",
      "Quran reading with chapter/verse progress tracking per user.",
      "Interactive dua recitation progress with visual tracking.",
      "Instagram-style feed with likes, comments and follow system.",
      "Real-time DM chat using Firestore listeners for instant updates.",
      "Community-driven Jamaat timings editable by users.",
    ],

    myRole: [
      "Architected the app and built entire codebase in React Native (solo).",
      "Implemented Firebase Auth, Firestore & Storage with secure rules.",
      "Integrated chat, notifications, pagination & performance optimizations.",
      "Implemented AlAdhan, Google Maps/Location APIs & Qibla compass.",
      "Managed testing, deployment and user onboarding in closed testing.",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
      "Google Location API",
      "Google Maps Places API",
      "AlAdhan API",
      "Github",
    ],

    impact: [
      "100+ early users onboarded during closed testing with high engagement.",
      "Prayer reminders and dua progress gamification improved retention.",
      "Unique social + spiritual ecosystem supporting community growth.",
      "Investor discussions underway for initial funding (25L INR) to scale.",
      "Future monetization with modesty-filtered ad ecosystem aligned with Islamic values.",
    ],
  },

];
