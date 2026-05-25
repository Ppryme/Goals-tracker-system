import {

  Trophy,
  Brain,
  Flame,
  Mic,
 
} from "lucide-react";

export const tabData = [
  { key: "overview", label: "Overview" },
  { key: "daily", label: "Daily check-in" },
  { key: "weekly", label: "Weekly reflect" },
  { key: "decision", label: "Decision lens" },
];

export const heroCards = [
  {
    hero: "Ronaldo",
    initials: "CR",
    title: "The Standard",
    subtitle: "Excellence is a daily non-negotiable.",
    tag: "Discipline",
    bg: "bg-amber-100",
    text: "text-amber-800",
    icon: Trophy,
  },
  {
    hero: "Elon Musk",
    initials: "EM",
    title: "The Vision",
    subtitle: "Learn fast. Build what matters.",
    tag: "Deep Work",
    bg: "bg-sky-100",
    text: "text-sky-800",
    icon: Brain,
  },
  {
    hero: "Joe Rogan",
    initials: "JR",
    title: "The Curiosity",
    subtitle: "Explore wider than your current world.",
    tag: "Open Mind",
    bg: "bg-emerald-100",
    text: "text-emerald-800",
    icon: Mic,
  },
  {
    hero: "David Goggins",
    initials: "DG",
    title: "The Edge",
    subtitle: "Do the hard thing before comfort wins.",
    tag: "Toughness",
    bg: "bg-rose-100",
    text: "text-rose-800",
    icon: Flame,
  },
];

export const goalsByDay = {
  Monday: [
    { time: "7:00 AM", group: "Faith + Football", item: "Wake up, say the Lord's Prayer, and go for football training", hero: "Ronaldo" },
    { time: "9:00–9:30 AM", group: "Recovery + Preparation", item: "Wash football jersey and prepare your kits", hero: "Ronaldo" },
    { time: "After training", group: "Recovery + Preparation", item: "Bath, brush teeth, eat, and rest for 15 minutes", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 9:00 PM", group: "React Deep Work", item: "2 hours React lesson + 50 minutes break, repeat the cycle", hero: "Musk" },
    { time: "9:00–9:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "9:30–10:59 PM", group: "Recreation + Reflection", item: "Gaming, reading something different, or reflecting on your day", hero: "Rogan" },
    { time: "11:00 PM", group: "Sleep Discipline", item: "Go to bed and wake by 6:20 AM for 7h 30m rest", hero: "Goggins" },
  ],
  Tuesday: [
    { time: "6:20 AM", group: "Faith + Football", item: "Wake up, say the Lord's Prayer, and go for football training", hero: "Ronaldo" },
    { time: "11:30 AM–12:00 PM", group: "Recovery + Preparation", item: "Wash football jersey and prepare your kits", hero: "Ronaldo" },
    { time: "After training", group: "Recovery + Preparation", item: "Bath, brush teeth, eat, and rest for 15 minutes", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 9:00 PM", group: "React Deep Work", item: "2 hours React lesson + 50 minutes break, repeat the cycle", hero: "Musk" },
    { time: "9:00–9:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "9:30–10:59 PM", group: "Recreation + Reflection", item: "Gaming, reading something different, or reflecting on your day", hero: "Rogan" },
    { time: "11:00 PM", group: "Sleep Discipline", item: "Go to bed and wake by 6:20 AM for 7h 30m rest", hero: "Goggins" },
  ],
  Wednesday: [
    { time: "6:20 AM", group: "Faith + Football", item: "Wake up, say the Lord's Prayer, and go for football training", hero: "Ronaldo" },
    { time: "11:30 AM–12:00 PM", group: "Recovery + Preparation", item: "Wash football jersey and prepare your kits", hero: "Ronaldo" },
    { time: "After training", group: "Recovery + Preparation", item: "Bath, brush teeth, eat, and rest for 15 minutes", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 9:00 PM", group: "React Deep Work", item: "2 hours React lesson + 50 minutes break, repeat the cycle", hero: "Musk" },
    { time: "9:00–9:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "9:30–10:59 PM", group: "Recreation + Reflection", item: "Gaming, reading something different, or reflecting on your day", hero: "Rogan" },
    { time: "11:00 PM", group: "Sleep Discipline", item: "Go to bed and wake by 6:20 AM for 7h 30m rest", hero: "Goggins" },
  ],
  Thursday: [
    { time: "6:20 AM", group: "Faith + Football", item: "Wake up, say the Lord's Prayer, and go for football training", hero: "Ronaldo" },
    { time: "11:30 AM–12:00 PM", group: "Recovery + Preparation", item: "Wash football jersey and prepare your kits", hero: "Ronaldo" },
    { time: "After training", group: "Recovery + Preparation", item: "Bath, brush teeth, eat, and rest for 15 minutes", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 9:00 PM", group: "React Deep Work", item: "2 hours React lesson + 50 minutes break, repeat the cycle", hero: "Musk" },
    { time: "9:00–9:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "9:30–10:59 PM", group: "Recreation + Reflection", item: "Gaming, reading something different, or reflecting on your day", hero: "Rogan" },
    { time: "11:00 PM", group: "Sleep Discipline", item: "Go to bed and wake by 6:20 AM for 7h 30m rest", hero: "Goggins" },
  ],
  Friday: [
    { time: "7:30 AM", group: "Faith + Football", item: "Wake up, pray, and go for personal football practice", hero: "Ronaldo" },
    { time: "After practice", group: "Recovery + Preparation", item: "Wash and prepare your kits", hero: "Ronaldo" },
    { time: "After practice", group: "Recovery + Preparation", item: "Bath, brush teeth, eat, and rest for 15 minutes", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 9:00 PM", group: "React Deep Work", item: "2 hours React lesson + 50 minutes break, repeat the cycle", hero: "Musk" },
    { time: "9:00–9:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "9:30–10:59 PM", group: "Recreation + Reflection", item: "Gaming, reading something different, or reflecting on your day", hero: "Rogan" },
    { time: "12:00 AM", group: "Sleep Discipline", item: "Go to bed and wake by 8:00 AM", hero: "Goggins" },
  ],
  Saturday: [
    { time: "8:00 AM", group: "Faith + Fitness", item: "Wake up for prayer, light football practice, and gym session", hero: "Ronaldo" },
    { time: "Morning", group: "Environment", item: "Clean your room and surroundings", hero: "Ronaldo" },
    { time: "Morning", group: "Preparation", item: "Prepare your kits and have your bath", hero: "Ronaldo" },
    { time: "Daily", group: "Curiosity", item: "Do one Duolingo lesson", hero: "Rogan" },
    { time: "Daily", group: "Faith", item: "Read 2 Bible verses", hero: "Soul" },
    { time: "Until 8:00 PM", group: "React Deep Work", item: "1 hour coding lesson + 45 minutes break, repeat the cycle", hero: "Musk" },
    { time: "8:00–9:00 PM", group: "Recreation", item: "Watch a movie", hero: "Rogan" },
    { time: "9:30 PM", group: "Curiosity", item: "Read on a different field: finance, communication, psychology, business, or health", hero: "Rogan" },
    { time: "10:00–10:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "10:30–11:45 PM", group: "Recreation", item: "Gaming", hero: "Rogan" },
    { time: "11:45 PM–12:00 AM", group: "Preparation", item: "Prepare your clothes for church", hero: "Ronaldo" },
    { time: "12:00 AM", group: "Sleep Discipline", item: "Go to bed and wake by 8:00 AM", hero: "Goggins" },
  ],
  Sunday: [
    { time: "8:00 AM", group: "Faith", item: "Wake up and prepare for church", hero: "Soul" },
    { time: "After church", group: "Recovery", item: "Take a 40-minute nap", hero: "Ronaldo" },
    { time: "Until 6:00 PM", group: "React Deep Work", item: "Do 1-hour coding lessons until 6 PM", hero: "Musk" },
    { time: "6:00–9:30 PM", group: "Recreation", item: "Gaming, football reels, or movie", hero: "Rogan" },
    { time: "10:00–10:30 PM", group: "Night Reset", item: "Have your bath", hero: "Ronaldo" },
    { time: "10:30–11:00 PM", group: "Reflection", item: "Reflect on your day or play music", hero: "Rogan" },
    { time: "11:00 PM", group: "Sleep Discipline", item: "Go to bed", hero: "Goggins" },
  ],
};

export const habitChecks = [
  "Avoid pornography",
  "Avoid TikTok/social media outside break time",
  "Avoid overthinking — write the thought down instead",
  "Think positively — name one thing you are grateful for",
];

export const weeklyQuestions = [
  { hero: "Ronaldo", q: "Did I show up to my own standards this week — or did I compromise?" },
  { hero: "Musk", q: "What did I build or understand better this week that improves my future?" },
  { hero: "Rogan", q: "What new idea did I explore that made me think differently?" },
  { hero: "Goggins", q: "Where did I choose discomfort instead of excuses?" },
];

export const decisionLens = [
  ["Standard", "Does this push me toward excellence or let me get comfortable?"],
  ["Vision", "Does this help my long-term goal of becoming better in football, React, faith, and life?"],
  ["Curiosity", "Will this expand my mind or keep me in the same loop?"],
  ["Edge", "Am I avoiding this because it is wrong — or because it is hard?"],
];