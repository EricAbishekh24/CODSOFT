/**
 * MindBuddy - Character Configuration and SVG assets
 * Defines look, dialogue personalities, and animations for Kai and Luna.
 */

export const characters = {
  kai: {
    name: "Kai",
    vibe: "Casual & Encouraging",
    bio: "Hey there! I'm Kai, your student peer counselor. I'm here to help you get through tough study sessions, manage exam stress, or just take a friendly breather. We're in this together!",
    colorClass: "char-kai",
    voiceName: "Google US English", // Prefer male voice if available or generic
    voiceSettings: {
      lang: "en-US",
      pitch: 0.95,
      rate: 1.0
    },
    svg: `
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
    `
  },
  luna: {
    name: "Luna",
    vibe: "Calm & Empathetic",
    bio: "Hello, my friend. I'm Luna. I believe that taking care of your mind is just as important as studying. Whenever you feel overwhelmed, I'm here to listen, offer breathing support, or provide soothing techniques to bring you peace.",
    colorClass: "char-luna",
    voiceName: "Google UK English Female", // Prefer female voice if available
    voiceSettings: {
      lang: "en-GB",
      pitch: 1.1,
      rate: 0.95
    },
    svg: `
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
    `
  }
};
