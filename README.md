# iMessage Career Chat

An interactive iOS 17-style iMessage chat application where hiring managers can ask questions about Aditi Sharma's career, experience, and skills.

## Features

- 🎨 Authentic iOS 17 iMessage UI with dark mode
- 💬 Interactive chat interface with typing animations
- 📱 Native iOS interactions and gestures
- ⚡ Quick question buttons with haptic feedback
- 🤖 AI-powered responses based on CV and Profile data
- 🔤 SF Pro Display & SF Pro Text fonts
- ✨ Glass morphism effects and smooth spring animations
- 📲 PWA support - Add to Home Screen for native app feel
- ⌨️ Smart keyboard handling on mobile
- 🔄 Momentum scrolling with iOS physics
- 📳 **Haptic feedback for every answer:**
  - Android: Physical vibration via Vibration API
  - iOS: Audio haptic via Web Audio API (subtle click sounds)

## Live Demo

**Production URL:** https://imessage-career-chat-9pbk3ggvp-aditi024s-projects.vercel.app

### For Best Experience:

**On iOS (iPhone/iPad):**
1. Open in Safari
2. **Unmute your device** and set volume to 30-40%
3. Tap anywhere to enable audio feedback
4. Ask a question - you'll hear subtle "tick" sounds for haptic-like feedback
5. Try asking "Can I see your photo?" to see Aditi's photo
6. Optional: Add to Home Screen for fullscreen experience

**On Android:**
1. Open in Chrome or Firefox
2. Ask a question - you'll feel vibration haptic feedback
3. Works immediately, no setup needed

## Updated Information

The app now includes:
- **Latest role:** Senior Product Designer at Salesforce (July 2025 - Present)
- **Updated experience:** 7+ years in product design
- **Enhanced CV data:** Based on Profile.pdf with complete work history
- **Certifications:** Scrum Product Owner Certified (SPOC)
- **Awards:** Constantin Alajalov Scholarship, Best Technical Product

## Design Features

### iOS 17 Authentic Styling
- Pure black background (#000000)
- SF Pro fonts (Display & Text variants)
- iOS blue (#007AFF) for sent messages
- Dark gray (#2C2C2E) for received messages
- Glass morphism with backdrop blur
- Precise Apple-standard spacing and typography

### Components
- Status bar simulation
- Translucent header with blur effect
- Message bubbles with proper iOS radius (20px with 6px tail)
- Typing indicator animation
- Quick question pills
- Glass-effect input bar

## Deployment

### Quick Deploy
```bash
vercel --prod --yes
```

### Files Structure
```
.
├── index.html       # Main HTML with iOS meta tags
├── styles.css       # iOS 17 iMessage styling
├── fonts.css        # SF Pro font definitions
├── script.js        # Chat logic and updated CV data
├── vercel.json      # Vercel configuration
├── .vercelignore    # Excludes large files (.dmg, .fig, .pdf)
└── README.md        # This file
```

## Local Development

To run locally:

```bash
npx serve .
```

Or use any static file server:
- `python -m http.server 8000`
- `npx http-server`

## CV Data Sources

- `Profile.pdf` - Latest LinkedIn profile with Salesforce role
- `Aditi_Sharma_CV (1).pdf` - Detailed CV with metrics
- iOS 17 iMessage UI Kit (Community).fig - Design reference

## Questions the App Can Answer

- Current role at Salesforce
- Work experience at AliveCor, Walmart Labs, Mailchimp, etc.
- Educational background (Boston University MFA, Symbiosis BFA)
- Skills: User Flows, Design Systems, Typography
- Achievements and metrics (25% improvement, 18% churn reduction, $1.2M savings)
- Certifications and awards
- Contact information
- **Photo** - Ask "Can I see your photo?" or "Show me your picture"

## Technology

- Pure HTML, CSS, JavaScript
- SF Pro fonts via web CDN
- iOS design system standards
- Vercel for deployment

## License

MIT
