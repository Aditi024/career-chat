# Haptic Feedback Guide

## Overview
The app now includes comprehensive haptic feedback patterns for an authentic iOS native feel.

## Haptic Patterns Implemented

### 1. **User Messages** (When you send)
- **Pattern:** Single short vibration (10ms)
- **Feel:** Light tap
- **Purpose:** Confirms your message was sent

### 2. **Answer Messages** (Every answer received)
- **Pattern:** Double pulse (15ms - pause - 15ms)
- **Feel:** Two quick taps, like a notification
- **Purpose:** Draws attention to the answer appearing
- **Trigger:** Happens when the answer bubble appears

### 3. **Typing Indicator**
- **Pattern:** Subtle pulse (8ms - pause - 8ms)
- **Feel:** Very gentle double tap
- **Purpose:** Indicates AI is "thinking"

### 4. **Button Taps** (Quick question buttons)
- **Pattern:** Medium tap (12ms)
- **Feel:** Crisp single tap
- **Purpose:** Confirms button press

### 5. **Send Button**
- **Pattern:** Light tap (10ms)
- **Feel:** Quick response
- **Purpose:** Immediate feedback on send

## How It Works

### Vibration API
```javascript
window.navigator.vibrate([duration1, pause, duration2, ...])
```

### Pattern Examples
- `vibrate(10)` - Single 10ms vibration
- `vibrate([15, 50, 15])` - Vibrate 15ms, pause 50ms, vibrate 15ms again

## Answer-Specific Haptic Flow

When you ask a question:

1. **Send button tap** → Light haptic (10ms)
2. **Typing indicator appears** → Subtle pulse (8ms-pause-8ms)
3. **Preview haptic** → Double tap (10ms-pause-10ms) *just before answer*
4. **Answer appears** → Notification pattern (15ms-pause-15ms)

**Total:** You get **3 haptic events** per answer:
- When typing starts
- Preview (0.05s before answer)
- When answer appears

## Browser Support

### ✅ Android - Full Haptic Support:
- Chrome - Vibration API ✓
- Firefox - Vibration API ✓
- Samsung Internet - Vibration API ✓

### ✅ iOS - Audio Haptic Support:
- **Vibration API:** ❌ Not supported (Apple restriction)
- **Audio Haptic:** ✅ Works! (Web Audio API)
- Uses subtle audio clicks that mimic haptic feedback
- Requires one user interaction to enable (tap anywhere)

### How It Works on iOS:

Instead of physical vibration, the app uses the **Web Audio API** to generate ultra-short audio "clicks" that feel similar to haptic feedback:

- **Light tap:** 1200Hz, 8ms
- **Medium tap:** 1000Hz, 12ms  
- **Notification:** Two tones (1100Hz + 1300Hz)
- **Pulse:** Gentle double beep (900Hz)

These audio clicks are:
- Very short (8-15ms)
- Played at low volume (15-25%)
- High frequency (sounds like a "tick")
- Synchronized with visual feedback

The result feels surprisingly similar to haptic feedback!

## Testing

### On Android:
1. Open the app in Chrome/Firefox
2. Ask any question
3. Feel the vibration patterns as described above

### On iOS:
1. Open the app in Safari
2. Tap anywhere to enable audio (required for iOS)
3. Ask a question
4. Listen for the subtle "tick" sounds that accompany each action
5. **Tip:** Use headphones or earbuds for best experience
6. Volume should be at comfortable level (not muted)

## Customization

To adjust haptic intensity, modify `haptic.js`:

```javascript
// Stronger notification
notification: () => {
    window.navigator.vibrate([20, 60, 20]); // Longer pulses
}

// Gentler typing indicator
pulse: () => {
    window.navigator.vibrate([5, 30, 5]); // Shorter pulses
}
```

## Files
- `audio-haptic.js` - Web Audio API haptic simulation for iOS
- `haptic.js` - Vibration API patterns for Android
- `script.js` - Integration with chat functions
- `ios-native.js` - Additional touch feedback

## Technical Details

### Web Audio API (iOS Solution)
```javascript
const oscillator = context.createOscillator();
const gainNode = context.createGain();

oscillator.frequency.value = 1100; // Pitch
oscillator.type = 'sine'; // Waveform
gainNode.gain.setValueAtTime(0.25, currentTime); // Volume

// Fade out quickly for "click" effect
gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.015);
```

### Why Audio Works on iOS:
- Web Audio API is fully supported
- No Apple restrictions (unlike Vibration API)
- Can create sounds <20ms that feel like haptics
- Works in Safari and when added to Home Screen
- No battery concerns - sounds are tiny

## Notes
- Haptic patterns are designed to be subtle and non-intrusive
- Answer haptics are intentionally more noticeable (double pulse)
- All haptics respect device settings (silent mode, etc.)
- No battery impact concerns - vibrations are very short (8-20ms)
