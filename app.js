
const API = 'http://127.0.0.1:5000/api';

const state = {
  userName:    '',
  character:   'zac',
  darkMode:    false,
  chatHistory: [],
  subjects:    [],   // set during onboarding step 3
};

// ── DOM refs ──────────────────────────────────────────────────────────────────
const onboarding      = document.getElementById('onboarding');
const appScreen       = document.getElementById('app');
const step1           = document.getElementById('step-1');
const step2           = document.getElementById('step-2');
const userNameInput   = document.getElementById('user-name');
const btnStep1        = document.getElementById('btn-step1');
const charCards       = document.querySelectorAll('.char-card');

const avatarContainer = document.getElementById('avatar-container');
const avatarRing      = document.getElementById('avatar-ring');
const charNameDisplay = document.getElementById('char-name-display');
const headerCharName  = document.getElementById('header-char-name');
const charMood        = document.getElementById('char-mood');
const typingLabel     = document.getElementById('typing-label');

const messages        = document.getElementById('messages');
const typingIndicator = document.getElementById('typing-indicator');
const chatInput       = document.getElementById('chat-input');
const sendBtn         = document.getElementById('send-btn');
const themeToggle     = document.getElementById('theme-toggle');
const sidebarToggle   = document.getElementById('sidebar-toggle');
const sidebar         = document.querySelector('.sidebar');
const changeCharBtn   = document.getElementById('change-char-btn');
const clearChatBtn    = document.getElementById('clear-chat-btn');
const historyBtn      = document.getElementById('history-btn');
const navBtns         = document.querySelectorAll('.nav-btn');
const subjectBtns     = document.getElementById('subject-btns');
const subjectsNav     = document.getElementById('subjects-nav');

// Step 3 refs
const step3         = document.getElementById('step-3');
const btnStep2      = document.getElementById('btn-step2');
const btnStep3      = document.getElementById('btn-step3');
const subjectInput  = document.getElementById('subject-input');
const addSubjectBtn = document.getElementById('add-subject-btn');
const subjectChips  = document.getElementById('subject-chips');
const subjectError  = document.getElementById('subject-error');
const suggChips     = document.querySelectorAll('.sugg-chip');

const historyModal    = document.getElementById('history-modal');
const historyList     = document.getElementById('history-list');
const closeHistoryBtn = document.getElementById('close-history-btn');

// ── SVG Avatars ───────────────────────────────────────────────────────────────
const ZAC_SVG = `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="115" rx="32" ry="18" fill="#4F46E5"/>
  <rect x="28" y="95" width="64" height="28" rx="14" fill="#4F46E5"/>
  <rect x="52" y="82" width="16" height="14" rx="6" fill="#FBBF7A"/>
  <ellipse cx="60" cy="68" rx="30" ry="28" fill="#FBBF7A"/>
  <ellipse cx="60" cy="42" rx="30" ry="14" fill="#1E1B4B"/>
  <rect x="30" y="42" width="60" height="14" fill="#1E1B4B"/>
  <ellipse cx="49" cy="65" rx="5.5" ry="6" fill="white"/>
  <ellipse cx="71" cy="65" rx="5.5" ry="6" fill="white"/>
  <circle cx="51" cy="66" r="3.5" fill="#1E1B4B"/>
  <circle cx="73" cy="66" r="3.5" fill="#1E1B4B"/>
  <circle cx="52" cy="64.5" r="1.2" fill="white"/>
  <circle cx="74" cy="64.5" r="1.2" fill="white"/>
  <path d="M43 58 Q49 55 55 58" stroke="#1E1B4B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M65 58 Q71 55 77 58" stroke="#1E1B4B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M51 76 Q60 83 69 76" stroke="#C2440E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="31" cy="68" rx="5" ry="7" fill="#FBBF7A"/>
  <ellipse cx="89" cy="68" rx="5" ry="7" fill="#FBBF7A"/>
  <path d="M44 95 L60 105 L76 95" stroke="white" stroke-width="2" fill="none"/>
</svg>`;

const LUNA_SVG = `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="115" rx="34" ry="18" fill="#7C3AED"/>
  <rect x="26" y="92" width="68" height="30" rx="16" fill="#7C3AED"/>
  <path d="M26 107 Q60 125 94 107" fill="#6D28D9"/>
  <rect x="52" y="80" width="16" height="14" rx="6" fill="#FFD4A8"/>
  <ellipse cx="60" cy="66" rx="30" ry="28" fill="#FFD4A8"/>
  <ellipse cx="60" cy="40" rx="32" ry="16" fill="#7C2D12"/>
  <rect x="28" y="40" width="64" height="18" fill="#7C2D12"/>
  <rect x="24" y="44" width="10" height="40" rx="5" fill="#7C2D12"/>
  <rect x="86" y="44" width="10" height="40" rx="5" fill="#7C2D12"/>
  <path d="M46 38 Q60 33 74 38" stroke="#A0522D" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="49" cy="63" rx="5.5" ry="6" fill="white"/>
  <ellipse cx="71" cy="63" rx="5.5" ry="6" fill="white"/>
  <circle cx="51" cy="64" r="3.5" fill="#4C1D95"/>
  <circle cx="73" cy="64" r="3.5" fill="#4C1D95"/>
  <circle cx="52" cy="62.5" r="1.2" fill="white"/>
  <circle cx="74" cy="62.5" r="1.2" fill="white"/>
  <ellipse cx="43" cy="71" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="77" cy="71" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <path d="M51 75 Q60 82 69 75" stroke="#C2440E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="31" cy="66" rx="5" ry="7" fill="#FFD4A8"/>
  <ellipse cx="89" cy="66" rx="5" ry="7" fill="#FFD4A8"/>
  <circle cx="85" cy="44" r="7" fill="#F472B6"/>
  <circle cx="85" cy="44" r="4" fill="#FBBF24"/>
</svg>`;

function getAvatar() {
  return state.character === 'luna' ? LUNA_SVG : ZAC_SVG;
}

// ── Session History Helpers ───────────────────────────────────────────────────
// Each saved session: { id, date, character, userName, messages: [{sender,text}] }
const ALL_SESSIONS_KEY = 'mb_all_sessions';

function getAllSessions() {
  try { return JSON.parse(localStorage.getItem(ALL_SESSIONS_KEY)) || []; }
  catch { return []; }
}

function saveCurrentSession() {
  if (state.chatHistory.length === 0) return;
  const sessions = getAllSessions();
  const session = {
    id:        Date.now(),
    date:      new Date().toLocaleString(),
    character: state.character,
    userName:  state.userName,
    messages:  state.chatHistory.slice(),
  };
  sessions.unshift(session);          // newest first
  const trimmed = sessions.slice(0, 20); // keep last 20 sessions
  localStorage.setItem(ALL_SESSIONS_KEY, JSON.stringify(trimmed));
}

// ── Onboarding ────────────────────────────────────────────────────────────────
const nameError = document.getElementById('name-error');

userNameInput.addEventListener('input', () => {
  if (userNameInput.value.trim().length > 0 && nameError) nameError.style.display = 'none';
});
userNameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') proceedToStep2();
});

btnStep1.addEventListener('click', proceedToStep2);

function proceedToStep2() {
  const name = userNameInput.value.trim();
  if (!name) {
    if (nameError) nameError.style.display = 'block';
    userNameInput.focus();
    return;
  }
  state.userName = name;
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
  step2.classList.add('active');
}

charCards.forEach(card => {
  card.addEventListener('click', () => {
    charCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.character = card.dataset.char;
    btnStep2.disabled = false;
  });
});

btnStep2.addEventListener('click', () => {
  // Move to step 3 (subjects)
  step2.classList.add('hidden');
  step2.classList.remove('active');
  step3.classList.remove('hidden');
  step3.classList.add('active');
});

// ── Step 3: Subject setup ─────────────────────────────────────────────────────
function renderChips() {
  subjectChips.innerHTML = '';
  state.subjects.forEach((sub, idx) => {
    const chip = document.createElement('div');
    chip.className = 'subject-chip';
    chip.innerHTML = `<span>${sub}</span><button class="chip-remove" data-idx="${idx}">×</button>`;
    chip.querySelector('.chip-remove').addEventListener('click', () => {
      state.subjects.splice(idx, 1);
      renderChips();
      btnStep3.disabled = state.subjects.length === 0;
    });
    subjectChips.appendChild(chip);
  });
}

function addSubject(name) {
  const trimmed = name.trim();
  if (!trimmed) return;
  if (state.subjects.includes(trimmed)) return;
  state.subjects.push(trimmed);
  renderChips();
  btnStep3.disabled = false;
  if (subjectError) subjectError.style.display = 'none';
}

addSubjectBtn.addEventListener('click', () => {
  addSubject(subjectInput.value);
  subjectInput.value = '';
  subjectInput.focus();
});

subjectInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addSubject(subjectInput.value);
    subjectInput.value = '';
  }
});

suggChips.forEach(chip => {
  chip.addEventListener('click', () => {
    addSubject(chip.dataset.sub);
  });
});

btnStep3.addEventListener('click', startApp);

function startApp() {
  localStorage.setItem('mb_user', JSON.stringify({ userName: state.userName, character: state.character }));
  applyCharTheme();
  onboarding.classList.remove('active');
  onboarding.classList.add('hidden');
  appScreen.classList.remove('hidden');
  appScreen.classList.add('active');
  initApp();
}

function tryRestoreSession() {
  const saved = localStorage.getItem('mb_user');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.userName  = parsed.userName  || '';
      state.character = parsed.character || 'zac';
      return true;
    } catch { return false; }
  }
  return false;
}

function applyCharTheme() {
  document.body.classList.remove('char-zac', 'char-luna');
  document.body.classList.add(`char-${state.character}`);
}

// ── App Init — ALWAYS starts fresh ───────────────────────────────────────────
function initApp() {
  applyCharTheme();
  avatarContainer.innerHTML = getAvatar();

  const displayName = state.character === 'luna' ? 'Luna' : 'Zac';
  charNameDisplay.textContent = displayName;
  headerCharName.textContent  = displayName;
  typingLabel.textContent     = `${displayName} is typing…`;
  charMood.textContent        = 'Ready to help! 😊';

  // Render subject buttons in sidebar
  renderSubjectButtons();

  // Always start with empty chat — fresh session every open
  state.chatHistory = [];
  messages.innerHTML = '';

  // Auto-greet after short delay
  setTimeout(() => autoGreet(), 800);
}

function renderSubjectButtons() {
  if (!subjectBtns) return;
  subjectBtns.innerHTML = '';
  if (state.subjects.length === 0) {
    subjectsNav.style.display = 'none';
    return;
  }
  subjectsNav.style.display = 'block';
  const subjectEmojis = {
    'Mathematics': '🔢', 'Physics': '⚡', 'Chemistry': '⚗️', 'Biology': '🧬',
    'Computer Science': '💻', 'English': '📝', 'History': '📚', 'Economics': '📈',
  };
  state.subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn subject-nav-btn';
    const emoji = subjectEmojis[sub] || '📖';
    btn.textContent = `${emoji} ${sub}`;
    btn.addEventListener('click', () => {
      if (window.innerWidth < 680) sidebar.classList.remove('open');
      addUserMessage(`Help me study ${sub}`);
      sendToBot(`Help me study ${sub}`);
    });
    subjectBtns.appendChild(btn);
  });
}

async function autoGreet() {
  await sendToBot('hello');
}

// ── Message Rendering ─────────────────────────────────────────────────────────
function renderMessage(sender, text, timestamp = null) {
  const row = document.createElement('div');
  row.className = `msg-row ${sender}`;

  if (sender === 'bot') {
    const ava = document.createElement('div');
    ava.className = 'msg-avatar';
    ava.innerHTML = getAvatar();
    row.appendChild(ava);
  }

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = formatText(text);

  if (timestamp) {
    const ts = document.createElement('span');
    ts.className = 'msg-time';
    ts.textContent = timestamp;
    bubble.appendChild(ts);
  }

  row.appendChild(bubble);
  messages.appendChild(row);
  scrollToBottom();
}

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/•/g, '<span class="bullet">•</span>')
    .replace(/\n/g, '<br>');
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

function now12h() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addUserMessage(text) {
  renderMessage('user', text, now12h());
  saveToCurrentSession('user', text);
}

function addBotMessage(text) {
  renderMessage('bot', text, now12h());
  saveToCurrentSession('bot', text);
}

function saveToCurrentSession(sender, text) {
  state.chatHistory.push({ sender, text, time: now12h() });
}

// ── Typing indicator ──────────────────────────────────────────────────────────
function showTyping() {
  typingIndicator.style.display = 'flex';
  setAvatarState('thinking');
  scrollToBottom();
}

function hideTyping() {
  typingIndicator.style.display = 'none';
}

function setAvatarState(state_) {
  avatarRing.className = 'avatar-state-ring';
  if (state_) avatarRing.classList.add(state_);
  const moods = {
    thinking: 'Thinking… 🤔',
    happy:    'Feeling great! 😊',
    sad:      'Here for you ❤️',
    normal:   'Ready to help! 😊',
  };
  charMood.textContent = moods[state_] || moods.normal;
}

// ── Send Logic ────────────────────────────────────────────────────────────────
async function sendToBot(userText, directAction = null) {
  showTyping();

  if (directAction) {
    await fakeDelay(600);
    hideTyping();
    addBotMessage(getLocalResponse(directAction));
    setAvatarState('happy');
    return;
  }

  try {
    const res = await fetch(`${API}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message:   userText,
        character: state.character,
        userName:  state.userName,
        subjects:  state.subjects,
      }),
    });

    await fakeDelay(400);
    if (!res.ok) throw new Error(`Server ${res.status}`);

    const data = await res.json();
    hideTyping();
    addBotMessage(data.text || 'I got your message!');

    const action = data.action || '';
    if (action === 'start-pomodoro') {
      setTimeout(() => alert('Pomodoro started! (Mock 25-min timer)'), 600);
      setAvatarState('happy');
    } else {
      setAvatarState(data.mood || 'happy');
    }

  } catch (err) {
    console.error('API error:', err);
    await fakeDelay(500);
    hideTyping();
    addBotMessage(localEngine(userText));
    setAvatarState('normal');
  }
}

function fakeDelay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  addUserMessage(text);
  sendToBot(text);
}

sendBtn.addEventListener('click', handleSend);
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
});

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const intent = btn.dataset.intent;
    const label  = btn.textContent.trim().replace(/^\S+\s+/, '');
    if (window.innerWidth < 680) sidebar.classList.remove('open');
    addUserMessage(label);
    if (['study_plan','pomodoro','study_hacks','explain_concept','motivation'].includes(intent)) {
      sendToBot(label, intent);
    } else {
      sendToBot(label);
    }
  });
});

// ── History Modal ─────────────────────────────────────────────────────────────
historyBtn.addEventListener('click', () => {
  renderHistoryList();
  historyModal.classList.remove('hidden');
});

closeHistoryBtn.addEventListener('click', () => {
  historyModal.classList.add('hidden');
});

historyModal.addEventListener('click', e => {
  if (e.target === historyModal) historyModal.classList.add('hidden');
});

function renderHistoryList() {
  const sessions = getAllSessions();
  historyList.innerHTML = '';

  if (sessions.length === 0) {
    historyList.innerHTML = `<div class="hist-empty">
      <div style="font-size:2.5rem;margin-bottom:12px">📭</div>
      <p>No saved sessions yet.<br>Your conversations will appear here after each chat.</p>
    </div>`;
    return;
  }

  sessions.forEach((session, idx) => {
    const charLabel = session.character === 'luna' ? '🌙 Luna' : '🤙 Zac';
    const msgCount  = session.messages.length;
    const preview   = session.messages.find(m => m.sender === 'bot')?.text || '';
    const previewTxt = preview.replace(/<[^>]+>/g, '').slice(0, 80) + (preview.length > 80 ? '…' : '');

    const card = document.createElement('div');
    card.className = 'hist-card';
    card.innerHTML = `
      <div class="hist-card-header">
        <div class="hist-meta">
          <span class="hist-char">${charLabel}</span>
          <span class="hist-user">with ${session.userName || 'friend'}</span>
        </div>
        <span class="hist-date">${session.date}</span>
      </div>
      <div class="hist-preview">${previewTxt || 'Session started'}</div>
      <div class="hist-footer">
        <span class="hist-count">${msgCount} messages</span>
        <div class="hist-actions">
          <button class="hist-view-btn" data-idx="${idx}">👁 View</button>
          <button class="hist-del-btn" data-idx="${idx}">🗑</button>
        </div>
      </div>`;
    historyList.appendChild(card);
  });

  // View a session
  historyList.querySelectorAll('.hist-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sessions = getAllSessions();
      const session  = sessions[+btn.dataset.idx];
      showSessionDetail(session);
    });
  });

  // Delete a session
  historyList.querySelectorAll('.hist-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sessions = getAllSessions();
      sessions.splice(+btn.dataset.idx, 1);
      localStorage.setItem(ALL_SESSIONS_KEY, JSON.stringify(sessions));
      renderHistoryList();
    });
  });
}

function showSessionDetail(session) {
  historyList.innerHTML = `
    <button id="hist-back-btn" class="hist-back">← Back to all sessions</button>
    <div class="hist-detail-header">
      <strong>${session.character === 'luna' ? '🌙 Luna' : '🤙 Zac'} × ${session.userName}</strong>
      <span>${session.date}</span>
    </div>
    <div class="hist-detail-msgs" id="hist-detail-msgs"></div>`;

  const container = document.getElementById('hist-detail-msgs');
  session.messages.forEach(m => {
    const row = document.createElement('div');
    row.className = `hist-msg ${m.sender}`;
    row.innerHTML = `<div class="hist-bubble">${formatText(m.text)}</div>
                     ${m.time ? `<span class="hist-time">${m.time}</span>` : ''}`;
    container.appendChild(row);
  });

  document.getElementById('hist-back-btn').addEventListener('click', renderHistoryList);
}

// ── Save current session when page unloads ────────────────────────────────────
window.addEventListener('beforeunload', () => {
  saveCurrentSession();
});

// ── Offline fallback engine ───────────────────────────────────────────────────
function localEngine(text) {
  const t = text.toLowerCase();
  const n = state.userName || 'friend';
  const isLuna = state.character === 'luna';

  if (/\b(hi|hello|hey|yo|sup)\b/.test(t))
    return isLuna ? `Hello ${n}! Ready to study? 🌙` : `Yo ${n}! Let's crush this study session. 🔥`;
  if (/morning (schedule|plan|routine)/.test(t))
    return isLuna
      ? `Morning schedule for you ${n} ☀️\n\n• 9:00 AM – Hardest subject\n• 11:00 AM – Break & stretch\n• 11:30 AM – Second subject\n• 1:00 PM – Lunch break`
      : `Morning grind plan ${n}! ☀️\n\n• 8:00 AM – Main subject (Pomodoro ×3)\n• 10:00 AM – Break & hydrate\n• 10:30 AM – Second subject`;
  if (/evening (schedule|plan|routine)|night study/.test(t))
    return isLuna
      ? `Evening schedule ${n} 🌙\n\n• 6:00 PM – Review morning material\n• 8:00 PM – Dinner & unwind\n• 9:00 PM – Flashcards & prep for tomorrow`
      : `Evening plan ${n}! 🌙\n\n• 5:30 PM – Practice problems\n• 7:00 PM – Dinner break\n• 8:00 PM – Review flashcards & wrap up`;
  if (/motivat|lazy|procrastinat|tired/.test(t))
    return isLuna ? `Rest if you must, but don't quit. Let's start with just 5 minutes, ${n}.` : `Motivation comes AFTER you start. Do 2 minutes right now, ${n}!`;
  if (/pomodoro|timer|focus/.test(t))
    return isLuna ? `25 minutes of gentle, focused study. Start your timer, ${n} 🌙` : `Set a 25-min timer. No distractions. Go, ${n}! 🍅`;
  if (/hack|tip|grade|study/.test(t))
    return isLuna ? `Active recall is your best friend, ${n} 🌸 Close the book and write everything you remember.` : `Sleep is the best study hack, ${n}! All-nighters destroy memory. 🧠`;
  return isLuna
    ? `I want to help you learn, ${n} 🌙 Can you tell me what you're stuck on?`
    : `Wait, I didn't catch that ${n}! Try asking about a study plan, schedule, or tips. 😄`;
}

function getLocalResponse(type) {
  const n = state.userName || 'friend';
  const isLuna = state.character === 'luna';
  const r = {
    pomodoro: isLuna
      ? `The Pomodoro technique is wonderful 🌙 Set a timer for 25 minutes of deep, gentle focus. When it rings, reward yourself with 5 minutes of rest.`
      : `Pomodoro time! 🍅 Set a timer for 25 minutes. No phone, no distractions. Just you and the work.`,
    explain_concept: isLuna
      ? `If you're struggling to grasp a concept, try explaining it out loud to me 🌿 Putting it in your own words reveals what you already understand.`
      : `The best way to learn is the Feynman Technique: explain it to me like I'm 5 years old. Go ahead, ${n}!`,
    study_plan: isLuna
      ? `Here's your full plan, ${n} 📚\n\n**☀️ Morning (9 AM – 1 PM):**\n• 9:00 AM: Hardest subject\n• 11:00 AM: Break & stretch\n• 11:30 AM: Second subject\n\n**🌙 Evening (6 PM – 10 PM):**\n• 6:00 PM: Review & practice\n• 8:00 PM: Dinner & unwind\n• 9:00 PM: Prepare for tomorrow\n\n🌿 Include 5-min mindfulness breaks.`
      : `Study plan incoming, ${n}! 📅\n\n**☀️ Morning (8 AM – 12 PM):**\n• 8:00 AM: Main subject (Pomodoro ×3)\n• 10:00 AM: Break & hydrate\n• 10:30 AM: Second subject\n\n**🌙 Evening (5 PM – 9 PM):**\n• 5:30 PM: Practice problems\n• 7:00 PM: Dinner break\n• 8:00 PM: Flashcards & wrap up\n\nCrush it! 🔥`,
    study_hacks: isLuna
      ? `Try 'blurting', ${n} 🌸 Read a chapter, close the book, and write absolutely everything you remember.`
      : `Top tier hack, ${n}: **Active Recall** — hide your notes and write down everything you remember. 10x better than re-reading. 🧠`,
    motivation: isLuna
      ? `Rest and resistance are both part of the process 🌸 What would feel like a manageable first step today, ${n}?`
      : `Motivation comes AFTER you start, not before. Just do 2 minutes. What subject, ${n}?`,
  };
  return r[type] || "I'm here to help!";
}

// ── Theme & sidebar ───────────────────────────────────────────────────────────
themeToggle.addEventListener('click', () => {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark', state.darkMode);
  themeToggle.textContent = state.darkMode ? '☀️' : '🌙';
});

sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

changeCharBtn.addEventListener('click', () => {
  saveCurrentSession();            // save before switching
  appScreen.classList.remove('active');
  appScreen.classList.add('hidden');
  onboarding.classList.remove('hidden');
  onboarding.classList.add('active');
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
  step2.classList.add('active');
});

clearChatBtn.addEventListener('click', () => {
  if (!confirm('Clear current chat? (History is still saved)')) return;
  saveCurrentSession();           // save before clearing
  state.chatHistory = [];
  messages.innerHTML = '';
  setTimeout(() => autoGreet(), 500);
});

// ── Boot — always show onboarding fresh ──────────────────
function boot() {
  // Clear any previously saved session so user always enters name & picks character
  localStorage.removeItem('mb_user');

  // Reset state
  state.subjects = [];
  state.chatHistory = [];

  // Make sure onboarding is visible at step 1
  onboarding.classList.add('active');
  onboarding.classList.remove('hidden');
  appScreen.classList.add('hidden');
  appScreen.classList.remove('active');

  step1.classList.remove('hidden');
  step2.classList.add('hidden');
  step2.classList.remove('active');
  step3.classList.add('hidden');
  step3.classList.remove('active');
  userNameInput.value = '';
  charCards.forEach(c => c.classList.remove('selected'));
  btnStep2.disabled = true;
  btnStep3.disabled = true;
  state.subjects = [];
  renderChips();
}

boot();
