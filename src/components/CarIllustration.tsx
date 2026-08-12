export default function CarIllustration() {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Illustration of a modern sedan parked on a clean road, representing everyday vehicles covered by auto insurance"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3E9DA" />
          <stop offset="100%" stopColor="#CFE3F2" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E7BC0" />
          <stop offset="100%" stopColor="#102A43" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BFE0F5" />
          <stop offset="100%" stopColor="#5BA7D8" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="480" fill="url(#skyGrad)" rx="24" />
      <circle cx="500" cy="90" r="90" fill="url(#sunGlow)" />

      <path d="M0 300 Q320 260 640 300 L640 480 L0 480 Z" fill="#EDE1CE" opacity="0.7" />
      <path d="M0 345 Q320 315 640 345 L640 480 L0 480 Z" fill="#3E5670" opacity="0.9" />
      <path
        d="M40 395 Q320 372 600 395"
        stroke="#F3E9DA"
        strokeWidth="6"
        strokeDasharray="26 22"
        fill="none"
        opacity="0.55"
      />

      <ellipse cx="330" cy="410" rx="230" ry="20" fill="#0B1B2B" opacity="0.18" />

      <g transform="translate(90,205)">
        <path
          d="M6 150 C-6 150 -8 128 4 122 L18 96 C26 78 46 66 68 63 L102 59 C118 40 148 26 182 24 L296 22 C332 22 366 34 392 58 L428 96 C450 100 468 116 468 138 C468 148 460 156 448 156 L36 156 C22 156 12 154 6 150 Z"
          fill="url(#bodyGrad)"
        />
        <path
          d="M132 100 L166 62 C182 48 204 40 228 38 L288 37 C312 37 334 46 350 62 L384 100 Z"
          fill="url(#windowGrad)"
          opacity="0.9"
        />
        <line x1="248" y1="38" x2="248" y2="100" stroke="#102A43" strokeWidth="4" />
        <rect x="18" y="118" width="440" height="10" rx="5" fill="#F3E9DA" opacity="0.85" />
        <rect x="4" y="132" width="30" height="10" rx="4" fill="#FBF8F3" />
        <rect x="440" y="132" width="30" height="10" rx="4" fill="#F04E3E" opacity="0.85" />

        <circle cx="118" cy="160" r="42" fill="#17212B" />
        <circle cx="118" cy="160" r="20" fill="#F3E9DA" />
        <circle cx="118" cy="160" r="7" fill="#17212B" />
        <circle cx="374" cy="160" r="42" fill="#17212B" />
        <circle cx="374" cy="160" r="20" fill="#F3E9DA" />
        <circle cx="374" cy="160" r="7" fill="#17212B" />
      </g>

      <g opacity="0.55">
        <rect x="500" y="170" width="16" height="60" rx="4" fill="#5BA7D8" />
        <rect x="530" y="150" width="14" height="80" rx="4" fill="#5BA7D8" />
      </g>
    </svg>
  );
}
