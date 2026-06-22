(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}})();const S={kai:{name:"Kai",vibe:"Casual & Encouraging",bio:"Hey there! I'm Kai, your student peer counselor. I'm here to help you get through tough study sessions, manage exam stress, or just take a friendly breather. We're in this together!",colorClass:"char-kai",voiceName:"Google US English",voiceSettings:{lang:"en-US",pitch:.95,rate:1},svg:`
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="character-svg">
        <!-- Background Shadow Glow -->
        <circle cx="100" cy="100" r="70" fill="var(--accent-light)" opacity="0.4" />
        
        <!-- Torso & Clothing (Body Base) -->
        <g class="svg-body-base">
          <!-- Neck -->
          <rect x="93" y="125" width="14" height="20" fill="#f5ba9c" rx="4" />
          <!-- Shadow on neck -->
          <path d="M 93 130 Q 100 135 107 130 L 107 125 L 93 125 Z" fill="#e0a082" />
          
          <!-- Hoodie Body -->
          <path d="M 50 200 Q 55 142 100 140 Q 145 142 150 200 Z" fill="#0d9488" />
          <!-- Hoodie Drawstrings & Inside -->
          <path d="M 82 142 Q 100 156 118 142" fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round" />
          <circle cx="92" cy="165" r="3" fill="#ffffff" />
          <path d="M 92 148 L 92 165" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
          <circle cx="108" cy="168" r="3" fill="#ffffff" />
          <path d="M 108 148 L 108 168" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
        </g>
        
        <!-- Head, Face features & Hair (Head Base) -->
        <g class="svg-head-base">
          <!-- Back Hair -->
          <path d="M 62 105 Q 48 85 65 60 Q 100 40 135 60 Q 152 85 138 105 Z" fill="#2d3748" />
          
          <!-- Ears -->
          <circle cx="62" cy="95" r="9" fill="#f5ba9c" />
          <circle cx="138" cy="95" r="9" fill="#f5ba9c" />
          
          <!-- Face Shape -->
          <path d="M 65 92 Q 65 130 100 130 Q 135 130 135 92 Q 135 68 100 68 Q 65 68 65 92 Z" fill="#fcd34d" />
          <path d="M 65 92 Q 65 130 100 130 Q 135 130 135 92 Q 135 68 100 68 Q 65 68 65 92 Z" fill="#ffe0b2" />
          
          <!-- Cheeks Blush -->
          <ellipse cx="76" cy="106" rx="6" ry="3" fill="#f43f5e" opacity="0.25" />
          <ellipse cx="124" cy="106" rx="6" ry="3" fill="#f43f5e" opacity="0.25" />
          
          <!-- Eyes -->
          <g class="eyes-group">
            <!-- Left Eye -->
            <ellipse cx="82" cy="94" rx="7" ry="8" fill="#ffffff" />
            <circle cx="83" cy="94" r="4.5" fill="#1e293b" />
            <circle cx="85" cy="92" r="1.5" fill="#ffffff" /> <!-- highlight -->
            <!-- Animation target overlay -->
            <ellipse cx="82" cy="94" rx="7" ry="8" fill="#ffe0b2" class="svg-eye-left" transform="scale(1, 0)" style="transform-origin: 82px 94px;" />
            
            <!-- Right Eye -->
            <ellipse cx="118" cy="94" rx="7" ry="8" fill="#ffffff" />
            <circle cx="117" cy="94" r="4.5" fill="#1e293b" />
            <circle cx="115" cy="92" r="1.5" fill="#ffffff" /> <!-- highlight -->
            <!-- Animation target overlay -->
            <ellipse cx="118" cy="94" rx="7" ry="8" fill="#ffe0b2" class="svg-eye-right" transform="scale(1, 0)" style="transform-origin: 118px 94px;" />
          </g>
          
          <!-- Eyebrows -->
          <path d="M 74 84 Q 82 81 89 84" stroke="#2d3748" stroke-width="2.5" fill="none" stroke-linecap="round" class="svg-brow-left" />
          <path d="M 111 84 Q 118 81 126 84" stroke="#2d3748" stroke-width="2.5" fill="none" stroke-linecap="round" class="svg-brow-right" />
          
          <!-- Nose -->
          <path d="M 98 100 Q 100 103 102 100" stroke="#d7ccc8" stroke-width="2" fill="none" stroke-linecap="round" />
          
          <!-- Mouth (Controlled Talking Shape) -->
          <path d="M 90 112 Q 100 119 110 112" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" class="svg-mouth" />
          
          <!-- Front Messy Hair Bangs -->
          <path d="M 62 65 C 65 52, 75 48, 85 52 C 95 44, 105 45, 115 50 C 122 42, 134 45, 138 58 C 142 70, 138 78, 136 82 C 125 70, 115 72, 110 76 C 100 68, 92 70, 85 78 C 80 68, 70 68, 62 78 Z" fill="#2d3748" />
        </g>
      </svg>
    `},luna:{name:"Luna",vibe:"Calm & Empathetic",bio:"Hello, my friend. I'm Luna. I believe that taking care of your mind is just as important as studying. Whenever you feel overwhelmed, I'm here to listen, offer breathing support, or provide soothing techniques to bring you peace.",colorClass:"char-luna",voiceName:"Google UK English Female",voiceSettings:{lang:"en-GB",pitch:1.1,rate:.95},svg:`
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="character-svg">
        <!-- Background Shadow Glow -->
        <circle cx="100" cy="100" r="70" fill="var(--accent-light)" opacity="0.4" />
        
        <!-- Torso & Scarf (Body Base) -->
        <g class="svg-body-base">
          <!-- Neck -->
          <rect x="93" y="125" width="14" height="20" fill="#f5ba9c" rx="4" />
          
          <!-- Sweater shoulders -->
          <path d="M 50 200 Q 55 145 100 140 Q 145 145 150 200 Z" fill="#7c3aed" />
          
          <!-- Cozy Scarf -->
          <path d="M 76 138 Q 100 156 124 138 Q 132 152 120 166 Q 100 172 80 166 Q 68 152 76 138 Z" fill="#db2777" />
          <path d="M 76 150 Q 82 178 78 195" stroke="#be185d" stroke-width="8" stroke-linecap="round" />
          <path d="M 120 146 Q 114 172 110 190" stroke="#be185d" stroke-width="6" stroke-linecap="round" />
        </g>
        
        <!-- Head, Hair & Glasses (Head Base) -->
        <g class="svg-head-base">
          <!-- Hair Back (Long Hair) -->
          <path d="M 54 100 Q 42 135 46 175 Q 100 185 154 175 Q 158 135 146 100 Z" fill="#4e342e" />
          <circle cx="58" cy="140" r="14" fill="#3e2723" />
          <circle cx="142" cy="140" r="14" fill="#3e2723" />
          
          <!-- Ears -->
          <circle cx="62" cy="95" r="8" fill="#f5ba9c" />
          <circle cx="138" cy="95" r="8" fill="#f5ba9c" />
          
          <!-- Face Shape -->
          <path d="M 65 92 Q 65 130 100 130 Q 135 130 135 92 Q 135 68 100 68 Q 65 68 65 92 Z" fill="#f5ba9c" />
          
          <!-- Cheeks Blush -->
          <ellipse cx="76" cy="107" rx="7" ry="4" fill="#db2777" opacity="0.2" />
          <ellipse cx="124" cy="107" rx="7" ry="4" fill="#db2777" opacity="0.2" />
          
          <!-- Eyes -->
          <g class="eyes-group">
            <!-- Left Eye -->
            <ellipse cx="82" cy="94" rx="6" ry="6" fill="#ffffff" />
            <circle cx="82" cy="94" r="4.2" fill="#3e2723" />
            <circle cx="84" cy="92" r="1.3" fill="#ffffff" /> <!-- highlight -->
            <ellipse cx="82" cy="94" rx="6" ry="6" fill="#f5ba9c" class="svg-eye-left" transform="scale(1, 0)" style="transform-origin: 82px 94px;" />
            
            <!-- Right Eye -->
            <ellipse cx="118" cy="94" rx="6" ry="6" fill="#ffffff" />
            <circle cx="118" cy="94" r="4.2" fill="#3e2723" />
            <circle cx="120" cy="92" r="1.3" fill="#ffffff" /> <!-- highlight -->
            <ellipse cx="118" cy="94" rx="6" ry="6" fill="#f5ba9c" class="svg-eye-right" transform="scale(1, 0)" style="transform-origin: 118px 94px;" />
          </g>
          
          <!-- Cute Glasses -->
          <circle cx="82" cy="94" r="14" fill="none" stroke="#db2777" stroke-width="2.5" />
          <circle cx="118" cy="94" r="14" fill="none" stroke="#db2777" stroke-width="2.5" />
          <path d="M 96 94 Q 100 91 104 94" fill="none" stroke="#db2777" stroke-width="2.5" />
          <!-- Temple lines of glasses -->
          <path d="M 68 92 L 62 90" stroke="#db2777" stroke-width="1.5" />
          <path d="M 132 92 L 138 90" stroke="#db2777" stroke-width="1.5" />
          
          <!-- Eyebrows -->
          <path d="M 74 76 Q 82 73 89 76" stroke="#4e342e" stroke-width="2" fill="none" stroke-linecap="round" class="svg-brow-left" />
          <path d="M 111 76 Q 118 73 126 76" stroke="#4e342e" stroke-width="2" fill="none" stroke-linecap="round" class="svg-brow-right" />
          
          <!-- Nose -->
          <path d="M 98 102 Q 100 104 102 102" stroke="#d7ccc8" stroke-width="1.5" fill="none" stroke-linecap="round" />
          
          <!-- Mouth -->
          <path d="M 91 113 Q 100 119 109 113" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" class="svg-mouth" />
          
          <!-- Hair Bangs (With a cute side sweep) -->
          <path d="M 62 72 Q 78 52 100 56 Q 122 52 138 72 Q 142 80 140 85 Q 132 68 118 68 Q 100 66 90 76 Q 78 68 64 85 Z" fill="#4e342e" />
        </g>
      </svg>
    `}},ae=[{name:"exit",keywords:[/bye/i,/quit/i,/exit/i,/goodbye/i,/see ya/i,/leave/i,/talk to you later/i]},{name:"greetings",keywords:[/hi/i,/hello/i,/hey/i,/greetings/i,/yo/i,/good morning/i,/good afternoon/i,/howdy/i]},{name:"bot_name",keywords:[/what is your name/i,/who are you/i,/your name/i,/what are you called/i,/what's your name/i]},{name:"datetime",keywords:[/time/i,/date/i,/day/i,/what day/i,/what time/i,/clock/i]},{name:"stress_tips",keywords:[/stress/i,/anxious/i,/anxiety/i,/overwhelmed/i,/worry/i,/worried/i,/panicking/i,/pressure/i,/tension/i,/scared/i,/freaking out/i]},{name:"motivation",keywords:[/motivation/i,/study/i,/exam/i,/lazy/i,/focus/i,/tired/i,/procrastinate/i,/procrastination/i,/unmotivated/i,/bored/i,/fail/i,/homework/i,/test/i]},{name:"relaxation",keywords:[/relax/i,/calm/i,/meditate/i,/breathing/i,/breathe/i,/chill/i,/sleep/i,/insomnia/i,/wind down/i,/peace/i]},{name:"emergency",keywords:[/emergency/i,/help/i,/depressed/i,/suicide/i,/suicidal/i,/kill/i,/die/i,/harm/i,/crisis/i,/hotline/i,/crying/i,/hurt/i]},{name:"character_info",keywords:[/hobbies/i,/like to do/i,/your favorite/i,/tell me about yourself/i,/about you/i,/who built you/i]}],j={kai:{greetings:["Hey there! Awesome to see you today. How are you holding up?","Yo! Kai here. What's on your mind today? I'm ready to listen.","Hey! Hope your day is going okay. How can I help you out today?"],bot_name:["I'm Kai! Together with Luna, we are your MindBuddy companions. I'm the casual one, in case you couldn't tell!","You're chatting with Kai! I'm your peer counselor avatar here on MindBuddy."],stress_tips:[`Man, school and life can get crazy overwhelming. I hear you. Here's my quick stress-busting stack:

1. 🚶 **Move around**: Step away from your screens for just 5 minutes.
2. 💧 **Hydrate**: Go chug a cold glass of water right now.
3. 📝 **Brain Dump**: Write down all your worries on paper to get them out of your head.

Want to do a quick breathing exercise with me? Just ask me to 'breathe'!`],motivation:["Procrastination is real, trust me, I get it! But you've got this. Try the **Pomodoro technique**: study for 25 minutes, then take a 5-minute reward break (grab a snack, check your phone). Small chunks make big goals easy. What subject are we tackling?","Hey, don't sweat the big tests too much. You are more than your grades! Just focus on taking one small step right now. Let's do 10 minutes of solid work. Deal?"],relaxation:["Let's chill out for a minute. Slowing down your breathing works wonders. I've activated our **Box Breathing Widget** in the sidebar. Let's do a few rounds together!","Need a break? I've got your back. Let's start a breathing cycle to reset your focus. Look at the box-breathing guide on the left!"],emergency:["Hey, it sounds like you're going through a really tough time. Please know you are not alone, and there is absolutely no shame in asking for help. I'm opening up the **Crisis Support** panel with professional, free, and confidential lifelines. They are there for you 24/7."],character_info:["I'm a big fan of playing basketball, gaming (mostly RPGs), and jamming out to lo-fi beats while studying. I also try to meditate when my brain gets too cluttered. What about you?","I love coffee, walking in nature, and helping fellow students manage the crazy school pressure. Feel free to ask me for study tips anytime!"],exit:["Catch you later! Take care of yourself, and don't study too hard, okay?","Bye! Remember to take regular breaks. I'll be here whenever you want to chat again."],fallback:["Hmm, I didn't quite catch that. I'm a rule-based companion, so I understand topics like 'stress', 'motivation', 'relaxation', or 'crisis support'. Try asking about one of those!","I'm not fully sure how to answer that, buddy. Try typing something like 'stress tips', 'help me study', or 'breathing exercise', or click the quick action chips below!"]},luna:{greetings:["Hello, my friend. I hope you are having a peaceful day. How can I support you right now?","Greetings! Luna here. I am so glad you reached out. How are you feeling today?","Hello! Take a slow breath and let me know: how can I help you today?"],bot_name:["I am Luna, your gentle mental wellness guide. Together with Kai, we represent MindBuddy.","My name is Luna. I am here to help you cultivate peace, clarity, and mindfulness."],stress_tips:[`It is completely natural to feel anxious or overwhelmed when pressures build up. Remember to be gentle with yourself. Here are a few soft grounding tips:

1. 🧘 **5-4-3-2-1 Grounding**: Look around you. Name 5 things you see, 4 things you can feel, 3 things you hear, 2 things you smell, and 1 thing you taste. It brings you back to the present.
2. 🍵 **Warm tea/water**: Slow, warm sips soothe the nervous system.
3. 🌬️ **Exhale longer than inhale**: Tell your body it is safe.

Shall we try a guided box-breathing session together? Just ask me to 'breathe'.`],motivation:["Remember that progress is a journey, not a race. You do not need to accomplish everything today. Just focus on the very next tiny step. I believe in your resilience and inner strength.","When studying feels heavy, it is okay to rest. Rest is productive! Let's set a gentle intention: work for just 15 minutes, then give yourself a moment of quiet appreciation. You are doing well."],relaxation:["Let us slow down time for a moment. Deep, intentional breathing tells your mind that you are safe. I have opened the **Guided Breathing Widget** on the sidebar. Let us inhale and exhale together.","Finding quiet in a busy day is a beautiful practice. Let's do a short box breathing exercise. Watch the circle in the sidebar expand and contract."],emergency:["I hear you, and I am so glad you shared this. You do not have to carry this heavy burden alone. I am displaying our **Crisis Support** panel with free, private resources where you can connect with empathetic professionals immediately. Please reach out to them."],character_info:["I enjoy reading classical literature, sipping herbal teas, practicing yoga, and listening to the soft sound of rain. Mindfulness is my daily anchor. What brings you comfort?","I am passionate about mental wellbeing, emotional awareness, and supporting students in their academic journeys. I find joy in teaching relaxation exercises."],exit:["Farewell for now. Please remember to treat yourself with kindness. I will be here whenever you need a calm sanctuary.","Goodbye. May peace follow you today. Come back whenever you need a mindful check-in."],fallback:["I want to make sure I understand you fully. I am a rule-based guide, so I respond to keywords like 'stress', 'motivation', 'breathe', or 'emergency contacts'. Could you try rephrasing?","I am still learning to understand free text. You can type things like 'I am anxious', 'give me study tips', or 'breathing exercise', or simply click our quick suggestion chips below."]}};function ie(e){return e.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").replace(/\s+/g," ").trim()}function F(e,t="kai"){const i=ie(e),o=t.toLowerCase();let n="fallback";for(const f of ae)if(f.keywords.some(v=>v.test(i))){n=f.name;break}const c=j[o][n]||j[o].fallback,l=Math.floor(Math.random()*c.length);let g=c[l];if(n==="datetime"){const f=new Date,E=f.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),v=f.toLocaleDateString([],{weekday:"long",month:"short",day:"numeric"});o==="kai"?g=`Currently, it's ${E} on ${v}. Man, time flies! Remember to step away and stretch!`:g=`It is currently ${E} on this peaceful ${v}. Every minute is a fresh opportunity to breathe and align yourself.`}let m="none";return n==="relaxation"?m="start-breathing":n==="emergency"&&(m="show-emergency"),{text:g,intent:n,action:m}}let s={userName:"",character:"kai",subjects:[],studyHours:4,isDark:!1,voiceEnabled:!0},w=null,b=null;const a=e=>document.getElementById(e),k=a("onboarding-overlay"),ne=a("ob-step-1"),oe=a("ob-step-2"),re=a("ob-step-3"),I=a("ob-name-input"),_=a("ob-name-error"),O=a("ob-kai-card"),W=a("ob-luna-card"),y=a("ob-subject-input"),D=a("ob-subjects-list"),ce=a("ob-add-subject-btn"),P=a("ob-hours-display"),T=a("main-app"),le=a("character-svg-container"),de=a("bot-status-text"),ue=a("bot-name-display"),he=a("bot-bio-display"),ge=a("chat-partner-avatar"),me=a("chat-partner-name"),fe=a("user-badge-name"),d=a("chat-messages-container");a("network-error");const ye=a("chips-container"),pe=a("chat-form"),q=a("user-input"),U=a("theme-toggle"),Z=a("voice-toggle"),be=a("clear-chat-btn"),ke=a("change-profile-btn"),Y=a("select-kai-btn"),z=a("select-luna-btn"),ve=a("emergency-toggle-btn"),u=a("emergency-modal"),we=a("close-modal-btn"),K=a("breathing-widget"),xe=a("breathing-circle"),Le=a("breathing-instruction"),Se=a("close-breathing-btn");function Ee(){const e=Ie();e?(s={...s,...e},Ne()):Me(),je()}function Ie(){try{const e=localStorage.getItem("mb_profile");return e?JSON.parse(e):null}catch{return null}}function x(){localStorage.setItem("mb_profile",JSON.stringify({userName:s.userName,character:s.character,subjects:s.subjects,studyHours:s.studyHours,isDark:s.isDark,voiceEnabled:s.voiceEnabled}))}function Me(){k.classList.remove("hidden"),T.classList.add("hidden"),p(1),He()}function He(){a("ob-step1-next").addEventListener("click",()=>{const e=I.value.trim();if(!e){_.classList.remove("hidden"),I.focus();return}_.classList.add("hidden"),s.userName=e,p(2)}),I.addEventListener("keydown",e=>{e.key==="Enter"&&a("ob-step1-next").click()}),[O,W].forEach(e=>{e.addEventListener("click",()=>{O.classList.remove("selected"),W.classList.remove("selected"),e.classList.add("selected"),s.character=e.dataset.char,document.body.classList.toggle("char-kai",s.character==="kai"),document.body.classList.toggle("char-luna",s.character==="luna")})}),a("ob-step2-back").addEventListener("click",()=>p(1)),a("ob-step2-next").addEventListener("click",()=>p(3)),ce.addEventListener("click",R),y.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),R())}),a("ob-hours-minus").addEventListener("click",()=>{s.studyHours=Math.max(1,s.studyHours-1),P.textContent=s.studyHours}),a("ob-hours-plus").addEventListener("click",()=>{s.studyHours=Math.min(8,s.studyHours+1),P.textContent=s.studyHours}),a("ob-step3-back").addEventListener("click",()=>p(2)),a("ob-start-btn").addEventListener("click",Ce)}function p(e){[ne,oe,re].forEach((t,i)=>{t.classList.toggle("active",i+1===e)}),["prog-1","prog-2","prog-3"].forEach((t,i)=>{const o=a(t);o.classList.toggle("active",i+1===e),o.classList.toggle("done",i+1<e)})}function R(){const e=y.value.trim();if(!(!e||s.subjects.length>=6)){if(s.subjects.includes(e)){y.value="";return}s.subjects.push(e),V(),y.value="",y.focus()}}function Te(e){s.subjects=s.subjects.filter(t=>t!==e),V()}function V(){D.innerHTML=s.subjects.map((e,t)=>`
    <span class="subject-tag" style="background:${SUBJECT_COLOURS[t%SUBJECT_COLOURS.length]}">
      ${e}
      <button class="remove-tag" data-subj="${e}" title="Remove">×</button>
    </span>
  `).join(""),D.querySelectorAll(".remove-tag").forEach(e=>{e.addEventListener("click",()=>Te(e.dataset.subj))})}async function Ce(){const e=a("ob-start-btn");e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Starting…',setTimeout(()=>{x();const t=s.character==="kai"?`Hey ${s.userName}! Kai here 🤙 Let's get started!`:`Hello ${s.userName} 🌙 Luna here. Welcome to your wellness space.`;Be(t),e.disabled=!1,e.innerHTML='<i class="fa-solid fa-rocket"></i> Start My Journey!'},400)}function Be(e){k.style.animation="fadeOut .4s ease forwards",setTimeout(()=>{k.classList.add("hidden"),k.style.animation="",T.classList.remove("hidden"),X(),L(e)},400)}function Ne(){k.classList.add("hidden"),T.classList.remove("hidden"),X(),We(),Qe()}async function Qe(){d.querySelectorAll(".message-bubble").length>0||setTimeout(()=>{r("thinking");const t=F("hello",s.character);setTimeout(()=>{h(t.text),H({sender:"bot",text:t.text})},800)},800)}function X(){ee(),M(s.character,!1),U.checked=s.isDark,Z.checked=s.voiceEnabled,fe.textContent=s.userName||"You",$e()}function $e(){Y.addEventListener("click",()=>M("kai",!0)),z.addEventListener("click",()=>M("luna",!0)),U.addEventListener("change",e=>{s.isDark=e.target.checked,ee(),x()}),Z.addEventListener("change",e=>{s.voiceEnabled=e.target.checked,x(),!s.voiceEnabled&&window.speechSynthesis&&(window.speechSynthesis.cancel(),r("idle"))}),be.addEventListener("click",De),ke.addEventListener("click",()=>{localStorage.removeItem("mb_profile"),localStorage.removeItem("mb_chat_history"),location.reload()}),pe.addEventListener("submit",e=>{e.preventDefault();const t=q.value.trim();t&&(G(t),q.value="")}),ye.addEventListener("click",e=>{const t=e.target.closest(".chip");if(!t)return;const i=t.dataset.intent,n={greetings:"Hey! How are you doing?",stress:"I'm feeling really stressed",relaxation:"I need to breathe and relax",motivation:"I need some motivation",emergency:"I'm in crisis and need help"}[i]||t.textContent.trim().replace(/^\S+\s+/,"");G(n,i)}),ve.addEventListener("click",()=>{u.classList.remove("hidden"),r("sad")}),we.addEventListener("click",()=>{u.classList.add("hidden"),r("idle")}),u.addEventListener("click",e=>{e.target===u&&(u.classList.add("hidden"),r("idle"))}),Se.addEventListener("click",N)}function M(e,t){window.speechSynthesis&&window.speechSynthesis.cancel(),s.character=e,x(),document.body.classList.toggle("char-kai",e==="kai"),document.body.classList.toggle("char-luna",e==="luna"),Y.classList.toggle("active",e==="kai"),z.classList.toggle("active",e==="luna");const i=S[e];if(le.innerHTML=i.svg,ge.innerHTML=i.svg,ue.textContent=i.name,he.textContent=i.bio,me.textContent=i.name,r("idle"),t&&sessionStorage.getItem("mb_active")){const o={kai:`Switching to Kai! Hey ${s.userName||"friend"} 👋 What can I help with?`,luna:`Hello ${s.userName||"friend"} 🌙 Luna here. How can I support you right now?`};h(o[e])}sessionStorage.setItem("mb_active","1")}function r(e){const t=document.getElementById("character-svg");if(!t)return;t.className=`char-${e}`;const i={idle:"Online",talking:"Speaking…",thinking:"Thinking…",happy:"Encouraged!",sad:"Concerned"};de.textContent=i[e]||"Online"}function ee(){document.body.classList.toggle("dark-theme",s.isDark),document.body.classList.toggle("light-theme",!s.isDark)}async function G(e,t=null){te(e),H({sender:"user",text:e}),r("thinking");const i=B();setTimeout(()=>{let o,n="none";if(t==="study_plan"){i.remove(),A();return}if(t==="mental_tips"){i.remove(),J();return}const c=F(e,s.character);o=c.text,n=c.action||"none",i.remove(),h(o,n),H({sender:"bot",text:o}),n==="start-breathing"?setTimeout(se,1200):n==="show-emergency"?setTimeout(()=>{u.classList.remove("hidden"),r("sad")},1e3):n==="show-study-plan"?setTimeout(A,800):n==="show-mental-tips"&&setTimeout(J,800)},800)}function A(){r("thinking");const e=B();setTimeout(()=>{const t=s.character==="kai"?`On it, ${s.userName}! Here's a quick study tip: Try the Pomodoro technique (25 min study, 5 min break).`:`Of course, ${s.userName}. Remember to balance your studies with gentle rest periods.`;e.remove(),h(t),r("happy"),setTimeout(()=>r("idle"),2500)},800)}function J(){r("thinking");const e=B();setTimeout(()=>{const t=s.character==="kai"?`Here's a wellness pick just for you, ${s.userName} 🌿: Drink some water and take a 5 minute walk!`:`Here is a gentle wellness recommendation, dear ${s.userName} 🌸: Spend a few minutes doing absolutely nothing to rest your mind.`;e.remove(),h(t),r("happy"),setTimeout(()=>r("idle"),2500)},800)}function C(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function te(e){const t=C(),i=document.createElement("div");i.className="message-bubble outgoing",i.innerHTML=`
    <div class="msg-avatar" style="background:#e2e8f0;font-size:14px;padding-bottom:3px;">👤</div>
    <div class="msg-content-wrapper">
      <div class="msg-text-box">${$(e)}</div>
      <span class="msg-timestamp">${t}</span>
    </div>`,d.appendChild(i),Q()}function h(e,t){const i=C(),o=S[s.character],n=document.createElement("div");n.className="message-bubble incoming";const c=Pe(e);let l="";t==="show-emergency"?l=`<div class="inline-message-card">
      <strong>Connect immediately:</strong>
      <div class="inline-card-actions">
        <a href="tel:988" class="btn btn-danger btn-sm"><i class="fa-solid fa-phone"></i> Call 988</a>
        <button class="btn btn-secondary btn-sm" id="open-crisis-inline">Show Directory</button>
      </div>
    </div>`:(t==="start-breathing"||e&&e.toLowerCase().includes("breath"))&&(l=`<div class="inline-message-card">
      <strong>🫁 Guided Breathing</strong>
      <div class="inline-card-actions">
        <button class="btn btn-secondary btn-sm" id="start-breath-inline"><i class="fa-solid fa-lungs"></i> Start Now</button>
      </div>
    </div>`),n.innerHTML=`
    <div class="msg-avatar">${o.svg}</div>
    <div class="msg-content-wrapper">
      <div class="msg-text-box">${c}${l}</div>
      <span class="msg-timestamp">${i}</span>
    </div>`,d.appendChild(n);const g=n.querySelector("#open-crisis-inline");g&&g.addEventListener("click",()=>{u.classList.remove("hidden"),r("sad")});const m=n.querySelector("#start-breath-inline");m&&m.addEventListener("click",se),Q(),s.voiceEnabled?_e(e):(r("talking"),b&&clearTimeout(b),b=setTimeout(()=>r("idle"),Math.min(4e3,e.length*35)))}function L(e){d.innerHTML=`
    <div class="welcome-box">
      <div class="welcome-icon"><i class="fa-solid fa-spa"></i></div>
      <h3>Welcome, ${$(s.userName)}!</h3>
      <p>This is your safe, personalised wellness space. Your companion is ready.</p>
      <div class="disclaimer-text">*MindBuddy is a rule-based guide and doesn't replace professional therapy.</div>
    </div>`,setTimeout(()=>h(e),500)}function B(){const e=S[s.character],t=document.createElement("div");return t.className="message-bubble incoming",t.innerHTML=`
    <div class="msg-avatar">${e.svg}</div>
    <div class="msg-content-wrapper">
      <div class="msg-text-box typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>`,d.appendChild(t),Q(),t}function se(){N(),K.classList.remove("hidden"),r("thinking");let e=0;const t=[{cls:"inhale",txt:"Inhale slowly…",voice:"Inhale."},{cls:"inhale hold",txt:"Hold your breath…",voice:"Hold."},{cls:"exhale",txt:"Exhale gently…",voice:"Exhale."},{cls:"",txt:"Rest and hold…",voice:"Hold."}],i=()=>{const o=t[e%4];xe.className="breathing-circle "+o.cls,Le.textContent=o.txt,s.voiceEnabled&&Oe(o.voice),e++};i(),w=setInterval(i,4e3)}function N(){w&&(clearInterval(w),w=null),K.classList.add("hidden"),r("idle")}function je(){window.speechSynthesis&&window.speechSynthesis.getVoices()}function _e(e){if(!window.speechSynthesis){r("idle");return}window.speechSynthesis.cancel(),b&&clearTimeout(b);const t=e.replace(/\*\*|__/g,"").replace(/[#*`]/g,"").replace(/\n/g," ").trim(),i=new SpeechSynthesisUtterance(t),o=S[s.character].voiceSettings;i.lang=o.lang,i.pitch=o.pitch,i.rate=o.rate;const n=window.speechSynthesis.getVoices(),c=s.character==="kai"?n.find(l=>l.lang.startsWith("en")&&l.name.match(/david|male|google us english/i)):n.find(l=>l.lang.startsWith("en")&&l.name.match(/zira|female|google uk english female|hazel/i));c&&(i.voice=c),i.onstart=()=>r("talking"),i.onend=()=>r("idle"),i.onerror=()=>r("idle"),window.speechSynthesis.speak(i)}function Oe(e){if(!window.speechSynthesis)return;const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.volume=.5,window.speechSynthesis.speak(t)}function H(e){try{const t=JSON.parse(localStorage.getItem("mb_chat_history")||"[]");t.push({...e,ts:C()}),t.length>80&&t.splice(0,t.length-80),localStorage.setItem("mb_chat_history",JSON.stringify(t))}catch{}}function We(){try{const e=JSON.parse(localStorage.getItem("mb_chat_history")||"[]");if(!e.length){L(s.character==="kai"?`Hey ${s.userName}! Kai here 🤙 Welcome back! What's on your mind today?`:`Hello ${s.userName} 🌙 Luna here. Welcome back. How are you feeling today?`);return}e.forEach(t=>{t.sender==="user"?te(t.text):t.text.startsWith("[")||h(t.text)})}catch{L("Welcome back!")}}function De(){confirm("Clear your conversation history?")&&(localStorage.removeItem("mb_chat_history"),window.speechSynthesis&&window.speechSynthesis.cancel(),N(),d.innerHTML="",L(s.character==="kai"?`Hey ${s.userName}! Fresh start 🤙 What do you need?`:`Hello ${s.userName} 🌙 A fresh page. How can I help today?`))}function Q(){d.scrollTop=d.scrollHeight}function $(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pe(e){return $(String(e||"")).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}window.addEventListener("DOMContentLoaded",Ee);
