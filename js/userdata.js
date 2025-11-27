const users = [
  { 
    id: 101,
    name: {
      firstname: "John",
      lastname: "Doe",
      location: "Manila, Philippines",
      age: 25,
      gender: "Male",
      title: "Graphic Designer & Guitar Enthusiast"
    },
    skills: {
      offered: ["Graphic Design", "Photo Editing", "Basic Video Editing"],
      learning: ["Guitar", "Public Speaking"]
    },
    bio: {
      shortBio: "A creative designer passionate about visual storytelling and eager to learn new skills.",
      experience: "3 years in digital design and branding"
    },
    contacts: {
      email: "johndoe@example.com",
      number: "+63 912 345 6789",
      social: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/john1/300",
      backgroundpic: "https://picsum.photos/seed/johnbg1/1200/400"
    },
    socialPosts: {
      textPosts: [
        {
          id: "101-t1",
          content: "Started working on a new poster design today. Feeling inspired!",
          date: "2025-01-10"
        },
        {
          id: "101-t2",
          content: "Nothing beats a quiet night with my guitar and a cup of coffee.",
          date: "2025-01-15"
        },
        {
          id: "101-t3",
          content: "Design isn't just about visuals—it’s about telling a story that connects.",
          date: "2025-01-20"
        }
      ],
      picturePosts: [
        { id: "101-p1", image: "https://picsum.photos/seed/johnp1/800", caption: "New logo experiment!", date: "2025-01-12" },
        { id: "101-p2", image: "https://picsum.photos/seed/johnp2/800", caption: "Practice sketch session.", date: "2025-01-18" },
        { id: "101-p3", image: "https://picsum.photos/seed/johnp3/800", caption: "Sunset inspiration.", date: "2025-01-22" },
        { id: "101-p4", image: "https://picsum.photos/seed/johnp4/800", caption: "Design mood board.", date: "2025-01-25" },
        { id: "101-p5", image: "https://picsum.photos/seed/johnp5/800", caption: "Weekend vibes.", date: "2025-01-28" }
      ]
    }
  },

  {
    id: 102,
    name: {
      firstname: "Maria",
      lastname: "Santos",
      location: "Quezon City, Philippines",
      age: 28,
      gender: "Female",
      title: "Content Writer & Aspiring Painter"
    },
    skills: {
      offered: ["Content Writing", "Copywriting"],
      learning: ["Painting", "Digital Illustration"]
    },
    bio: {
      shortBio: "Storytelling through words is my passion, now exploring the world of visual art.",
      experience: "5 years in content creation"
    },
    contacts: {
      email: "mariasantos@example.com",
      number: "+63 923 456 7890",
      social: {
        facebook: "https://facebook.com/mariasantos",
        instagram: "https://instagram.com/mariasantos",
        linkedin: "https://linkedin.com/in/mariasantos"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/maria2/300",
      backgroundpic: "https://picsum.photos/seed/mariabg2/1200/400"
    },
    socialPosts: {
      textPosts: [
        { id: "102-t1", content: "Wrote three articles today. Productivity feels good!", date: "2025-01-07" },
        { id: "102-t2", content: "Trying watercolor painting this weekend—wish me luck!", date: "2025-01-14" },
        { id: "102-t3", content: "Words are powerful. Use them with care.", date: "2025-01-18" }
      ],
      picturePosts: [
        { id: "102-p1", image: "https://picsum.photos/seed/mariap1/800", caption: "Workspace setup.", date: "2025-01-09" },
        { id: "102-p2", image: "https://picsum.photos/seed/mariap2/800", caption: "Writing drafts!", date: "2025-01-16" },
        { id: "102-p3", image: "https://picsum.photos/seed/mariap3/800", caption: "New painting attempt.", date: "2025-01-21" },
        { id: "102-p4", image: "https://picsum.photos/seed/mariap4/800", caption: "Morning coffee & thoughts.", date: "2025-01-23" },
        { id: "102-p5", image: "https://picsum.photos/seed/mariap5/800", caption: "Sketching ideas.", date: "2025-01-27" }
      ]
    }
  },

  { 
    id: 103,
    name: {
      firstname: "Mark",
      lastname: "Reyes",
      location: "Cebu City, Philippines",
      age: 30,
      gender: "Male",
      title: "Web Developer & Drummer"
    },
    skills: {
      offered: ["HTML", "CSS", "JavaScript", "React"],
      learning: ["Drumming Techniques", "Music Theory"]
    },
    bio: {
      shortBio: "Full-stack developer who loves building clean UI and rocking out on weekends.",
      experience: "6 years in web development"
    },
    contacts: {
      email: "markreyes@example.com",
      number: "+63 955 234 6789",
      social: {
        facebook: "https://facebook.com/markreyes",
        instagram: "https://instagram.com/markreyes",
        linkedin: "https://linkedin.com/in/markreyes"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/mark3/300",
      backgroundpic: "https://picsum.photos/seed/markbg3/1200/400"
    },
    socialPosts: {
      textPosts: [
        { id: "103-t1", content: "Just deployed a new project—feels awesome!", date: "2025-01-05" },
        { id: "103-t2", content: "React hooks still amaze me.", date: "2025-01-11" },
        { id: "103-t3", content: "Weekend jam session incoming!", date: "2025-01-22" }
      ],
      picturePosts: [
        { id: "103-p1", image: "https://picsum.photos/seed/markp1/800", caption: "Coding setup today.", date: "2025-01-07" },
        { id: "103-p2", image: "https://picsum.photos/seed/markp2/800", caption: "UI prototype sketch.", date: "2025-01-13" },
        { id: "103-p3", image: "https://picsum.photos/seed/markp3/800", caption: "Drum practice!", date: "2025-01-17" },
        { id: "103-p4", image: "https://picsum.photos/seed/markp4/800", caption: "Late-night coding grind.", date: "2025-01-24" },
        { id: "103-p5", image: "https://picsum.photos/seed/markp5/800", caption: "Another UI draft done.", date: "2025-01-26" }
      ]
    }
  },

  {
    id: 104,
    name: {
      firstname: "Ella",
      lastname: "Rivera",
      location: "Davao City, Philippines",
      age: 22,
      gender: "Female",
      title: "Baker & Photography Hobbyist"
    },
    skills: {
      offered: ["Baking", "Pastry Making"],
      learning: ["Portrait Photography", "Photo Editing"]
    },
    bio: {
      shortBio: "Sweet treats and sweet moments—love creating both.",
      experience: "2 years of home-based baking"
    },
    contacts: {
      email: "ellarivera@example.com",
      number: "+63 927 111 2233",
      social: {
        facebook: "https://facebook.com/ellarivera",
        instagram: "https://instagram.com/ellarivera",
        linkedin: "https://linkedin.com/in/ellarivera"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/ella4/300",
      backgroundpic: "https://picsum.photos/seed/ellabg4/1200/400"
    },
    socialPosts: {
      textPosts: [
        { id: "104-t1", content: "New cupcake recipe coming soon!", date: "2025-01-06" },
        { id: "104-t2", content: "Photography practice is so relaxing.", date: "2025-01-12" },
        { id: "104-t3", content: "Baking is love made edible.", date: "2025-01-16" }
      ],
      picturePosts: [
        { id: "104-p1", image: "https://picsum.photos/seed/ellap1/800", caption: "Freshly baked goodies!", date: "2025-01-09" },
        { id: "104-p2", image: "https://picsum.photos/seed/ellap2/800", caption: "Macro shot practice.", date: "2025-01-11" },
        { id: "104-p3", image: "https://picsum.photos/seed/ellap3/800", caption: "Perfect pastries.", date: "2025-01-20" },
        { id: "104-p4", image: "https://picsum.photos/seed/ellap4/800", caption: "Kitchen day!", date: "2025-01-23" },
        { id: "104-p5", image: "https://picsum.photos/seed/ellap5/800", caption: "Photo practice #2", date: "2025-01-28" }
      ]
    }
  },

  { 
    id: 105,
    name: {
      firstname: "Kevin",
      lastname: "Lopez",
      location: "Laguna, Philippines",
      age: 26,
      gender: "Male",
      title: "Fitness Trainer & Coding Beginner"
    },
    skills: {
      offered: ["Fitness Coaching", "Strength Training"],
      learning: ["JavaScript", "UI/UX Basics"]
    },
    bio: {
      shortBio: "Helping people get stronger while learning to build digital experiences.",
      experience: "4 years in fitness training"
    },
    contacts: {
      email: "kevinlopez@example.com",
      number: "+63 938 889 1010",
      social: {
        facebook: "https://facebook.com/kevinlopez",
        instagram: "https://instagram.com/kevinlopez",
        linkedin: "https://linkedin.com/in/kevinlopez"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/kevin5/300",
      backgroundpic: "https://picsum.photos/seed/kevinbg5/1200/400"
    },
    socialPosts: {
      textPosts: [
        { id: "105-t1", content: "Another great training session today!", date: "2025-01-03" },
        { id: "105-t2", content: "Learning JavaScript fundamentals—slow but steady!", date: "2025-01-16" },
        { id: "105-t3", content: "Strength doesn't come from what you can do. It comes from overcoming things you once thought you couldn't.", date: "2025-01-18" }
      ],
      picturePosts: [
        { id: "105-p1", image: "https://picsum.photos/seed/kevinp1/800", caption: "Gym grind.", date: "2025-01-06" },
        { id: "105-p2", image: "https://picsum.photos/seed/kevinp2/800", caption: "Workout plan draft.", date: "2025-01-14" },
        { id: "105-p3", image: "https://picsum.photos/seed/kevinp3/800", caption: "Afternoon jog.", date: "2025-01-22" },
        { id: "105-p4", image: "https://picsum.photos/seed/kevinp4/800", caption: "Meal prep!", date: "2025-01-25" },
        { id: "105-p5", image: "https://picsum.photos/seed/kevinp5/800", caption: "JS study time.", date: "2025-01-28" }
      ]
    }
  },

  { 
    id: 106,
    name: {
      firstname: "Sofia",
      lastname: "Lim",
      location: "Bacolod City, Philippines",
      age: 24,
      gender: "Female",
      title: "Digital Illustrator & Aspiring Singer"
    },
    skills: {
      offered: ["Digital Art", "Character Design"],
      learning: ["Singing", "Music Production"]
    },
    bio: {
      shortBio: "Creating colorful worlds while finding my voice in music.",
      experience: "3 years in digital illustration"
    },
    contacts: {
      email: "sofialim@example.com",
      number: "+63 910 223 4455",
      social: {
        facebook: "https://facebook.com/sofialim",
        instagram: "https://instagram.com/sofialim",
        linkedin: "https://linkedin.com/in/sofialim"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/sofia6/300",
      backgroundpic: "https://picsum.photos/seed/sofiabg6/1200/400"
    },
    socialPosts: {
      textPosts: [
        { id: "106-t1", content: "Started a new illustration today!", date: "2025-01-04" },
        { id: "106-t2", content: "Music practice has been fun lately.", date: "2025-01-10" },
        { id: "106-t3", content: "Art is where the heart speaks.", date: "2025-01-21" }
      ],
      picturePosts: [
        { id: "106-p1", image: "https://picsum.photos/seed/sofiap1/800", caption: "Digital art progress.", date: "2025-01-07" },
        { id: "106-p2", image: "https://picsum.photos/seed/sofiap2/800", caption: "Color palette study.", date: "2025-01-15" },
        { id: "106-p3", image: "https://picsum.photos/seed/sofiap3/800", caption: "Sketch dump!", date: "2025-01-19" },
        { id: "106-p4", image: "https://picsum.photos/seed/sofiap4/800", caption: "Late-night doodles.", date: "2025-01-24" },
        { id: "106-p5", image: "https://picsum.photos/seed/sofiap5/800", caption: "New character design!", date: "2025-01-28" }
      ]
    }
  },

  { 
    id: 107,
    name: {
      firstname: "Adrian",
      lastname: "Villanueva",
      location: "Taguig City, Philippines",
      age: 27,
      gender: "Male",
      title: "Videographer & Drone Hobbyist"
    },
    skills: {
      offered: ["Video Editing", "Cinematography"],
      learning: ["Drone Flying", "Color Grading"]
    },
    bio: {
      shortBio: "Capturing stories one frame at a time.",
      experience: "4 years in videography"
    },
    contacts: {
      email: "adrianv@example.com",
      number: "+63 919 337 1122",
      social: {
        facebook: "https://facebook.com/adrianv",
        instagram: "https://instagram.com/adrianv",
        linkedin: "https://linkedin.com/in/adrianv"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/adrian7/300",
      backgroundpic: "https://picsum.photos/seed/adrianbg7/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: "107-t1",
      content: "Exploring new photo editing techniques today!",
      date: "2025-01-04"
    },
    {
      id: "107-t2",
      content: "Sunset shoots never get old.",
      date: "2025-01-11"
    },
    {
      id: "107-t3",
      content: "Traveling teaches perspective.",
      date: "2025-01-20"
    }
  ],
  picturePosts: [
    { id: "107-p1", image: "https://picsum.photos/seed/alexp1/800", caption: "Golden hour magic.", date: "2025-01-07" },
    { id: "107-p2", image: "https://picsum.photos/seed/alexp2/800", caption: "City lights.", date: "2025-01-10" },
    { id: "107-p3", image: "https://picsum.photos/seed/alexp3/800", caption: "Landscape capture.", date: "2025-01-15" },
    { id: "107-p4", image: "https://picsum.photos/seed/alexp4/800", caption: "Behind the scenes.", date: "2025-01-22" },
    { id: "107-p5", image: "https://picsum.photos/seed/alexp5/800", caption: "Color grading tests.", date: "2025-01-27" }
  ]
}

  },
]

const Nusers = [
  { 
    id: 108,
    name: {
      firstname: "Bea",
      lastname: "Chua",
      location: "Makati City, Philippines",
      age: 29,
      gender: "Female",
      title: "Marketing Strategist & Yoga Learner"
    },
    skills: {
      offered: ["Marketing", "Brand Strategy"],
      learning: ["Yoga", "Meditation"]
    },
    bio: {
      shortBio: "Helping brands grow while pursuing inner peace.",
      experience: "6 years in marketing"
    },
    contacts: {
      email: "beachua@example.com",
      number: "+63 932 443 5566",
      social: {
        facebook: "https://facebook.com/beachua",
        instagram: "https://instagram.com/beachua",
        linkedin: "https://linkedin.com/in/beachua"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/bea8/300",
      backgroundpic: "https://picsum.photos/seed/beabg8/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: "108-t1",
      content: "Trying new outfit combinations today!",
      date: "2025-01-03"
    },
    {
      id: "108-t2",
      content: "Self-care Sunday hits different.",
      date: "2025-01-11"
    },
    {
      id: "108-t3",
      content: "Confidence is the best accessory.",
      date: "2025-01-19"
    }
  ],
  picturePosts: [
    { id: "108-p1", image: "https://picsum.photos/seed/chloep1/800", caption: "Today’s outfit!", date: "2025-01-06" },
    { id: "108-p2", image: "https://picsum.photos/seed/chloep2/800", caption: "Makeup test run.", date: "2025-01-13" },
    { id: "108-p3", image: "https://picsum.photos/seed/chloep3/800", caption: "Chill day at home.", date: "2025-01-17" },
    { id: "108-p4", image: "https://picsum.photos/seed/chloep4/800", caption: "Mirror selfie vibes.", date: "2025-01-23" },
    { id: "108-p5", image: "https://picsum.photos/seed/chloep5/800", caption: "Wardrobe rearranged!", date: "2025-01-26" }
  ]
}

  },

  { 
    id: 109,
    name: {
      firstname: "Daniel",
      lastname: "Garcia",
      location: "Cagayan de Oro, Philippines",
      age: 31,
      gender: "Male",
      title: "Carpenter & Tech Hobbyist"
    },
    skills: {
      offered: ["Woodworking", "Custom Furniture"],
      learning: ["Python Programming", "Electronics"]
    },
    bio: {
      shortBio: "Crafting functional art while exploring the world of tech.",
      experience: "7 years in carpentry"
    },
    contacts: {
      email: "danielg@example.com",
      number: "+63 933 221 9877",
      social: {
        facebook: "https://facebook.com/danielg",
        instagram: "https://instagram.com/danielg",
        linkedin: "https://linkedin.com/in/danielg"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/daniel9/300",
      backgroundpic: "https://picsum.photos/seed/danielbg9/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: "109-t1",
      content: "Working on a small robotics project today!",
      date: "2025-01-05"
    },
    {
      id: "109-t2",
      content: "Car engines are fascinating machines.",
      date: "2025-01-12"
    },
    {
      id: "109-t3",
      content: "Prototype update coming soon.",
      date: "2025-01-18"
    }
  ],
  picturePosts: [
    { id: "109-p1", image: "https://picsum.photos/seed/liamp1/800", caption: "Testing circuits.", date: "2025-01-08" },
    { id: "109-p2", image: "https://picsum.photos/seed/liamp2/800", caption: "Gear assembly.", date: "2025-01-14" },
    { id: "109-p3", image: "https://picsum.photos/seed/liamp3/800", caption: "Engine close-up.", date: "2025-01-20" },
    { id: "109-p4", image: "https://picsum.photos/seed/liamp4/800", caption: "Robot frame build.", date: "2025-01-24" },
    { id: "109-p5", image: "https://picsum.photos/seed/liamp5/800", caption: "Workshop day.", date: "2025-01-28" }
  ]
}

  },

  { 
    id: 110,
    name: {
      firstname: "Hannah",
      lastname: "Torres",
      location: "Baguio City, Philippines",
      age: 23,
      gender: "Female",
      title: "Traditional Artist & Aspiring Animator"
    },
    skills: {
      offered: ["Sketching", "Watercolor Art"],
      learning: ["Animation", "Digital Painting"]
    },
    bio: {
      shortBio: "Bringing imagination to life through lines and colors.",
      experience: "2 years in traditional art"
    },
    contacts: {
      email: "hannaht@example.com",
      number: "+63 926 554 2211",
      social: {
        facebook: "https://facebook.com/hannaht",
        instagram: "https://instagram.com/hannaht",
        linkedin: "https://linkedin.com/in/hannaht"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/hannah10/300",
      backgroundpic: "https://picsum.photos/seed/hannahbg10/1200/400"
    },
    socialPosts: {
      textPosts: [
        {
          id: 1,
          content: "Experimenting with new watercolor techniques today. It’s messy but fun!",
          date: "2025-01-12"
        },
        {
          id: 2,
          content: "Walked around Burnham Park for inspiration. The scenery never fails me.",
          date: "2025-02-03"
        },
        {
          id: 3,
          content: "Finally finished my first animation loop! Just 3 seconds but I’m proud.",
          date: "2025-02-18"
        }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/hannahp1/600/500", caption: "Soft pastel florals 🌸", date: "2025-01-20" },
    { id: 2, image: "https://picsum.photos/seed/hannahp2/600/500", caption: "Afternoon sketching session.", date: "2025-01-28" },
    { id: 3, image: "https://picsum.photos/seed/hannahp3/600/500", caption: "Trying new brushes!", date: "2025-02-04" },
    { id: 4, image: "https://picsum.photos/seed/hannahp4/600/500", caption: "Landscape study in watercolor.", date: "2025-02-16" },
    { id: 5, image: "https://picsum.photos/seed/hannahp5/600/500", caption: "My messy but cozy workspace 🎨", date: "2025-02-22" }
  ]
}

  },

  { 
    id: 111,
    name: {
      firstname: "Leon",
      lastname: "Ponce",
      location: "Iloilo City, Philippines",
      age: 34,
      gender: "Male",
      title: "Chef & Coffee Enthusiast"
    },
    skills: {
      offered: ["Cooking", "Menu Planning"],
      learning: ["Latte Art", "Small Business Management"]
    },
    bio: {
      shortBio: "A flavor creator exploring the craft of specialty coffee.",
      experience: "9 years in culinary arts"
    },
    contacts: {
      email: "leonponce@example.com",
      number: "+63 917 889 9901",
      social: {
        facebook: "https://facebook.com/leonponce",
        instagram: "https://instagram.com/leonponce",
        linkedin: "https://linkedin.com/in/leonponce"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/leon11/300",
      backgroundpic: "https://picsum.photos/seed/leonbg11/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Tried a new recipe today—garlic butter steak. Turned out amazing!",
      date: "2025-01-08"
    },
    {
      id: 2,
      content: "Thinking of starting a small café someday. Dream big!",
      date: "2025-01-25"
    },
    {
      id: 3,
      content: "Latte art practice is harder than it looks, but improving slowly.",
      date: "2025-02-10"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/leonp1/600/500", caption: "Today’s special: creamy ramen 🍜", date: "2025-01-14" },
    { id: 2, image: "https://picsum.photos/seed/leonp2/600/500", caption: "My kitchen setup!", date: "2025-01-20" },
    { id: 3, image: "https://picsum.photos/seed/leonp3/600/500", caption: "Trying out latte art again ☕", date: "2025-01-30" },
    { id: 4, image: "https://picsum.photos/seed/leonp4/600/500", caption: "Fresh ingredients make all the difference.", date: "2025-02-05" },
    { id: 5, image: "https://picsum.photos/seed/leonp5/600/500", caption: "Experimenting with desserts!", date: "2025-02-18" }
  ]
}

  },

  { 
    id: 112,
    name: {
      firstname: "Trixie",
      lastname: "Morales",
      location: "Pampanga, Philippines",
      age: 21,
      gender: "Female",
      title: "Student & Aspiring Web Developer"
    },
    skills: {
      offered: ["Basic Writing", "Study Tips"],
      learning: ["HTML", "CSS", "JavaScript"]
    },
    bio: {
      shortBio: "Learning tech one step at a time.",
      experience: "College student"
    },
    contacts: {
      email: "trixiem@example.com",
      number: "+63 935 442 7766",
      social: {
        facebook: "https://facebook.com/trixiem",
        instagram: "https://instagram.com/trixiem",
        linkedin: "https://linkedin.com/in/trixiem"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/trixie12/300",
      backgroundpic: "https://picsum.photos/seed/trixiebg12/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Finally learning how to position elements properly in HTML/CSS!",
      date: "2025-01-03"
    },
    {
      id: 2,
      content: "Studying at a café today—super productive!",
      date: "2025-01-22"
    },
    {
      id: 3,
      content: "JavaScript is confusing but interesting. Baby steps!",
      date: "2025-02-14"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/trixiep1/600/500", caption: "Study notes for today 📚", date: "2025-01-10" },
    { id: 2, image: "https://picsum.photos/seed/trixiep2/600/500", caption: "HTML practice page!", date: "2025-01-18" },
    { id: 3, image: "https://picsum.photos/seed/trixiep3/600/500", caption: "My study workspace 💻", date: "2025-01-28" },
    { id: 4, image: "https://picsum.photos/seed/trixiep4/600/500", caption: "Trying out CSS grid layouts.", date: "2025-02-06" },
    { id: 5, image: "https://picsum.photos/seed/trixiep5/600/500", caption: "Coffee + coding = perfect combo ☕", date: "2025-02-19" }
  ]
}

  },

]

const Vusers = [
  { 
    id: 113,
    name: {
      firstname: "Jasper",
      lastname: "Uy",
      location: "Pasay City, Philippines",
      age: 32,
      gender: "Male",
      title: "Fitness Coach & Nutritional Advisor"
    },
    skills: {
      offered: ["Workout Programs", "Nutrition Planning"],
      learning: ["Cooking", "Video Editing"]
    },
    bio: {
      shortBio: "Dedicated to helping others build healthier lifestyles.",
      experience: "8 years in fitness"
    },
    contacts: {
      email: "jasperuy@example.com",
      number: "+63 928 774 3322",
      social: {
        facebook: "https://facebook.com/jasperuy",
        instagram: "https://instagram.com/jasperuy",
        linkedin: "https://linkedin.com/in/jasperuy"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/jasper13/300",
      backgroundpic: "https://picsum.photos/seed/jasperbg13/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Back-to-back training sessions today! Feeling pumped.",
      date: "2025-01-05"
    },
    {
      id: 2,
      content: "Nutrition is 80% of your progress—don’t forget your veggies!",
      date: "2025-01-27"
    },
    {
      id: 3,
      content: "Trying to learn video editing so I can make fitness tutorials soon.",
      date: "2025-02-15"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/jasperp1/600/500", caption: "Morning workout grind 💪", date: "2025-01-10" },
    { id: 2, image: "https://picsum.photos/seed/jasperp2/600/500", caption: "Meal prep for the week!", date: "2025-01-17" },
    { id: 3, image: "https://picsum.photos/seed/jasperp3/600/500", caption: "New gym setup!", date: "2025-01-29" },
    { id: 4, image: "https://picsum.photos/seed/jasperp4/600/500", caption: "Form check on deadlifts.", date: "2025-02-07" },
    { id: 5, image: "https://picsum.photos/seed/jasperp5/600/500", caption: "Healthy smoothie time.", date: "2025-02-20" }
  ]
}

  },

  { 
    id: 114,
    name: {
      firstname: "Grace",
      lastname: "Soriano",
      location: "Batangas, Philippines",
      age: 27,
      gender: "Female",
      title: "Teacher & Language Learner"
    },
    skills: {
      offered: ["English Tutoring", "Lesson Planning"],
      learning: ["Japanese", "Creative Writing"]
    },
    bio: {
      shortBio: "Teaching with passion while exploring new languages.",
      experience: "5 years in education"
    },
    contacts: {
      email: "graces@example.com",
      number: "+63 934 229 4411",
      social: {
        facebook: "https://facebook.com/graces",
        instagram: "https://instagram.com/graces",
        linkedin: "https://linkedin.com/in/graces"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/grace14/300",
      backgroundpic: "https://picsum.photos/seed/gracebg14/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Started learning Japanese—hiragana is fun but tricky!",
      date: "2025-01-04"
    },
    {
      id: 2,
      content: "Finished preparing tomorrow’s lesson plan. Hoping my students enjoy it.",
      date: "2025-01-26"
    },
    {
      id: 3,
      content: "Trying my hand at creative writing again. It feels refreshing.",
      date: "2025-02-12"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/gracep1/600/500", caption: "Today’s lesson plan 📒", date: "2025-01-12" },
    { id: 2, image: "https://picsum.photos/seed/gracep2/600/500", caption: "Study session notes!", date: "2025-01-20" },
    { id: 3, image: "https://picsum.photos/seed/gracep3/600/500", caption: "Trying new journaling styles.", date: "2025-01-31" },
    { id: 4, image: "https://picsum.photos/seed/gracep4/600/500", caption: "A quiet morning for writing ☀️", date: "2025-02-09" },
    { id: 5, image: "https://picsum.photos/seed/gracep5/600/500", caption: "Language learning progress!", date: "2025-02-21" }
  ]
}

  },

  { 
    id: 115,
    name: {
      firstname: "Theo",
      lastname: "Ramos",
      location: "Rizal, Philippines",
      age: 29,
      gender: "Male",
      title: "Photographer & Aspiring Musician"
    },
    skills: {
      offered: ["Photography", "Photo Editing"],
      learning: ["Guitar", "Songwriting"]
    },
    bio: {
      shortBio: "Capturing life in still frames and learning to express emotion through music.",
      experience: "4 years in photography"
    },
    contacts: {
      email: "theoramos@example.com",
      number: "+63 936 883 0012",
      social: {
        facebook: "https://facebook.com/theoramos",
        instagram: "https://instagram.com/theoramos",
        linkedin: "https://linkedin.com/in/theoramos"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/theo15/300",
      backgroundpic: "https://picsum.photos/seed/theobg15/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Golden hour photoshoots are still my favorite.",
      date: "2025-01-06"
    },
    {
      id: 2,
      content: "Learning guitar chords slowly but steadily!",
      date: "2025-01-28"
    },
    {
      id: 3,
      content: "Trying to write my first song. Wish me luck!",
      date: "2025-02-11"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/theop1/600/500", caption: "Sunset silhouette shot 🌅", date: "2025-01-15" },
    { id: 2, image: "https://picsum.photos/seed/theop2/600/500", caption: "Behind-the-scenes shoot.", date: "2025-01-21" },
    { id: 3, image: "https://picsum.photos/seed/theop3/600/500", caption: "New camera gear!", date: "2025-02-02" },
    { id: 4, image: "https://picsum.photos/seed/theop4/600/500", caption: "Practice guitar session 🎸", date: "2025-02-08" },
    { id: 5, image: "https://picsum.photos/seed/theop5/600/500", caption: "Trying out portrait lighting.", date: "2025-02-19" }
  ]
}

  },

  { 
    id: 116,
    name: {
      firstname: "Luna",
      lastname: "Velasco",
      location: "Antipolo, Philippines",
      age: 26,
      gender: "Female",
      title: "Craft Maker & Beginner Programmer"
    },
    skills: {
      offered: ["Handmade Crafts", "DIY Projects"],
      learning: ["Python", "Web Development"]
    },
    bio: {
      shortBio: "Creative hands and a curious mind.",
      experience: "3 years in crafting"
    },
    contacts: {
      email: "lunav@example.com",
      number: "+63 937 222 8881",
      social: {
        facebook: "https://facebook.com/lunav",
        instagram: "https://instagram.com/lunav",
        linkedin: "https://linkedin.com/in/lunav"
      }
    },
    profilePicture: {
      displaypicture: "https://picsum.photos/seed/luna16/300",
      backgroundpic: "https://picsum.photos/seed/lunabg16/1200/400"
    },
    socialPosts: {
  textPosts: [
    {
      id: 1,
      content: "Finished a handmade macramé keychain today!",
      date: "2025-01-09"
    },
    {
      id: 2,
      content: "Started learning Python again. Loops are actually fun.",
      date: "2025-01-23"
    },
    {
      id: 3,
      content: "Crafting helps me relax—coding challenges me. Perfect balance.",
      date: "2025-02-13"
    }
  ],
  picturePosts: [
    { id: 1, image: "https://picsum.photos/seed/lunap1/600/500", caption: "Handmade crafts of the week ✨", date: "2025-01-11" },
    { id: 2, image: "https://picsum.photos/seed/lunap2/600/500", caption: "DIY workspace setup.", date: "2025-01-19" },
    { id: 3, image: "https://picsum.photos/seed/lunap3/600/500", caption: "First Python script running!", date: "2025-01-29" },
    { id: 4, image: "https://picsum.photos/seed/lunap4/600/500", caption: "Crafting materials haul 🧶", date: "2025-02-06" },
    { id: 5, image: "https://picsum.photos/seed/lunap5/600/500", caption: "Finished another DIY project ❤️", date: "2025-02-18" }
  ]
}

  }
];
