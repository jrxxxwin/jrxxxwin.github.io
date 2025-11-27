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
    }
  },

  // -----------------------------
  // 10 MORE USERS BELOW
  // -----------------------------

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
    }
  },

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
    }
  },

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
    }
  }
];
