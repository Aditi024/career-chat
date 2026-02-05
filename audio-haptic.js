/* Audio Haptic Feedback for iOS */

const AudioHaptic = {
    context: null,
    enabled: true,
    
    // Initialize Web Audio API
    init() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.context = new AudioContext();
            return true;
        } catch (e) {
            console.log('Web Audio API not supported');
            return false;
        }
    },
    
    // Play a short click sound
    playClick(frequency = 1000, duration = 10, volume = 0.3) {
        if (!this.enabled || !this.context) return;
        
        try {
            const oscillator = this.context.createOscillator();
            const gainNode = this.context.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.context.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(volume, this.context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration / 1000);
            
            oscillator.start(this.context.currentTime);
            oscillator.stop(this.context.currentTime + duration / 1000);
        } catch (e) {
            console.log('Audio playback failed:', e);
        }
    },
    
    // Different feedback sounds
    light() {
        this.playClick(1200, 8, 0.15);
    },
    
    medium() {
        this.playClick(1000, 12, 0.2);
    },
    
    notification() {
        // Double beep for notifications
        this.playClick(1100, 15, 0.25);
        setTimeout(() => this.playClick(1300, 15, 0.25), 60);
    },
    
    success() {
        // Rising tone
        this.playClick(800, 10, 0.2);
        setTimeout(() => this.playClick(1200, 10, 0.2), 50);
    },
    
    pulse() {
        this.playClick(900, 8, 0.12);
        setTimeout(() => this.playClick(900, 8, 0.12), 40);
    },
    
    selection() {
        this.playClick(1100, 10, 0.18);
    }
};

// Unified haptic system that works on both Android and iOS
const UnifiedHaptic = {
    vibrationSupported: false,
    audioSupported: false,
    
    init() {
        // Check vibration support (Android)
        this.vibrationSupported = 'vibrate' in navigator;
        
        // Initialize audio for iOS
        this.audioSupported = AudioHaptic.init();
        
        console.log('Haptic support:', {
            vibration: this.vibrationSupported,
            audio: this.audioSupported
        });
    },
    
    // Trigger haptic feedback using available method
    trigger(type = 'light') {
        // Try vibration first (Android)
        if (this.vibrationSupported && window.HapticFeedback) {
            if (window.HapticFeedback[type]) {
                window.HapticFeedback[type]();
                return;
            }
        }
        
        // Fall back to audio (iOS)
        if (this.audioSupported && AudioHaptic[type]) {
            AudioHaptic[type]();
        }
    },
    
    // Enable audio haptics (requires user interaction)
    enableAudio() {
        if (!this.audioSupported) {
            AudioHaptic.init();
            this.audioSupported = true;
        }
        
        // Resume audio context if suspended (iOS requirement)
        if (AudioHaptic.context && AudioHaptic.context.state === 'suspended') {
            AudioHaptic.context.resume();
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    UnifiedHaptic.init();
    
    // Enable audio on first user interaction (iOS requirement)
    const enableAudioOnFirstTouch = () => {
        UnifiedHaptic.enableAudio();
        document.removeEventListener('touchstart', enableAudioOnFirstTouch);
        document.removeEventListener('click', enableAudioOnFirstTouch);
    };
    
    document.addEventListener('touchstart', enableAudioOnFirstTouch, { once: true });
    document.addEventListener('click', enableAudioOnFirstTouch, { once: true });
});

// Make it globally available
window.UnifiedHaptic = UnifiedHaptic;
window.AudioHaptic = AudioHaptic;
