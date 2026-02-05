# iOS Audio Haptic Testing Guide

## Important: First-Time Setup

### Step 1: Enable Audio Context
iOS requires a user interaction before playing audio. On first load:

1. **Tap anywhere on the screen** (or tap a quick question button)
2. This activates the Web Audio API
3. You'll now hear audio feedback on all subsequent interactions

### Step 2: Check Volume
- Make sure your iPhone is **not on silent mode**
- Volume should be at 20-50% for best experience
- Audio feedback is subtle by design (quiet "tick" sounds)

## What You'll Hear

### On Every Answer:
1. **Typing starts:** Gentle double-tick (pulse)
2. **Just before answer:** Quick double-beep (preview)
3. **Answer appears:** Distinct two-tone beep (notification) - **most noticeable**

### Other Interactions:
- **Send button:** Single soft click
- **Quick question buttons:** Crisp click
- **Your message sent:** Light tick

## Troubleshooting

### "I don't hear anything"
✅ **Solution:**
1. Unmute your iPhone (flip the physical switch)
2. Increase volume to 30-40%
3. Tap anywhere to re-enable audio
4. Try asking a question

### "Sounds are too quiet"
✅ **Solution:**
- Increase iPhone volume
- Use headphones/earbuds for better audio clarity
- Audio clicks are designed to be subtle (8-15ms duration)

### "Sounds are too loud"
✅ **Solution:**
- Lower iPhone volume slightly
- Audio is set to 15-25% of max volume in code

### "No sound on first tap"
✅ **Expected behavior:**
- First interaction enables audio
- All subsequent taps will have sound

## Best Experience

### Recommended Setup:
- ✅ Volume: 30-40%
- ✅ Not on silent mode
- ✅ Using Safari (not Chrome)
- ✅ Optional: Use AirPods or earbuds for clearer feedback

### Compare to Native:
The audio clicks mimic the feeling of iOS system sounds like:
- Keyboard clicks
- Button taps in Mail/Messages
- System UI interactions

## Technical Notes

### Why Not Vibration?
- Apple blocks `navigator.vibrate()` in Safari
- This is true for both web and PWA (Add to Home Screen)
- Audio is the only viable alternative

### Why Audio Works:
- Web Audio API is fully supported on iOS
- Ultra-short sounds (8-15ms) feel like haptics
- High frequencies (900-1300Hz) sound crisp
- Low volume (15-25%) prevents annoyance

## Testing Checklist

- [ ] Phone not on silent mode
- [ ] Volume at 30-40%
- [ ] Tapped screen once to enable audio
- [ ] Sent a test question
- [ ] Heard notification sound when answer appeared
- [ ] Heard typing indicator pulse
- [ ] Heard button clicks

## URLs
- **Latest deployment:** https://imessage-career-chat-f63cc3zhh-aditi024s-projects.vercel.app
- Test on real iOS device for best results (simulator won't have accurate audio)
