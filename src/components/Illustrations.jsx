// Original vector artwork (no external images, no licensing concerns).
// Everything here is ILLUSTRATIVE — it is not a photo of the company's plant or products.

// Builds an SVG path for a gear with the given number of teeth.
function gearPath(cx, cy, rOuter, rInner, teeth) {
  const pts = []
  const step = (Math.PI * 2) / teeth
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    const q = step / 4
    pts.push([cx + rInner * Math.cos(a - q * 1.6), cy + rInner * Math.sin(a - q * 1.6)])
    pts.push([cx + rOuter * Math.cos(a - q * 0.8), cy + rOuter * Math.sin(a - q * 0.8)])
    pts.push([cx + rOuter * Math.cos(a + q * 0.8), cy + rOuter * Math.sin(a + q * 0.8)])
    pts.push([cx + rInner * Math.cos(a + q * 1.6), cy + rInner * Math.sin(a + q * 1.6)])
  }
  return 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z'
}

const bigGear = gearPath(0, 0, 210, 180, 18)
const midGear = gearPath(0, 0, 120, 100, 12)

// Large factory / press-line scene used behind the hero text.
export function HeroArt() {
  const windows = []
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 14; c++) {
      windows.push(
        <rect
          key={`${r}-${c}`}
          className="win"
          style={{ animationDelay: `${((r * 14 + c) % 7) * 0.7}s` }}
          x={80 + c * 52}
          y={606 + r * 30}
          width="26"
          height="14"
          rx="2"
        />,
      )
    }
  }

  return (
    <svg
      className="hero-art"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Illustration of a sheet metal manufacturing plant with a press line"
    >
      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#071733" />
          <stop offset="1" stopColor="#12356a" />
        </linearGradient>
        <linearGradient id="ha-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8ea3c2" />
          <stop offset="1" stopColor="#3a4f73" />
        </linearGradient>
        <linearGradient id="ha-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a2146" />
          <stop offset="1" stopColor="#061228" />
        </linearGradient>
        <radialGradient id="ha-glow" cx="0.75" cy="0.55" r="0.6">
          <stop offset="0" stopColor="#3c78c9" stopOpacity="0.45" />
          <stop offset="1" stopColor="#3c78c9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="800" fill="url(#ha-sky)" />
      <rect width="1440" height="800" fill="url(#ha-glow)" />

      {/* slow rotating gears */}
      <g transform="translate(1180 250)" opacity="0.13">
        <path className="spin-slow" d={bigGear} fill="none" stroke="#fff" strokeWidth="3" />
        <circle r="60" fill="none" stroke="#fff" strokeWidth="3" />
      </g>
      <g transform="translate(960 120)" opacity="0.1">
        <path className="spin-rev" d={midGear} fill="none" stroke="#fff" strokeWidth="3" />
        <circle r="38" fill="none" stroke="#fff" strokeWidth="3" />
      </g>

      {/* far skyline: sawtooth factory roofs and chimneys */}
      <g fill="#0f2a55" opacity="0.9">
        <path d="M0 560 L0 470 L90 520 L90 470 L180 520 L180 470 L270 520 L270 470 L360 520 L360 560Z" />
        <rect x="396" y="360" width="26" height="200" />
        <rect x="392" y="352" width="34" height="10" />
        <rect x="470" y="400" width="22" height="160" />
        <path d="M520 560 L520 480 L610 530 L610 480 L700 530 L700 480 L790 530 L790 560Z" />
        <rect x="830" y="380" width="24" height="180" />
        <rect x="826" y="372" width="32" height="10" />
        <path d="M880 560 L880 470 L970 520 L970 470 L1060 520 L1060 560Z" />
      </g>
      <g fill="#d62828" opacity="0.9">
        <rect x="392" y="352" width="34" height="4" />
        <rect x="826" y="372" width="32" height="4" />
      </g>

      {/* main plant building */}
      <g>
        <path d="M40 760 L40 590 L130 540 L130 590 L220 540 L220 590 L310 540 L310 590 L400 540 L400 590 L490 540 L490 590 L580 540 L580 590 L670 540 L670 590 L760 540 L760 590 L850 540 L850 590 L940 540 L940 590 L1030 540 L1030 760Z"
          fill="#10336a" />
        <path d="M40 590 L1030 590" stroke="#1c4382" strokeWidth="2" />
        <g fill="#f5c76b" opacity="0.55">{windows}</g>
        <rect x="470" y="690" width="130" height="70" fill="#071733" />
        <rect x="470" y="690" width="130" height="6" fill="#d62828" />
      </g>

      {/* sheet-metal press machine */}
      <g transform="translate(1050 330)">
        <rect x="0" y="40" width="220" height="30" rx="4" fill="url(#ha-steel)" />
        <rect x="14" y="70" width="44" height="318" fill="url(#ha-steel)" />
        <rect x="162" y="70" width="44" height="318" fill="url(#ha-steel)" />
        <rect x="-10" y="388" width="240" height="26" rx="4" fill="#2b3f63" />
        <rect x="50" y="-20" width="120" height="62" rx="6" fill="#4d6592" />
        <rect x="95" y="-48" width="30" height="30" fill="#2b3f63" />
        <rect x="96" y="70" width="28" height="74" fill="#c9d4e6" />
        <rect x="64" y="144" width="92" height="22" rx="3" fill="#d62828" />
        <rect x="58" y="300" width="104" height="30" fill="#2b3f63" />
        <path d="M70 296 Q110 270 150 296 L150 300 L70 300Z" fill="#dbe4f2" />
        <circle cx="30" cy="54" r="5" fill="#d62828" />
      </g>

      {/* ground + conveyor with stamped parts */}
      <rect y="760" width="1440" height="40" fill="url(#ha-ground)" />
      <rect x="760" y="738" width="680" height="12" rx="6" fill="#26406c" />
      <g fill="#c9d4e6">
        <path className="part part-a" d="M0 0 h54 q10 0 10 10 v6 h-74 v-6 q0 -10 10 -10z" transform="translate(1290 722)" />
        <path className="part part-b" d="M0 0 h54 q10 0 10 10 v6 h-74 v-6 q0 -10 10 -10z" transform="translate(1290 722)" />
        <path className="part part-c" d="M0 0 h54 q10 0 10 10 v6 h-74 v-6 q0 -10 10 -10z" transform="translate(1290 722)" />
      </g>
      <rect y="798" width="1440" height="2" fill="#d62828" />
    </svg>
  )
}

// Representative product drawings. Each returns a 240x160 SVG.
const frameProps = {
  viewBox: '0 0 240 160',
  role: 'img',
  className: 'product-art',
}

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`m-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e9eef6" />
        <stop offset="0.55" stopColor="#9fb0cc" />
        <stop offset="1" stopColor="#5b7199" />
      </linearGradient>
      <linearGradient id={`n-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1d4585" />
        <stop offset="1" stopColor="#0b1f3f" />
      </linearGradient>
    </defs>
  )
}

const arts = {
  fender: (
    <svg {...frameProps} aria-label="Illustration of a curved two-wheeler fender">
      <Defs id="f" />
      <path d="M22 112 C34 40 120 22 218 92 L208 104 C128 54 62 70 46 118Z" fill="url(#m-f)" />
      <path d="M46 118 C62 70 128 54 208 104 L214 112 C130 66 70 84 56 124Z" fill="#40557d" />
      <path d="M60 78 C100 52 150 56 190 84" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
      <circle cx="84" cy="96" r="4" fill="#0b1f3f" />
      <circle cx="160" cy="92" r="4" fill="#0b1f3f" />
      <rect x="20" y="132" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
  drawn: (
    <svg {...frameProps} aria-label="Illustration of a deep-drawn metal cup">
      <Defs id="d" />
      <ellipse cx="120" cy="124" rx="68" ry="12" fill="#0b1f3f" opacity=".18" />
      <path d="M62 54 L74 118 Q120 138 166 118 L178 54Z" fill="url(#m-d)" />
      <ellipse cx="120" cy="54" rx="58" ry="14" fill="#dfe7f3" />
      <ellipse cx="120" cy="54" rx="42" ry="9" fill="#2b3f63" />
      <ellipse cx="120" cy="54" rx="68" ry="17" fill="none" stroke="#8ea3c2" strokeWidth="5" />
      <path d="M80 76 L88 112" stroke="#fff" strokeOpacity=".7" strokeWidth="4" strokeLinecap="round" />
      <rect x="20" y="140" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
  assembly: (
    <svg {...frameProps} aria-label="Illustration of a bolted bracket assembly">
      <Defs id="a" />
      <rect x="30" y="94" width="180" height="26" rx="3" fill="url(#m-a)" />
      <path d="M62 94 V40 H92 V94Z" fill="url(#m-a)" />
      <path d="M148 94 V52 H178 V94Z" fill="url(#m-a)" />
      <rect x="104" y="60" width="32" height="34" rx="3" fill="url(#n-a)" />
      {[48, 76, 162, 192].map((x) => (
        <circle key={x} cx={x} cy="107" r="5" fill="#0b1f3f" />
      ))}
      <circle cx="77" cy="58" r="5" fill="#d62828" />
      <circle cx="163" cy="68" r="5" fill="#d62828" />
      <rect x="20" y="136" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
  frame: (
    <svg {...frameProps} aria-label="Illustration of a fabricated steel frame">
      <Defs id="r" />
      <g fill="none" stroke="url(#m-r)" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round">
        <path d="M44 120 V44 H196 V120Z" />
        <path d="M44 44 L196 120M196 44 L44 120" strokeWidth="6" />
        <path d="M44 82 H196" strokeWidth="6" />
      </g>
      {[[44, 44], [196, 44], [44, 120], [196, 120], [120, 82]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#0b1f3f" />
      ))}
      <circle cx="120" cy="82" r="3" fill="#d62828" />
      <rect x="20" y="138" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
  cabinet: (
    <svg {...frameProps} aria-label="Illustration of a telecom cabinet and tower">
      <Defs id="c" />
      <rect x="52" y="30" width="86" height="106" rx="4" fill="url(#n-c)" />
      <rect x="60" y="38" width="70" height="90" rx="2" fill="none" stroke="#8ea3c2" strokeWidth="2" />
      {[50, 60, 70].map((y) => (
        <path key={y} d={`M72 ${y} H118`} stroke="#8ea3c2" strokeWidth="3" strokeLinecap="round" />
      ))}
      <rect x="112" y="92" width="10" height="22" rx="2" fill="#c9d4e6" />
      <circle cx="68" cy="116" r="3" fill="#d62828" />
      <g stroke="url(#m-c)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M184 22 L158 136M184 22 L210 136M168 96 H200M162 118 H206M176 62 H192" />
        <path d="M168 96 L200 118M200 96 L168 118M176 62 L192 96M192 62 L176 96" strokeWidth="2.5" />
      </g>
      <circle cx="184" cy="20" r="4" fill="#d62828" />
      <rect x="20" y="140" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
  bracket: (
    <svg {...frameProps} aria-label="Illustration of a pressed and coated bracket">
      <Defs id="b" />
      <path d="M44 108 L44 52 Q44 40 56 40 L100 40 L100 64 L72 64 L72 108Z" fill="url(#n-b)" />
      <path d="M100 40 L196 40 Q208 40 208 52 L208 108 L180 108 L180 64 L100 64Z" fill="url(#n-b)" />
      <path d="M44 108 H208 V120 H44Z" fill="#12356a" />
      <circle cx="58" cy="114" r="3.5" fill="#d62828" />
      <circle cx="194" cy="114" r="3.5" fill="#d62828" />
      <circle cx="150" cy="52" r="5" fill="#9fb0cc" />
      <path d="M58 46 L96 46" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 46 L190 46" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
      <rect x="20" y="136" width="200" height="4" rx="2" fill="#d62828" />
    </svg>
  ),
}

export function ProductArt({ name }) {
  return arts[name] || null
}
