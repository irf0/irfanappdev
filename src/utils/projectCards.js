export const projectCards = [
  {
    id: 1,
    title: "Akbar's Darbar App",
    isMobileApp: true,
    shortDesc: "Custom Food delivery app for a restaurant.",
    imageURL: "/Logos/akbarsdarbarlogo.png",
    overview:
      "Akbar's Darbar is a mobile app developed for a popular restaurant to streamline their online ordering process. The app allows users to browse the menu, place orders, and receive real-time updates on their orders.",

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

    problem: [
      "Reliance on phone orders led to frequent errors.",
      "Delays in order processing affected customer satisfaction.",
      "Lack of an efficient online ordering system hampered sales growth.",
    ],
    solution: [
      "Developed a user-friendly mobile app for easy menu browsing and ordering.",
      "Implemented secure payment methods for a smooth transaction process.",
      "Added real-time notifications to keep customers updated on their orders.",
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
    result: [
      "The app received 300+ downloads within the first month.",
      "Online orders increased by 30%, reducing errors by 60%.",
      "100k+ INR of revenue within first 2 months of launch.",
      "Significant boost in sales and smoother operations for the restaurant.",
    ],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.irfandarbar24.Darbar&hl=en",
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

    problem: [
      "Manual order management was time-consuming and prone to errors.",
      "Lack of real-time order tracking led to delays in order processing.",
      "Difficulty in managing inventory, especially during peak hours.",
    ],
    solution: [
      "Created an intuitive dashboard for order tracking and status updates.",
      "Integrated real-time order notifications for efficient processing.",
      "Implemented inventory management features to help staff manage stock levels easily.",
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
    result: [
      "Improved order processing speed, reducing delays by 50%.",
      "Enhanced accuracy in order tracking and reduced manual errors.",
      "Increased efficiency in stock management during busy hours.",
      "Contributed to an overall boost in customer satisfaction.",
    ],
  },
];
