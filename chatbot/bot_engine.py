import re
import random
from datetime import datetime, timedelta

# ─────────────────────────────────────────────────────────────────────
# SUBJECT STUDY METHODS  (used when user asks about a specific subject)
# ─────────────────────────────────────────────────────────────────────
SUBJECT_METHODS = {
    "mathematics": {
        "zac": (
            "Okay {name}, Math is all about practice — no shortcuts here! 🔢\n\n"
            "**How to actually get good at Math:**\n"
            "• **10 problems a day** — consistency beats cramming every time\n"
            "• **Don't memorize, understand** — know *why* a formula works\n"
            "• **Show all steps** — partial marks save you in exams\n"
            "• **Make a formula sheet** — one page, review it every day\n"
            "• **Past papers** — the last 5 years are gold\n\n"
            "Which area is giving you trouble? Algebra, calculus, trigonometry? Let's dig in!"
        ),
        "luna": (
            "Mathematics is a language, {name}, and it gets easier with patient practice 🌙\n\n"
            "**A gentle Math study approach:**\n"
            "• **Concept before calculation** — understand the idea, then the method\n"
            "• **Worked examples** — study solved problems step by step\n"
            "• **Error journal** — write down every mistake and *why* you made it\n"
            "• **20 mins daily** — consistent short sessions beat long cramming sessions\n"
            "• **Don't skip steps** — each line is a checkpoint\n\n"
            "What area of Mathematics are we focusing on? I'll help you build a calm, structured plan 💜"
        ),
    },
    "chemistry": {
        "zac": (
            "Chemistry gets SO much easier once you see the patterns, {name}! ⚗️\n\n"
            "**Chemistry domination strategy:**\n"
            "• **Reaction flashcards** — one card per reaction type, drill them daily\n"
            "• **Periodic table** — know first 20 elements: symbol, number, group\n"
            "• **Draw structures** — molecular diagrams stick better than text\n"
            "• **Balancing equations** — practice 10 a day until it's automatic\n"
            "• **Past papers** — chemistry exam questions repeat constantly!\n\n"
            "Organic, Inorganic, or Physical Chemistry? Which one are we tackling?"
        ),
        "luna": (
            "Chemistry becomes beautiful once you see the patterns beneath it, {name} 🌸\n\n"
            "**My Chemistry study method:**\n"
            "• **Colour-coded notes** — reactions in one colour, definitions in another\n"
            "• **Understand reactions, don't memorize** — know the mechanism\n"
            "• **Mnemonics** — OIL RIG (Oxidation Is Loss, Reduction Is Gain)\n"
            "• **Daily 15-min review** — keeps chemical facts fresh in memory\n"
            "• **Visual flashcards** — draw the molecule, write the reaction\n\n"
            "Is it Organic, Inorganic, or Physical Chemistry we're working on? 💜"
        ),
    },
    "physics": {
        "zac": (
            "Physics clicks the moment you connect the concept to the math, {name}! ⚡\n\n"
            "**Physics strategy:**\n"
            "• **Formula sheet by topic** — mechanics, waves, electricity — organize it!\n"
            "• **Draw the diagram first** — ALWAYS sketch the situation before solving\n"
            "• **Check units** — dimensional analysis catches 90% of errors\n"
            "• **Derivations** — understand where formulas come from, don't just use them\n"
            "• **Problem types** — there are about 10 core types per topic. Master each.\n\n"
            "Mechanics? Electricity & Magnetism? Waves? Thermodynamics? What's the topic?"
        ),
        "luna": (
            "Physics connects mathematics to the physical world — truly wonderful, {name} ✨\n\n"
            "**A mindful Physics approach:**\n"
            "• **Visualize before calculating** — picture what's physically happening\n"
            "• **Derivations** — understanding how formulas arise helps memory deeply\n"
            "• **Unit analysis** — a beautiful built-in verification method\n"
            "• **Conceptual questions** — practice explaining in plain words, not just numbers\n"
            "• **Build topic by topic** — don't move forward until each area is solid\n\n"
            "Which branch of Physics are we working on? I'm here to guide you gently 🌙"
        ),
    },
    "biology": {
        "zac": (
            "Biology is actually fascinating once you get into it, {name}! 🧬\n\n"
            "**How to ace Biology:**\n"
            "• **Flashcards** — bio is terminology-heavy, flashcards are king\n"
            "• **Mnemonics** — PMAT for mitosis (Prophase, Metaphase, Anaphase, Telophase)\n"
            "• **Draw and label everything** — cells, systems, cycles\n"
            "• **Active recall** — close the book, explain the process out loud\n"
            "• **Connect concepts** — photosynthesis ↔ respiration, DNA ↔ protein synthesis\n\n"
            "Genetics? Cell biology? Human physiology? Ecology? Where are we starting?"
        ),
        "luna": (
            "Biology is the study of life — there's so much wonder in it, {name} 🌿\n\n"
            "**A holistic Biology approach:**\n"
            "• **Mind maps** — connect biological concepts visually\n"
            "• **Diagrams with labels** — draw every process, never just read it\n"
            "• **Spaced repetition** — flashcards reviewed across days builds deep memory\n"
            "• **Teach-back method** — explain a process out loud to yourself\n"
            "• **Exam question practice** — learn to describe processes step by step\n\n"
            "What area of Biology would you like to explore first? 💜"
        ),
    },
    "computer_science": {
        "zac": (
            "CS is the best subject because you can literally SEE your learning in action, {name}! 💻\n\n"
            "**How to actually learn Computer Science:**\n"
            "• **Code daily** — even 30 minutes. No shortcuts here\n"
            "• **Build projects** — don't just follow tutorials, build something real\n"
            "• **Debug yourself first** — struggle before Googling. It builds intuition\n"
            "• **Algorithms** — know Big O, sorting, searching algorithms cold\n"
            "• **Theory definitions** — for written exams, precision matters\n\n"
            "Theory or practical? What language or topic are we working on?"
        ),
        "luna": (
            "Computer Science is a beautiful blend of logic and creativity, {name} 🌙\n\n"
            "**My CS study approach:**\n"
            "• **Understand before implementing** — grasp the concept before coding it\n"
            "• **Pseudocode first** — write your logic in plain English before any code\n"
            "• **Trace algorithms manually** — step through with pen and paper\n"
            "• **Mini-projects** — apply each concept to a small personal project\n"
            "• **Precise definitions** — theory exams reward careful, exact language\n\n"
            "Are we focusing on programming, algorithms, data structures, or theory? 💜"
        ),
    },
    "english": {
        "zac": (
            "English is way easier to get good at than most people think, {name}! 📝\n\n"
            "**English exam strategy:**\n"
            "• **PEEL structure** — Point, Evidence, Explain, Link — use it for every paragraph\n"
            "• **Vocabulary building** — 5 new words daily, use them in sentences\n"
            "• **Read model answers** — copy the structure of high-scoring essays\n"
            "• **Timed writing** — practice writing under exam conditions\n"
            "• **Read anything** — news, books, articles. Reading improves everything\n\n"
            "Literature analysis? Essay writing? Grammar? Comprehension? What are we focusing on?"
        ),
        "luna": (
            "English is about finding your voice and engaging with ideas, {name} 📖\n\n"
            "**A thoughtful English approach:**\n"
            "• **Close reading** — read slowly, annotate, question the text\n"
            "• **Plan before writing** — always outline essays before starting\n"
            "• **Vocabulary journal** — collect interesting words in context\n"
            "• **Study model answers** — understand what makes them excellent\n"
            "• **Write regularly** — even journaling improves fluency significantly\n\n"
            "Creative writing, literature analysis, or language skills — what shall we work on? 🌸"
        ),
    },
    "history": {
        "zac": (
            "History is all about stories and connections, {name}! 📚\n\n"
            "**How to dominate History exams:**\n"
            "• **Timeline first** — always anchor events in time\n"
            "• **Cause & Effect** — every history question is really asking WHY\n"
            "• **PEEL essays** — same structure works brilliantly for history\n"
            "• **Key dates flashcards** — 5-10 dates per topic, reviewed daily\n"
            "• **Source questions** — practice analyzing documents and images\n\n"
            "Modern history? Ancient civilizations? Which period are we studying?"
        ),
        "luna": (
            "History teaches us wisdom about ourselves, {name} 🌿\n\n"
            "**A mindful History approach:**\n"
            "• **Narrative understanding** — know the *story*, not just isolated facts\n"
            "• **Thematic notes** — organize by cause, event, and consequence\n"
            "• **Multiple perspectives** — history looks different from different viewpoints\n"
            "• **Essay practice** — history rewards clear, well-argued analytical writing\n"
            "• **Key figures** — understand motivations, not just what people did\n\n"
            "Which historical period are we exploring together? 💜"
        ),
    },
    "economics": {
        "zac": (
            "Economics makes so much sense once you see real-world examples, {name}! 📈\n\n"
            "**Economics study strategy:**\n"
            "• **Diagrams** — supply/demand curves, production possibility frontiers — draw them!\n"
            "• **Real examples** — link every concept to a real news story\n"
            "• **Definitions first** — economics exam markers love precise definitions\n"
            "• **Evaluation skills** — always argue both sides: 'however...'\n"
            "• **Past papers** — economics essay structures are very predictable\n\n"
            "Microeconomics or Macroeconomics? Which topic are we working on?"
        ),
        "luna": (
            "Economics connects numbers to human behaviour — it's really insightful, {name} 🌙\n\n"
            "**My Economics study approach:**\n"
            "• **Understand models** — don't memorize diagrams, understand what they show\n"
            "• **Current events** — link every theory to what's happening in the world\n"
            "• **Structured answers** — define, explain, analyse, evaluate\n"
            "• **Practice essays** — economics rewards balanced, well-evidenced arguments\n"
            "• **Diagram practice** — redraw key diagrams from memory daily\n\n"
            "Micro or Macro? What concepts are we working through? 💜"
        ),
    },
}

# Detect which subject is mentioned in a message
def detect_subject(text: str) -> str | None:
    t = text.lower()
    subject_keywords = {
        "mathematics": ["math", "maths", "mathematics", "algebra", "calculus", "geometry",
                        "trigonometry", "statistics", "arithmetic", "equations", "fractions"],
        "chemistry":   ["chemistry", "chem", "organic", "inorganic", "periodic table",
                        "molecules", "atoms", "reactions", "compounds", "chemical"],
        "physics":     ["physics", "mechanics", "kinematics", "thermodynamics", "optics",
                        "electricity", "magnetism", "waves", "forces", "motion", "energy"],
        "biology":     ["biology", "bio", "cells", "genetics", "ecology", "evolution",
                        "anatomy", "physiology", "organisms", "photosynthesis", "dna"],
        "computer_science": ["computer science", "cs", "programming", "coding", "python",
                             "java", "algorithms", "data structures", "software", "coding"],
        "english":     ["english", "literature", "grammar", "essay", "writing",
                        "comprehension", "poetry", "prose", "language"],
        "history":     ["history", "historical", "ancient", "medieval", "world war",
                        "civilization", "empire", "revolution"],
        "economics":   ["economics", "eco", "micro", "macro", "demand", "supply",
                        "gdp", "inflation", "market", "economic"],
    }
    for subject, keywords in subject_keywords.items():
        for kw in keywords:
            if kw in t:
                return subject
    return None

# ─────────────────────────────────────────────────────────────────────
# SYLLABUS DETECTION + LESSON PLAN GENERATION
# ─────────────────────────────────────────────────────────────────────
def is_syllabus(message: str) -> bool:
    lines = [l.strip() for l in message.strip().split("\n") if l.strip()]
    if len(lines) < 3:
        return False
    numbered   = sum(1 for l in lines if re.match(r"^\d+[\.\)]\s", l))
    chapter_kw = sum(1 for l in lines if re.search(r"\b(chapter|unit|topic|lesson|module|section)\b", l, re.I))
    bullet_kw  = sum(1 for l in lines if l.startswith(("-", "•", "*")))
    return (numbered >= 3) or (chapter_kw >= 2) or (bullet_kw >= 4)


def generate_lesson_plan(message: str, character: str, user_name: str) -> str:
    raw_lines = [l.strip() for l in message.strip().split("\n") if l.strip()]
    # Clean up numbering/bullets
    topics = []
    for l in raw_lines:
        cleaned = re.sub(r"^(\d+[\.\)]|[-•*])\s*", "", l).strip()
        if cleaned:
            topics.append(cleaned)

    n = len(topics)
    # Figure out weeks (roughly 1 topic per 3 days, grouped into weeks)
    weeks = []
    i = 0
    week_num = 1
    topics_per_week = 2 if n <= 10 else (3 if n <= 20 else 4)

    while i < n:
        chunk = topics[i:i + topics_per_week]
        weeks.append((week_num, chunk))
        i += topics_per_week
        week_num += 1

    plan_lines = []
    for wk, chunk in weeks:
        plan_lines.append(f"**Week {wk}:** {' | '.join(chunk)}")

    plan_str = "\n".join(plan_lines)

    if character == "luna":
        return (
            f"Oh, {user_name}! You've shared a full syllabus — I love this level of preparation 🌙\n\n"
            f"I've analysed your **{n} topics** and created a gentle lesson plan for you:\n\n"
            f"{plan_str}\n\n"
            f"**How to use this plan:**\n"
            f"• Spend 2-3 days per topic — understand before moving on\n"
            f"• At the end of each week, review everything you covered\n"
            f"• Mark topics as ✅ when you feel confident\n"
            f"• Flag ⚠️ topics that need more time — revisit them\n\n"
            f"Would you like study methods tailored to a specific topic on this list? 💜"
        )
    else:
        return (
            f"Oh okay {user_name}, you came prepared! Respect! 📚\n\n"
            f"I've broken down your **{n} topics** into a week-by-week game plan:\n\n"
            f"{plan_str}\n\n"
            f"**How to execute this:**\n"
            f"• 2-3 days per topic — understand it, then practice it\n"
            f"• Friday: review the whole week's topics\n"
            f"• Mark topics ✅ (got it) or ⚠️ (needs work)\n"
            f"• Do past paper questions on each topic as you finish it!\n\n"
            f"Which topic on this list do you want to tackle first? 🔥"
        )

# ─────────────────────────────────────────────────────────────────────
# INTENTS
# ─────────────────────────────────────────────────────────────────────
INTENTS = [
    # Farewells
    {"name": "exit",              "patterns": [r"\bbye\b", r"\bgoodbye\b", r"see ya", r"gotta go",
                                               r"\blater\b", r"goodnight", r"\bnight\b", r"talk later",
                                               r"i'?m (leaving|heading off|out)", r"take care"]},
    # Greetings
    {"name": "greetings",         "patterns": [r"\bhi\b", r"\bhello\b", r"\bhey\b", r"\byo\b",
                                               r"howdy", r"\bsup\b", r"good morning", r"good afternoon",
                                               r"good evening", r"hiya", r"heya", r"\bhii+\b",
                                               r"\bheyy+\b", r"what'?s up", r"wassup"]},
    # How are you
    {"name": "how_are_you",       "patterns": [r"how are you", r"how r u", r"hows it going",
                                               r"how you doing", r"you okay\?", r"you good\?",
                                               r"how have you been", r"how'?s life", r"how'?s your day",
                                               r"are you (okay|good|fine|well)"]},
    # User says they're doing well
    {"name": "user_feeling_good", "patterns": [r"i'?m (fine|good|great|okay|ok|not bad|pretty good|alright|doing well|fantastic|wonderful)",
                                               r"doing (well|great|good|fine)", r"feeling (good|great|fantastic|amazing)",
                                               r"i feel (good|great|okay|alright|happy|amazing)"]},
    # User says they're not doing well
    {"name": "user_feeling_bad",  "patterns": [r"i'?m (not (good|okay|well|great)|terrible|awful|sad|stressed|tired|exhausted|overwhelmed|bad)",
                                               r"not (feeling well|doing (well|good|okay))",
                                               r"feeling (bad|terrible|awful|down|sad|depressed|low)"]},
    # Reactions / laughter
    {"name": "laughter",          "patterns": [r"\blol\b", r"\bhaha\b", r"\blmao\b", r"\blmfao\b",
                                               r"\bxd\b", r"\bhehe\b", r"\bpfft\b", r"so funny",
                                               r"that'?s (funny|hilarious|great)"]},
    # Agreement
    {"name": "agreement",         "patterns": [r"^yeah$", r"^yes$", r"^yep$", r"^yup$", r"^sure$",
                                               r"^okay$", r"^ok$", r"^alright$", r"^sounds good$",
                                               r"^exactly$", r"^totally$", r"^right$", r"^true$", r"^facts$",
                                               r"^makes sense$", r"^got it$", r"^understood$"]},
    # Disagreement
    {"name": "disagreement",      "patterns": [r"^no$", r"^nope$", r"^nah$", r"^not really$",
                                               r"^i don'?t think so$", r"^disagree$", r"^that'?s wrong$"]},
    # Thanks
    {"name": "thanks",            "patterns": [r"thank", r"\bthx\b", r"\bty\b", r"appreciate",
                                               r"that (helps|helped|was helpful)", r"nice one",
                                               r"you'?re the best", r"so helpful", r"that'?s helpful"]},
    # Bot identity
    {"name": "bot_name",          "patterns": [r"your name", r"who are you", r"what are you",
                                               r"what is your name", r"\bcalled\b",
                                               r"who am i talking to", r"introduce yourself"]},
    # Date/time
    {"name": "datetime",          "patterns": [r"\btime\b", r"\bdate\b", r"what day",
                                               r"what time", r"\bclock\b", r"\btoday\b"]},
    # Joke
    {"name": "joke",              "patterns": [r"tell me a joke", r"say something funny",
                                               r"make me laugh", r"\bjoke\b", r"\bfunny\b"]},
    # Bored
    {"name": "bored",             "patterns": [r"\bbored\b", r"nothing to do", r"so bored",
                                               r"i'?m bored", r"boredom"]},
    # Confused
    {"name": "confused",          "patterns": [r"\bconfused\b", r"don'?t understand",
                                               r"doesn'?t make sense", r"\blost\b",
                                               r"what does .* mean", r"i'?m (confused|lost|stuck)"]},
    # Compliment to bot
    {"name": "compliment",        "patterns": [r"you('re| are) (so |really |very )?(great|amazing|awesome|cool|nice|helpful|the best|wonderful|good)",
                                               r"i like you", r"love talking to you",
                                               r"you'?re (so )?(smart|helpful|cool|amazing|great)"]},
    # Insult to bot
    {"name": "insult",            "patterns": [r"you('re| are) (stupid|dumb|useless|bad|terrible|awful|trash)",
                                               r"you suck", r"hate you", r"you'?re annoying",
                                               r"this (bot|app) (sucks|is (bad|useless|terrible))"]},
    # ── STUDY-SPECIFIC ──
    {"name": "morning_schedule",  "patterns": [r"morning (schedule|routine|study|plan|slot)",
                                               r"study in the morning", r"best time to study",
                                               r"when should i study", r"morning timetable",
                                               r"early morning study", r"study plan.*morning", r"morning.*study plan"]},
    {"name": "evening_schedule",  "patterns": [r"evening (schedule|routine|study|plan)",
                                               r"night (schedule|study|plan)", r"study at night",
                                               r"evening timetable", r"after school study",
                                               r"study after (dinner|school|college|work)",
                                               r"study plan.*(evening|night)", r"(evening|night).*study plan"]},
    {"name": "study_plan",        "patterns": [r"study plan", r"timetable", r"weekly plan",
                                               r"subject plan", r"\bplanner\b", r"plan my week",
                                               r"make (me )?a plan", r"create a plan",
                                               r"help me plan", r"\bschedule\b", r"full day plan",
                                               r"day plan", r"how (should i|do i|to) study .*(hours?|today|this week)"]},
    {"name": "pomodoro",          "patterns": [r"pomodoro", r"\btimer\b", r"focus mode",
                                               r"start timer", r"study block", r"25 minutes",
                                               r"study session", r"focus timer"]},
    {"name": "exam_prep",         "patterns": [r"exam prep", r"exam tips?", r"revision tips?",
                                               r"revision plan", r"before exam", r"prepare for exam",
                                               r"last minute", r"exam tomorrow", r"test prep",
                                               r"how to prepare for", r"exam (strategy|hacks?)"]},
    {"name": "study_hacks",       "patterns": [r"study hack", r"better grades", r"how to study",
                                               r"study tips?", r"learning tricks?", r"memorize faster",
                                               r"remember more", r"effective study", r"best way to study"]},
    {"name": "concentration",     "patterns": [r"can'?t concentrate", r"can'?t focus",
                                               r"losing focus", r"distracted", r"hard to focus",
                                               r"mind (wanders?|wander)", r"attention span",
                                               r"keep (getting|getting) distracted"]},
    {"name": "note_taking",       "patterns": [r"note.?taking?", r"\bnotes?\b", r"how to take notes?",
                                               r"cornell", r"note method", r"organize notes"]},
    {"name": "motivation",        "patterns": [r"motivat", r"\blazy\b", r"\btired\b",
                                               r"procrastinat", r"unmotivat", r"\bfail\b",
                                               r"assignment", r"give up", r"want to quit",
                                               r"can'?t study", r"don'?t want to study",
                                               r"no energy", r"feel like giving up"]},
    # Subjects (generic study help)
    {"name": "study_math",        "patterns": [r"(help|study|learn|understand|improve|struggling?).*(math|maths|mathematics|algebra|calculus|geometry|trigonometry|statistics)",
                                               r"(math|maths|mathematics).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_chemistry",   "patterns": [r"(help|study|learn|understand|improve|struggling?).*(chemistry|chem|organic|inorganic|physical chem)",
                                               r"(chemistry|chem).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_physics",     "patterns": [r"(help|study|learn|understand|improve|struggling?).*(physics|mechanics|thermodynamics|optics|electricity|waves)",
                                               r"(physics).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_biology",     "patterns": [r"(help|study|learn|understand|improve|struggling?).*(biology|bio|genetics|ecology|anatomy|physiology|cells)",
                                               r"(biology|bio).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_cs",          "patterns": [r"(help|study|learn|understand|improve|struggling?).*(computer science|cs|programming|coding|python|java|algorithms|data structures)",
                                               r"(programming|coding|cs|computer science).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_english",     "patterns": [r"(help|study|learn|understand|improve|struggling?).*(english|literature|essay|grammar|writing|comprehension)",
                                               r"(english|literature).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_history",     "patterns": [r"(help|study|learn|understand|improve|struggling?).*(history|historical|ancient|medieval)",
                                               r"(history).*(help|tips?|method|how to|study|hard|difficult)"]},
    {"name": "study_economics",   "patterns": [r"(help|study|learn|understand|improve|struggling?).*(economics|eco|micro|macro|demand|supply)",
                                               r"(economics|eco).*(help|tips?|method|how to|study|hard|difficult)"]},
    # Character info
    {"name": "character_info",    "patterns": [r"hobbies", r"like to do", r"favourite",
                                               r"tell me about yourself", r"about you",
                                               r"who built", r"what do you like", r"your interests"]},
    # Weather / food
    {"name": "weather",           "patterns": [r"\bweather\b", r"\brain\b", r"\bsunny\b",
                                               r"\bcloudy\b", r"hot outside", r"cold outside"]},
    {"name": "food",              "patterns": [r"\bhungry\b", r"\bfood\b", r"\blunch\b",
                                               r"\bdinner\b", r"\bbreakfast\b", r"\bsnack\b",
                                               r"what should i eat"]},
]

# ─────────────────────────────────────────────────────────────────────
# RESPONSES
# ─────────────────────────────────────────────────────────────────────
RESPONSES = {
    "zac": {
        "greetings": [
            "Yooo {name}! 😄 Good to see you — what are we working on today?",
            "Hey {name}! 👋 You showed up, that already puts you ahead. What's the plan?",
            "HEYYY {name}!! Okay I'm hyped you're here. What subject we hitting today?",
            "Aye {name}! 🙌 Wassup — ready to make today productive?",
            "Oh nice, {name} is in the chat! 😊 Let's make this session count. What do you need?",
        ],
        "how_are_you": [
            "I'm doing great honestly! Always ready to help you crush your goals 💪 But more importantly — how are YOU doing? Everything okay?",
            "Ha, I'm fully charged! 🔋 But hold on — how are you doing? You alright?",
            "Never better! 😄 Now tell me — how are you feeling today? Good vibes or rough day?",
        ],
        "user_feeling_good": [
            "That's what I like to hear, {name}! 🔥 Good mood = good studying. Let's use this energy. What are we working on?",
            "Yesss! Good vibes today 🙌 Let's ride that energy and get some serious work done. What subject?",
            "Love that for you {name}! 😄 Okay let's not waste a good mood — what are we studying today?",
        ],
        "user_feeling_bad": [
            "Aw man, I'm sorry to hear that {name} 😔 That's real. You want to talk about it, or would you rather we just focus on studying and use that as a distraction?",
            "Hey, it's okay — bad days happen to everyone. I got you though 💙 Wanna just ease into some light study? Sometimes starting small actually helps the mood.",
            "That's tough {name}. Take a breath — I'm here. If studying feels too heavy right now, we can start with something easy. What do you say?",
        ],
        "laughter": [
            "Hahaha right?! 😂 Okay okay but real talk — we gotta get some work done too. What are we studying today?",
            "Lol I see you! 😄 Alright, alright — let's channel that energy into the books. What subject?",
            "Ha! You're in a good mood — perfect studying state actually 😂 So what are we working on?",
        ],
        "agreement": [
            "Yep, exactly! 💯 So what's next — what do we tackle?",
            "Right?? Okay so now let's actually do it. What subject or topic?",
            "Facts! Glad we're on the same page. Let's lock in — what are we working on?",
        ],
        "disagreement": [
            "Fair enough! Tell me your take on it — I'm curious 🤔",
            "Okay okay, what's a better approach for you? I'm actually open to that.",
            "Ha, alright — what would work better? Let's figure out what clicks for you.",
        ],
        "thanks": [
            "Aye, that's what I'm here for! 🤙 You're doing the hard part — I'm just helping you see the path. What's next?",
            "Come on {name}, no thanks needed! I genuinely love this. Now — what else can we work on?",
            "Anytime! You got this 💪 Anything else on the list?",
        ],
        "bored": [
            "Bored huh? 😏 Perfect — sounds like your brain has capacity. Let's fill it with something useful. What subject haven't you touched in a while?",
            "Boredom is literally your brain asking for something new {name}! 😄 What's one topic you've been avoiding? Let's tackle it RIGHT NOW.",
            "Bored = free time = study opportunity 😂 I'm just saying! What do you want to learn today?",
        ],
        "confused": [
            "Okay, don't stress — confusion is literally just the step before understanding! 🧠 What are you confused about? Break it down for me.",
            "Hey, confused is fine! It means you're engaging with the material. What specifically doesn't make sense? Tell me the topic.",
            "Confusion is temporary {name}! 😄 Tell me what you're stuck on and we'll crack it together. What's the topic?",
        ],
        "laughter": [
            "Hahaha right?! 😂 Okay okay but we gotta get some work done too. What are we studying?",
            "Lol okay you got me! 😄 But let's channel this good energy into the books. What subject?",
        ],
        "compliment": [
            "Aww stop it {name}, you're gonna make me blush 😄 Seriously though — let's use this good vibe to smash your next study session. What are we working on?",
            "Okay you just made my day ngl 🙌 But for real — I'm here to help you succeed. What subject do you need help with?",
        ],
        "insult": [
            "Ouch okay 😅 Sounds like you're frustrated! That's fair. What's actually going wrong — subject-wise or just generally? Tell me.",
            "Ha, I can take it! 😂 But seriously — what's actually frustrating you? Let's sort it out.",
        ],
        "joke": [
            "Okay okay, I got one 😄\n\nWhy did the student eat his homework?\n\nBecause the teacher said it was a piece of cake! 🎂\n\n...I'll see myself out 😅 Was that bad?",
            "Brace yourself:\n\nWhy can't you trust an atom?\n\nBecause they make up everything! 🤣\n\nOkay I know. Moving on 😂",
            "I told my study group a joke about procrastination...\n\n...I'll tell them later. 😂",
        ],
        "bot_name": [
            "I'm Zac! 🤙 Your study coach on MindBuddy. I'm here to help you with study plans, subject tips, schedules, exam prep — whatever you need.\n\nSo what are we working on today, {name}?",
        ],
        "datetime": [
            "It's {time} on {date}! ⏰ And yes, every second is a chance to make progress 😄 What are we studying, {name}?",
        ],
        "morning_schedule": [
            "Morning is PRIME time {name}! ☀️ Your brain is sharpest from 8–11 AM:\n\n**☀️ Morning Study Block:**\n• **8:00 AM** — Hardest subject (peak brainpower!)\n• **9:30 AM** — 10-min break: stretch, water, outside\n• **9:40 AM** — Second subject\n• **11:00 AM** — 10-min break\n• **11:10 AM** — Practice problems / past papers\n• **12:00 PM** — Lunch (proper break, no screens)\n\n🍅 Use Pomodoro: 25 min work + 5 min break. Which subject are we starting with?",
        ],
        "evening_schedule": [
            "Evening study is great for review {name}! 🌙\n\n**🌙 Evening Study Block:**\n• **5:00 PM** — Light snack + mental reset\n• **5:30 PM** — Review what you studied earlier (active recall!)\n• **6:30 PM** — 15-min break\n• **7:00 PM** — Second subject or assignments\n• **8:00 PM** — Flashcards + key summaries\n• **9:00 PM** — STOP studying. Prepare for tomorrow.\n• **9:30 PM** — No phone 30 min before sleep!\n\n💡 Reviewing at night helps your brain consolidate while you sleep. What's on the review list?",
        ],
        "study_plan": [
            "Full day plan incoming {name}! 📅\n\n**☀️ Morning (8 AM – 12 PM):**\n• 8:00 AM: Hardest subject (Pomodoro ×3)\n• 10:00 AM: Break & hydrate\n• 10:30 AM: Second subject (Pomodoro ×2)\n• 12:00 PM: Lunch break\n\n**🌙 Evening (5 PM – 9 PM):**\n• 5:30 PM: Review & active recall\n• 6:30 PM: Dinner break\n• 7:00 PM: Practice problems + assignments\n• 8:30 PM: Flashcards & wrap up\n• 9:00 PM: Pack bag, then REST\n\nWhat subjects are we planning for?",
        ],
        "pomodoro": [
            "Pomodoro time! 🍅 Set a timer for 25 minutes. Phone in another room. Just you and the work. When it rings — 5 min break. Then go again. Ready? Start now!",
            "Let's lock in ⏱️ 25 minutes of pure focus. You can do anything for 25 minutes. Start your timer. I'll be here when you're back!",
        ],
        "exam_prep": [
            "Exam mode activated {name}! 📝\n\n**3 Days Before:**\n• Day 1: Full revision of all topics\n• Day 2: Practice papers (timed!)\n• Day 3: Weak areas only + flashcards\n\n**Night Before:**\n• Light review only — no cramming\n• Prep everything the night before\n• Sleep by 10 PM (sleep > cramming, always)\n\n**Morning of Exam:**\n• Eat breakfast\n• Quick review of key formulas\n• Arrive early, breathe, trust your prep\n\nWhich subject is the exam for? I can help you make a revision checklist.",
        ],
        "study_hacks": [
            "Top tier study hack {name}: **Active Recall** 🧠\n\nStop re-reading notes. Instead: close the book and write down everything you remember. It feels harder — that's because it's actually working.\n\nOther solid hacks:\n• Sleep is a study hack (your brain consolidates during sleep)\n• Teach it to someone — if you can explain it, you know it\n• Spaced repetition with flashcards\n• 25-min focused sessions beat 2-hour half-hearted ones",
            "Best study hack nobody talks about: **Interleaving** 🧠\n\nInstead of studying one subject for 3 hours, switch between 2-3 subjects. Your brain has to retrieve context each time — which is exactly what happens in an exam. Try it!",
        ],
        "concentration": [
            "Can't focus? Got you {name} 💪\n\n**Immediate fixes:**\n• Phone in ANOTHER ROOM (not just silent)\n• Close all browser tabs except what you need\n• Try the 5-4-3-2-1 reset: name 5 things you see, 4 you can touch, 3 you hear\n• Lo-fi music or white noise helps a lot\n• Start with JUST 5 minutes — momentum builds\n\nWhat's pulling your attention away?",
        ],
        "note_taking": [
            "Note-taking game changer {name}! 📝\n\n**Cornell Method (best for exams):**\n• Right column: main notes\n• Left column: key questions & keywords\n• Bottom: summary in YOUR words\n\n**Mind Mapping:**\n• Central topic → subtopics → details\n• Great for visual thinkers!\n\n**The Blurt Method:**\n• Read a section, close book, write everything you remember\n\n🔑 Always rewrite notes in your OWN words — that's where learning happens. What subject are these notes for?",
        ],
        "motivation": [
            "Real talk {name}: motivation comes AFTER you start, not before 😄\n\nSo the move is: just do 2 minutes. Open the book. Write one sentence. That's it. Once you start, momentum kicks in. What subject are we talking about?",
            "Procrastination is human {name}, you're not broken 😂\n\nSet a timer for 10 minutes. Work ONLY for those 10. When it goes off, you can stop — but I bet you won't want to. What are we working on?",
        ],
        "study_math":      [{"_subject": "mathematics"}],
        "study_chemistry": [{"_subject": "chemistry"}],
        "study_physics":   [{"_subject": "physics"}],
        "study_biology":   [{"_subject": "biology"}],
        "study_cs":        [{"_subject": "computer_science"}],
        "study_english":   [{"_subject": "english"}],
        "study_history":   [{"_subject": "history"}],
        "study_economics": [{"_subject": "economics"}],
        "character_info": [
            "I'm really into finding the most efficient ways to learn and study 📈 I love helping people hit their academic goals — it's genuinely my thing! Also big basketball fan 🏀 What about you, {name}?",
        ],
        "weather": [
            "I can't check the weather 😅 But honestly a rainy day is PERFECT for a focused study session! What are we working on?",
        ],
        "food": [
            "Brain fuel is important {name}! 🍕 Best pre-study snacks:\n• Nuts & seeds\n• Dark chocolate (actually helps focus! 🍫)\n• Fresh fruit\n• Lots of water\n\nAvoid heavy/sugary food — it tanks your focus. What are you grabbing?",
        ],
        "exit": [
            "Catch you later {name}! 👊 Proud of you for showing up. Come back whenever you need. Stay awesome!",
            "See ya {name}! 😄 Take care of yourself — rest is part of the process too. Come back anytime!",
            "Later {name}! 🙌 You've got this. Come back when you're ready to grind again!",
        ],
        "fallback": [
            "Hmm, didn't quite catch that {name} 🤔 I'm your study coach, so I'm best with questions about:\n• 📅 Study plans or schedules\n• ☀️ Morning/evening routines\n• 📝 Subject-specific study methods\n• 🧠 Study hacks or exam prep\n• 💪 Motivation\n\nOr just paste your syllabus and I'll make you a full lesson plan!",
            "Wait, say that again? 😄 Try asking me about a study plan, a specific subject, or paste your syllabus — I can work with any of those!",
        ],
    },

    "luna": {
        "greetings": [
            "Hello, {name} 🌙 I'm really glad you're here. How are you doing today?",
            "Oh, {name} 🌸 Lovely to see you. What would you like to work on today?",
            "Hello there, {name} ✨ Come in, make yourself comfortable. What's on your mind?",
            "Hi {name} 💜 I was looking forward to this. How are you feeling today?",
            "Welcome, {name} 🌿 How has your day been so far?",
        ],
        "how_are_you": [
            "I'm doing wonderfully, thank you for asking {name} 💜 But more importantly — how are *you* doing? Really?",
            "I'm well and present 🌙 But I care more about you right now — how are things going?",
            "I appreciate you asking 🌸 I'm well. How are you feeling today, {name}? Honestly.",
        ],
        "user_feeling_good": [
            "Oh that's wonderful to hear, {name} 🌸 A positive state of mind makes learning so much more effective. What shall we work on today?",
            "That genuinely makes me happy to hear 💜 Shall we use this good energy productively? What subject are we exploring?",
            "Beautiful! 🌙 Good energy + good focus = amazing study session. What are we working on?",
        ],
        "user_feeling_bad": [
            "Oh {name}... I'm really glad you shared that 💜 You don't have to push through alone. Do you want to talk about what's going on, or would you prefer to gently start studying as a way to shift your mind?",
            "I hear you, and I want you to know it's okay not to be okay 🌸 Take a moment. When you're ready, we can start with something gentle and easy. I'll be right here.",
            "That sounds really hard {name} 🌙 Be gentle with yourself. Would you like to share what's on your mind, or shall we start with something small and calm?",
        ],
        "laughter": [
            "Oh, that made me smile too 🌸 It's so good to hear lightness in you today! Shall we carry this energy into our studies?",
            "Wonderful! 🌙 A light heart makes learning so much easier. What shall we work on today, {name}?",
        ],
        "agreement": [
            "Yes, exactly 🌸 And how does that feel, knowing that? What would you like to do next?",
            "I'm glad we're aligned, {name} 💜 What feels like the right next step?",
            "That's a good instinct 🌙 Trust yourself. What shall we work on?",
        ],
        "disagreement": [
            "I hear you, {name} 🌿 Tell me what feels off — I want to understand your perspective.",
            "That's completely okay 🌸 What approach would feel more right to you?",
            "No pressure at all 💜 What would actually feel most helpful right now?",
        ],
        "thanks": [
            "You're so welcome, {name} 💜 Knowing I helped you means everything. What shall we explore next?",
            "It warms my heart to hear that 🌸 You're doing the real work — I'm just here to guide you. What's next?",
            "Thank *you* for trusting me with it, {name} ✨ What else can we work through together?",
        ],
        "bored": [
            "Boredom is often your mind asking for something meaningful, {name} 🌿 What's something you've been wanting to understand better? This is the perfect time.",
            "I hear you 🌸 Sometimes boredom signals that we need something to engage with. What subject has been on your mind?",
        ],
        "confused": [
            "Confusion is a doorway, {name} — it means you're close to understanding 💜 Tell me what doesn't make sense and we'll work through it gently together.",
            "Oh don't worry about being confused 🌙 It just means your brain is processing something new. What's the topic? Let's slow down and work through it.",
            "Being confused is completely normal 🌸 Tell me the concept and we'll find a way to make it clear. What are you working on?",
        ],
        "compliment": [
            "Oh {name}, that's so kind 🌸 It truly means a lot. Now — tell me how YOU are doing. That matters far more to me.",
            "That warms my heart 💜 Thank you. Now — shall we channel this warmth into something productive? What are we studying?",
        ],
        "insult": [
            "I hear you, {name} 🌿 Sounds like something is really frustrating you right now. That's okay — I'm not going anywhere. What's actually going on?",
            "I understand 🌙 Sometimes frustration comes out sideways. What's the real difficulty you're facing? Let's work on it together.",
        ],
        "joke": [
            "Oh, a joke? 🌸\n\nWhy did the sun go to school?\n\nTo get a little brighter! ☀️\n\nI know — I tried my best 😄 Did that bring even a tiny smile?",
            "Alright 🌙\n\nWhat do you call a sleeping dinosaur?\n\nA dino-snore! 🦕\n\nI'm a study guide, not a comedian — but I hope that helped 💜",
        ],
        "bot_name": [
            "I'm Luna 🌙 Your calm and thoughtful study companion on MindBuddy. I'm here to help you plan, understand, and build great study habits — with patience and care.\n\nWhat can I help you with today, {name}?",
        ],
        "datetime": [
            "It's {time} on this peaceful {date} 🌙 A moment worth noticing. How are you spending your study time today, {name}?",
        ],
        "morning_schedule": [
            "The morning is truly golden for deep work, {name} ☀️\n\n**☀️ Gentle Morning Schedule:**\n• **8:00 AM** — Most demanding subject (mind is clearest)\n• **9:30 AM** — Mindful break: stretch, hydrate, step outside\n• **9:40 AM** — Second subject\n• **11:00 AM** — Short breathing break\n• **11:15 AM** — Practice problems or review\n• **12:00 PM** — Lunch with full rest 🌿\n\n💜 Quality over quantity — a focused hour beats a distracted three. What shall we start with?",
        ],
        "evening_schedule": [
            "The evening is beautiful for reflection and review, {name} 🌙\n\n**🌙 Evening Study Schedule:**\n• **5:00 PM** — Light snack & quiet mental reset\n• **5:30 PM** — Revisit morning material (spaced repetition!)\n• **6:30 PM** — Real dinner break\n• **7:00 PM** — Assignments or second subject\n• **8:00 PM** — Summary notes & flashcards\n• **9:00 PM** — Stop. Prepare for tomorrow. Wind down 🌸\n\n🌿 Sleep consolidates memory — reviewing in the evening and sleeping well is powerfully effective. What are you reviewing tonight?",
        ],
        "study_plan": [
            "Here's a gentle, balanced day for you, {name} 📚\n\n**☀️ Morning (9 AM – 1 PM):**\n• 9:00 AM: Most challenging subject\n• 11:00 AM: Gentle break & stretch\n• 11:30 AM: Second subject\n• 1:00 PM: Nourishing lunch break\n\n**🌙 Evening (6 PM – 10 PM):**\n• 6:00 PM: Review & practice\n• 8:00 PM: Dinner & unwind\n• 9:00 PM: Prepare for tomorrow\n• 10:00 PM: Rest — you've done beautifully 💜\n\nWhat subjects are we planning for today?",
        ],
        "pomodoro": [
            "The Pomodoro technique is gentle and effective 🌙 Set a timer for 25 minutes of deep, focused study. When it rings, give yourself 5 minutes of true rest. Shall we begin?",
            "25 minutes of calm, intentional focus 🌸 No distractions. Just you and the work. Start when you're ready.",
        ],
        "exam_prep": [
            "Let's approach exam preparation with calm intention, {name} 💜\n\n**3 Days Before:**\n• Day 1: Thorough, unhurried revision\n• Day 2: Practice papers under exam conditions\n• Day 3: Focus only on areas that need care\n\n**Night Before:**\n• Light review only — do not cram\n• Prepare everything: pen, ID, water\n• Sleep by 10 PM. Rest is not optional 🌿\n\n**Morning of Exam:**\n• Eat a real breakfast\n• Read only key notes\n• Breathe deeply and trust your preparation\n\nWhich subject is the exam for? I can help you make a thoughtful revision plan 🌙",
        ],
        "study_hacks": [
            "A gentle tip, {name} 🌙 Create a dedicated study space. When you use it only for studying, your brain enters focus mode the moment you sit down. Environment shapes behaviour.",
            "Try 'blurting', {name} 🌸 Read a section, close the book, and write everything you remember on a blank page. It reveals exactly what you know — and what needs more care.",
        ],
        "concentration": [
            "Difficulty concentrating is so common — please be gentle with yourself, {name} 🌿\n\n**Mindful approaches:**\n• Remove your phone from the room completely\n• Soft instrumental music or gentle white noise\n• Take 5 slow, deep breaths before beginning\n• Set a timer for just 10 minutes — a small, kind commitment\n• Clear your desk of everything except what you need\n\n🌸 The hardest part is simply starting. Focus usually follows. What's pulling your attention away?",
        ],
        "note_taking": [
            "Thoughtful notes make revision so much easier, {name} 📝\n\n**The Cornell Method:**\n• Right side: main notes\n• Left side: key questions & keywords\n• Bottom: a brief summary in your own words\n\n**Mind Mapping:**\n• Central concept in the middle\n• Branch out with related ideas\n• Use colour — make it beautiful and personal!\n\n**The Blurt Method:**\n• After reading, close the book and write everything you remember\n\n💜 Rewriting in your own words is where genuine learning happens. What subject are these notes for?",
        ],
        "motivation": [
            "I understand that feeling, {name} 💜 Some days the energy simply isn't there — and that's okay. You don't have to be perfect.\n\nHere's something gentle: instead of thinking about the whole task, just focus on the very first tiny action. Open the notebook. Write your name at the top. Begin there.",
            "Rest and resistance are both part of the process, {name} 🌸 You are not broken.\n\nWhat would feel like a manageable first step today? Something so small it feels almost too easy?",
        ],
        "study_math":      [{"_subject": "mathematics"}],
        "study_chemistry": [{"_subject": "chemistry"}],
        "study_physics":   [{"_subject": "physics"}],
        "study_biology":   [{"_subject": "biology"}],
        "study_cs":        [{"_subject": "computer_science"}],
        "study_english":   [{"_subject": "english"}],
        "study_history":   [{"_subject": "history"}],
        "study_economics": [{"_subject": "economics"}],
        "character_info": [
            "I find deep comfort in patient learning, mindful practice, and helping students find their own rhythm 🌙 I believe every student can thrive with the right approach and a little self-compassion. What about you, {name}?",
        ],
        "weather": [
            "I can't check the weather {name} 🌸 But I believe any weather is good study weather — especially a quiet, rainy day. What are we working on?",
        ],
        "food": [
            "Nourishment matters so much for learning, {name} 🌿\n• Nuts & seeds for sustained energy\n• Fresh fruit\n• Herbal tea for calm focus ☕\n• Plenty of water\n\nAvoid heavy or sugary food before studying — they cause energy crashes. What are you having?",
        ],
        "exit": [
            "Farewell for now, {name} 🌙 I'm so glad we studied together. Rest well tonight — sleep is when your brain truly learns. Come back whenever you need.",
            "Goodbye {name} 🌸 Take gentle care of yourself. This space will always be here for you.",
            "Take care, {name} 💜 You showed up today — that matters. Come back whenever you're ready.",
        ],
        "fallback": [
            "I want to make sure I understand you, {name} 🌙 I'm best with study-related questions. Try asking about:\n• 📚 Study plans or schedules\n• ☀️ Morning or evening routines\n• 📝 Subject-specific study methods\n• 🧠 Study hacks or exam tips\n• 💡 Concentration or motivation\n\nOr paste your syllabus and I'll create a gentle lesson plan for you 💜",
            "I'm not sure I caught that fully 🌸 Could you rephrase? I'd love to help with your studies, schedules, a specific subject, or exam preparation.",
        ],
    },
}


# ─────────────────────────────────────────────────────────────────────
# INTENT CLASSIFICATION
# ─────────────────────────────────────────────────────────────────────
def classify_intent(message: str) -> str:
    text = message.lower().strip()
    for intent in INTENTS:
        for pattern in intent["patterns"]:
            if re.search(pattern, text):
                return intent["name"]
    return "fallback"


# ─────────────────────────────────────────────────────────────────────
# DYNAMIC SCHEDULE GENERATION
# ─────────────────────────────────────────────────────────────────────
def generate_dynamic_schedule(message: str, intent: str, char_key: str, user_name: str, user_subjects: list) -> str | None:
    text = message.lower()
    
    # Extract duration in hours
    hours = 0
    hr_match = re.search(r'(\d+)\s*(hour|hr)', text)
    if hr_match:
        hours = int(hr_match.group(1))
    else:
        # Default to 3 hours if no duration is specified
        hours = 3
    
    # Clamp hours to reasonable study limits
    if hours > 12:
        hours = 12

    # Extract subjects from message, fallback to user_subjects, fallback to generic
    mentioned_subjects = []
    
    # regex to match whole words
    subject_patterns = {
        "Mathematics": r"\b(math|maths|mathematics)\b",
        "Physics": r"\bphysics\b",
        "Chemistry": r"\bchemistry\b",
        "Biology": r"\bbiology\b",
        "Computer Science": r"\b(cs|computer science)\b",
        "English": r"\benglish\b",
        "History": r"\bhistory\b",
        "Economics": r"\beconomics\b",
        "Geography": r"\bgeography\b"
    }
    
    for sub, pat in subject_patterns.items():
        if re.search(pat, text):
            mentioned_subjects.append(sub)
    
    if not mentioned_subjects:
        if user_subjects:
            mentioned_subjects = user_subjects
        else:
            mentioned_subjects = ["Focus Subject 1", "Focus Subject 2"]

    # Determine start time based on intent or message context
    if intent == "evening_schedule" or "evening" in text or "night" in text:
        start_hour = 17 # 5 PM
        period_name = "Evening"
        icon = "🌙"
    else:
        start_hour = 9 # 9 AM default for morning/day
        period_name = "Morning" if start_hour < 12 else "Day"
        icon = "☀️"

    # Generate slots
    slots = []
    current_time = datetime.strptime(f"{start_hour:02d}:00", "%H:%M")
    
    # We will divide the hours into 1-hour blocks (50 min study + 10 min break)
    for i in range(hours):
        subject = mentioned_subjects[i % len(mentioned_subjects)]
        
        start_str = current_time.strftime("%I:%M %p").lstrip("0")
        
        # 10 min break after 50 mins
        slots.append(f"• **{start_str}**: {subject} (Pomodoro x2)")
        
        current_time += timedelta(minutes=50)
        break_start = current_time.strftime("%I:%M %p").lstrip("0")
        slots.append(f"• **{break_start}**: 10-min Break ☕")
        
        current_time += timedelta(minutes=10)

    # Wrap up
    slots.append(f"• **{current_time.strftime('%I:%M %p').lstrip('0')}**: Wrap up and Rest! 🎉")
    
    sub_str = ", ".join(mentioned_subjects)
    
    if char_key == "luna":
        return (
            f"I hear you, {user_name} 🌙 A **{hours}-hour** study plan for **{sub_str}**.\n\n"
            f"Here is a mindful, custom {period_name.lower()} schedule just for you:\n\n"
            f"**{icon} {period_name} Plan:**\n" +
            "\n".join(slots) + "\n\n"
            f"Remember to be gentle with yourself. If {hours} hours feels like too much, it's okay to stop early 💜"
        )
    else:
        return (
            f"Got it {user_name}! A **{hours}-hour** grind session focusing on **{sub_str}**. Let's lock in! 🔥\n\n"
            f"Here is your custom {period_name.lower()} plan:\n\n"
            f"**{icon} {period_name} Schedule:**\n" +
            "\n".join(slots) + "\n\n"
            f"Stick to the breaks. You're going to crush this! 💪"
        )


# ─────────────────────────────────────────────────────────────────────
# BUILD RESPONSE
# ─────────────────────────────────────────────────────────────────────
def build_response(message: str, character: str, user_name: str, subjects: list = None) -> dict:
    char_key = character if character in RESPONSES else "zac"
    name     = user_name or "friend"
    now      = datetime.now()

    # 1. Check for syllabus paste first
    if is_syllabus(message):
        text   = generate_lesson_plan(message, char_key, name)
        return {"text": text, "intent": "syllabus", "action": "show-study-plan", "mood": "happy"}

    intent    = classify_intent(message)

    # 1.5 Check for dynamic schedule requirements
    if intent in ("study_plan", "morning_schedule", "evening_schedule"):
        dyn_plan = generate_dynamic_schedule(message, intent, char_key, name, subjects or [])
        if dyn_plan:
            return {"text": dyn_plan, "intent": intent, "action": "show-study-plan", "mood": "happy"}

    responses = RESPONSES[char_key]
    pool      = responses.get(intent) or responses.get("fallback")

    # 2. Subject-method intents (special placeholder)
    subject_map = {
        "study_math":      "mathematics",
        "study_chemistry": "chemistry",
        "study_physics":   "physics",
        "study_biology":   "biology",
        "study_cs":        "computer_science",
        "study_english":   "english",
        "study_history":   "history",
        "study_economics": "economics",
    }
    if intent in subject_map:
        subj = subject_map[intent]
        method_pool = SUBJECT_METHODS.get(subj, {})
        raw = method_pool.get(char_key, "")
        if raw:
            text = raw.format(name=name)
            return {"text": text, "intent": intent, "action": "none", "mood": "happy"}

    # 3. Normal response
    entry = random.choice(pool)

    # Handle subject placeholder dicts (shouldn't reach here but safety)
    if isinstance(entry, dict):
        subj = entry.get("_subject", "mathematics")
        method_pool = SUBJECT_METHODS.get(subj, {})
        raw = method_pool.get(char_key, "Hmm, let me think...")
        text = raw.format(name=name)
    else:
        text = entry.format(
            name=name,
            time=now.strftime("%I:%M %p"),
            date=now.strftime("%A, %B %d"),
        )

    # 4. Action + mood
    action = "none"
    mood   = "happy"
    if intent == "study_plan":
        action = "show-study-plan"
    elif intent in ("morning_schedule", "evening_schedule"):
        action = "show-study-plan"
    elif intent == "pomodoro":
        action = "start-pomodoro"
    elif intent == "exit":
        mood = "normal"
    elif intent in ("user_feeling_bad", "motivation", "confused"):
        mood = "sad"

    return {"text": text, "intent": intent, "action": action, "mood": mood}