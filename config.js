/**
 * Forever Us - Global Configuration
 * Edit these values to personalize the website.
 */
const CONFIG = {
  // Global Details
  boyfriendName: "Onkyy",
  girlfriendName: "Me",
  
  // Date format: YYYY-MM-DDTHH:mm:ss
  relationshipStartDate: "2025-05-10T00:00:00",
  
  // Secret Gallery Password
  secretPassword: "lakshmi", // Make sure this is lowercase

  // Page-specific Music (Add a path to a local audio file or external URL)
  pageMusic: {
    "index.html": "assets/music/sub_clair-happy-birthday-578363.mp3", // Home page birthday song
    "journey.html": "assets/music/fleetwood-mac-everywhere.mp3", // Our Journey - Fleetwood Mac: I Wanna Be With You Everywhere
    "memories.html": "assets/music/fleetwood-mac-everywhere.mp3", // Memories
    "secret.html": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Secret
    "letter.html": "assets/music/Letter.mp3" // Birthday Letter
  },

  // Optional song segments in seconds. Omit a page to play its full song.
  musicTiming: {  "letter.html": { start: 19, end: 70.2 } },
    // "letter.html": { start: 12, end: 90 }
  
  
  // Default music (fallback if page not found)
  musicSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

  // Page 1: Home
  heroTitle: "Happy Birthday Onkyy ❤️",
  heroSubtitle: "To the one my heart will always choose 🌻.",

  // Page 2: Our Journey
  timelineEvents: [
    {
      date: "May 6, 2025",
      title: "First Talk",
      desc: "Our first conversation will always be one of my most precious memories because that's where our story truly began.✨",
      image: "assets/images/First talk.jpeg"
    },
    {
      date: "June 14, 2025",
      title: "First Date",
      location: "Khamboli Dam, Maharashtra",
      desc: "Our first date, our first bike ride, and the first time we held each other's hands... that's still one of my favorite chapters of us. ❤️",
      image: "assets/images/First date.jpeg"
    },
    {
      date: "August 13, 2025",
      title: "Temple Visit",
      location: "dagdusheth temple, Pune",
      desc: "That day was so simple, yet so special—praying together, wandering through Pune, eating together, and creating memories that will always have a special place in my heart. ❤️🌻",
      image: "assets/images/us.jpeg"
    },
    {
      date: "June 17, 2025",
      title: "First Bye",
      location: "Pune Station, Maharashtra",
      desc: "The hardest part of that beautiful day was watching you leave… it was our first goodbye, and I couldn't stop crying because my heart just didn't want to let you go. ❤️‍🩹.",
      image: "assets/images/trip.jpg"
    }
  ],

  // Page 3: Our Memories (Masonry Gallery)
  galleryPhotos: [
    { url: "assets/images/him.jpg", caption: "The stare👀", date: "Aug 2023" },
    { url: "assets/images/3rd.jpg", caption: "", date: "Sep 2023" },
    { url: "assets/images/just us.jpg", caption: "Just us", date: "Jun 2025" },
    { url: "assets/images/handsome.jpg", caption: "Handsome Boy🥰", date: "Dec 2023" },
    { url: "assets/images/Vc1.jpg", caption: "My Pookiee", date: "Jan 2024" },
    { url: "assets/images/cute.jpg", caption: "My cutuu😚", date: "Oct 2023" },
    { url: "assets/images/chill.jpg", caption: "Best Moments", date: "Nov 2023" },
    { url: "assets/images/bh.jpg", caption: "खादाड 😂", date: "Mar 2024" },
    { url: "assets/images/vc2.jpg", caption: "Looks like baby", date: "Apr 2024" },
    { url: "assets/images/trek.jpg", caption: "Home is wherever we are", date: "May 2024" },
    { url: "assets/images/smile.jpg", caption: "That beautiful smile", date: "Jun 2024" },
    { url: "assets/images/IMG-20250816-WA0028.jpg", caption: "A moment to remember", date: "Aug 2024" },
    { url: "assets/images/hardworking.jpg", caption: "My hardworking man", date: "Sep 2024" },
    { url: "assets/images/hey.jpg", caption: "Good one", date: "May 2025" },
    { url: "assets/images/funny.jpg", caption: "The Funny one", date: "Jun 2025" },
    { url: "assets/images/sun.jpg", caption: "Sunkissed", date: "Jun 2025" }
  ],

  // Page 4: Our Poetry
  poemsByHim: [
    {
      title: "सखे 🌻",
      date: "July 7, 2025",
      content: "माझं तुझं नाही आपलं म्हणून वागशील, \nतुझ्या देवाकडे दररोज मला मागशील. \nखोल काळजात रुतलेले काटे काढशील दुःख भरलेल्या ताटात आनंद वाढशील. \nमाझा म्हणून हक्क गाजवशील, अधिकार आजमावशील \nहाक देशील, हाकेवर धावत येशील.\nनिरोपाला माझ्या सांग सखे तू अश्रू ढाळशील काय ? \nचंद्र ताऱ्यांच काय करू, मला तुझ्या गळ्यात माळशील काय"
    }
  ],
  // Page 5: Secret Gallery (Unlocked via Password)
  secretPhotos: [
    { url: "assets/images/secrete/img.jpeg" },
    { url: "assets/images/secrete/img1.jpeg" },
    { url: "assets/images/secrete/img3.jpeg" },
    { url: "assets/images/secrete/img2.jpeg" }
  ]
,


  // Page 7: Birthday Letter
  birthdayLetter: "Happiest birthday to my love\nToday is your special day, and I wanted to make it even more special with something straight from my heart. So, I wrote this little letter for you, filled with all the feelings, memories, and love that I carry for you. ✨\nमागच्या दोन वर्षांपूर्वी तुमचा birthday पण माहिती नव्हता मला...\nआणि आत्ता इथून पुढे तोच माझा 2nd birthday म्हणून मी दरवर्षी celebrate करणार 😅\n\nतुम्ही तो व्यक्ती आहात... जे मला रडवताना हसवू शकता\nThe way you care about me...\nतुमचं ते बाळा म्हणणं तर माझ्या आयुष्यातला सगळ्यात best part आहे..\nएवढं प्रेम करणारा नवरा भेटायला नशीबच लागत 🥹🫶🏻\n\nतुम्ही आत्तापर्यंत खूप छान लिहिलंय माझ्यासाठी... But I am not that good at this...\n\nतुमच्या सोबतचा प्रत्येक क्षण माझ्यासाठी खास आहे...\nAnd i love to remember small things about us....\n\nIk we are too comfortable with each other...\nBut I still love that awkward conversation on call and at starting i am very shy... मी समोर यायलाही लाजत होते तुमच्या , see us now 😅\n\nतुमचे चिनी सारखे डोळे मला खूप आवडतात....\nLove your messy hair 🩷\nLove your smile most.... \nAnd I love your Ragebaiting (sometimes)\n आत्तापर्यंत आपण खूप सुंदर moments अनुभवले आहेत, पण मला विश्वास आहे की अजून खूप सुंदर गोष्टी आपल्या वाट्याला येणार आहेत. And I want to experience every single one of them with you. ❤️\n \nमी वेडीये तुमच्यासाठी....\nआणि हो आहे मी तुमची वेडी ❤️\nखूप खूप प्रेम माझ्या बाळा....\nAnd once again happiest birthday बबू... 😘\n\nतुमची लक्ष्मी 💕",

  // Random Love Notes for Easter Eggs/Cursor interactions
  loveNotes: [
    "You're my favorite person.",
    "Forever us.",
    "My safe place.",
    "I love your smile.",
    "You make me so happy."
  ]
};
