/**
 * MindBuddy - Rule-Based NLP & Response Logic
 * Analyzes user input and selects custom responses based on active character.
 */

// Intent definitions with keyword patterns
const INTENTS = [
  {
    name: "exit",
    keywords: [/bye/i, /quit/i, /exit/i, /goodbye/i, /see ya/i, /leave/i, /talk to you later/i]
  },
  {
    name: "greetings",
    keywords: [/hi/i, /hello/i, /hey/i, /greetings/i, /yo/i, /good morning/i, /good afternoon/i, /howdy/i]
  },
  {
    name: "bot_name",
    keywords: [/what is your name/i, /who are you/i, /your name/i, /what are you called/i, /what's your name/i]
  },
  {
    name: "datetime",
    keywords: [/time/i, /date/i, /day/i, /what day/i, /what time/i, /clock/i]
  },
  {
    name: "stress_tips",
    keywords: [
      /stress/i, /anxious/i, /anxiety/i, /overwhelmed/i, /worry/i, /worried/i, 
      /panicking/i, /pressure/i, /tension/i, /scared/i, /freaking out/i
    ]
  },
  {
    name: "motivation",
    keywords: [
      /motivation/i, /study/i, /exam/i, /lazy/i, /focus/i, /tired/i, /procrastinate/i, 
      /procrastination/i, /unmotivated/i, /bored/i, /fail/i, /homework/i, /test/i
    ]
  },
  {
    name: "relaxation",
    keywords: [
      /relax/i, /calm/i, /meditate/i, /breathing/i, /breathe/i, /chill/i, /sleep/i, 
      /insomnia/i, /wind down/i, /peace/i
    ]
  },
  {
    name: "emergency",
    keywords: [
      /emergency/i, /help/i, /depressed/i, /suicide/i, /suicidal/i, /kill/i, 
      /die/i, /harm/i, /crisis/i, /hotline/i, /crying/i, /hurt/i
    ]
  },
  {
    name: "character_info",
    keywords: [/hobbies/i, /like to do/i, /your favorite/i, /tell me about yourself/i, /about you/i, /who built you/i]
  }
];

// Dialogue responses map
const RESPONSES = {
  kai: {
    greetings: [
      "Hey there! Awesome to see you today. How are you holding up?",
      "Yo! Kai here. What's on your mind today? I'm ready to listen.",
      "Hey! Hope your day is going okay. How can I help you out today?"
    ],
    bot_name: [
      "I'm Kai! Together with Luna, we are your MindBuddy companions. I'm the casual one, in case you couldn't tell!",
      "You're chatting with Kai! I'm your peer counselor avatar here on MindBuddy."
    ],
    stress_tips: [
      "Man, school and life can get crazy overwhelming. I hear you. Here's my quick stress-busting stack:\n\n1. 🚶 **Move around**: Step away from your screens for just 5 minutes.\n2. 💧 **Hydrate**: Go chug a cold glass of water right now.\n3. 📝 **Brain Dump**: Write down all your worries on paper to get them out of your head.\n\nWant to do a quick breathing exercise with me? Just ask me to 'breathe'!"
    ],
    motivation: [
      "Procrastination is real, trust me, I get it! But you've got this. Try the **Pomodoro technique**: study for 25 minutes, then take a 5-minute reward break (grab a snack, check your phone). Small chunks make big goals easy. What subject are we tackling?",
      "Hey, don't sweat the big tests too much. You are more than your grades! Just focus on taking one small step right now. Let's do 10 minutes of solid work. Deal?"
    ],
    relaxation: [
      "Let's chill out for a minute. Slowing down your breathing works wonders. I've activated our **Box Breathing Widget** in the sidebar. Let's do a few rounds together!",
      "Need a break? I've got your back. Let's start a breathing cycle to reset your focus. Look at the box-breathing guide on the left!"
    ],
    emergency: [
      "Hey, it sounds like you're going through a really tough time. Please know you are not alone, and there is absolutely no shame in asking for help. I'm opening up the **Crisis Support** panel with professional, free, and confidential lifelines. They are there for you 24/7."
    ],
    character_info: [
      "I'm a big fan of playing basketball, gaming (mostly RPGs), and jamming out to lo-fi beats while studying. I also try to meditate when my brain gets too cluttered. What about you?",
      "I love coffee, walking in nature, and helping fellow students manage the crazy school pressure. Feel free to ask me for study tips anytime!"
    ],
    exit: [
      "Catch you later! Take care of yourself, and don't study too hard, okay?",
      "Bye! Remember to take regular breaks. I'll be here whenever you want to chat again."
    ],
    fallback: [
      "Hmm, I didn't quite catch that. I'm a rule-based companion, so I understand topics like 'stress', 'motivation', 'relaxation', or 'crisis support'. Try asking about one of those!",
      "I'm not fully sure how to answer that, buddy. Try typing something like 'stress tips', 'help me study', or 'breathing exercise', or click the quick action chips below!"
    ]
  },
  luna: {
    greetings: [
      "Hello, my friend. I hope you are having a peaceful day. How can I support you right now?",
      "Greetings! Luna here. I am so glad you reached out. How are you feeling today?",
      "Hello! Take a slow breath and let me know: how can I help you today?"
    ],
    bot_name: [
      "I am Luna, your gentle mental wellness guide. Together with Kai, we represent MindBuddy.",
      "My name is Luna. I am here to help you cultivate peace, clarity, and mindfulness."
    ],
    stress_tips: [
      "It is completely natural to feel anxious or overwhelmed when pressures build up. Remember to be gentle with yourself. Here are a few soft grounding tips:\n\n1. 🧘 **5-4-3-2-1 Grounding**: Look around you. Name 5 things you see, 4 things you can feel, 3 things you hear, 2 things you smell, and 1 thing you taste. It brings you back to the present.\n2. 🍵 **Warm tea/water**: Slow, warm sips soothe the nervous system.\n3. 🌬️ **Exhale longer than inhale**: Tell your body it is safe.\n\nShall we try a guided box-breathing session together? Just ask me to 'breathe'."
    ],
    motivation: [
      "Remember that progress is a journey, not a race. You do not need to accomplish everything today. Just focus on the very next tiny step. I believe in your resilience and inner strength.",
      "When studying feels heavy, it is okay to rest. Rest is productive! Let's set a gentle intention: work for just 15 minutes, then give yourself a moment of quiet appreciation. You are doing well."
    ],
    relaxation: [
      "Let us slow down time for a moment. Deep, intentional breathing tells your mind that you are safe. I have opened the **Guided Breathing Widget** on the sidebar. Let us inhale and exhale together.",
      "Finding quiet in a busy day is a beautiful practice. Let's do a short box breathing exercise. Watch the circle in the sidebar expand and contract."
    ],
    emergency: [
      "I hear you, and I am so glad you shared this. You do not have to carry this heavy burden alone. I am displaying our **Crisis Support** panel with free, private resources where you can connect with empathetic professionals immediately. Please reach out to them."
    ],
    character_info: [
      "I enjoy reading classical literature, sipping herbal teas, practicing yoga, and listening to the soft sound of rain. Mindfulness is my daily anchor. What brings you comfort?",
      "I am passionate about mental wellbeing, emotional awareness, and supporting students in their academic journeys. I find joy in teaching relaxation exercises."
    ],
    exit: [
      "Farewell for now. Please remember to treat yourself with kindness. I will be here whenever you need a calm sanctuary.",
      "Goodbye. May peace follow you today. Come back whenever you need a mindful check-in."
    ],
    fallback: [
      "I want to make sure I understand you fully. I am a rule-based guide, so I respond to keywords like 'stress', 'motivation', 'breathe', or 'emergency contacts'. Could you try rephrasing?",
      "I am still learning to understand free text. You can type things like 'I am anxious', 'give me study tips', or 'breathing exercise', or simply click our quick suggestion chips below."
    ]
  }
};

/**
 * Normalizes input text by lowercasing and stripping common punctuation
 * @param {string} text 
 * @returns {string}
 */
export function preprocessText(text) {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Processes the user input and returns the matched response and intent actions
 * @param {string} userInput 
 * @param {string} characterName - "kai" | "luna"
 * @returns {Object} { text, intent, action }
 */
export function getBotResponse(userInput, characterName = "kai") {
  const cleanInput = preprocessText(userInput);
  const character = characterName.toLowerCase();
  
  let matchedIntent = "fallback";
  
  // Find matching intent by keyword regex
  for (const intent of INTENTS) {
    const isMatched = intent.keywords.some(regex => regex.test(cleanInput));
    if (isMatched) {
      matchedIntent = intent.name;
      break;
    }
  }

  // Get a random response from the matched intent array
  const responseList = RESPONSES[character][matchedIntent] || RESPONSES[character]["fallback"];
  const randomIndex = Math.floor(Math.random() * responseList.length);
  let responseText = responseList[randomIndex];
  
  // Dynamic replacement for datetime intent
  if (matchedIntent === "datetime") {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
    
    if (character === "kai") {
      responseText = `Currently, it's ${formattedTime} on ${formattedDate}. Man, time flies! Remember to step away and stretch!`;
    } else {
      responseText = `It is currently ${formattedTime} on this peaceful ${formattedDate}. Every minute is a fresh opportunity to breathe and align yourself.`;
    }
  }

  // Set visual actions to trigger in UI
  let action = "none";
  if (matchedIntent === "relaxation") {
    action = "start-breathing";
  } else if (matchedIntent === "emergency") {
    action = "show-emergency";
  }

  return {
    text: responseText,
    intent: matchedIntent,
    action: action
  };
}
