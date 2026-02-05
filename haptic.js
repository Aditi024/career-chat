/* Enhanced Haptic Feedback Patterns for iOS */

// Haptic feedback utility with different patterns
const HapticFeedback = {
    // Light tap - for user actions
    light: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10);
        }
    },
    
    // Medium tap - for confirmations
    medium: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(15);
        }
    },
    
    // Success pattern - for completed actions
    success: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([10, 50, 10]);
        }
    },
    
    // Notification pattern - for incoming messages/answers
    notification: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([15, 50, 15]);
        }
    },
    
    // Subtle pulse - for typing indicator
    pulse: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([8, 40, 8]);
        }
    },
    
    // Selection - for button taps
    selection: () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(12);
        }
    }
};

// Make it globally available
window.HapticFeedback = HapticFeedback;

// Add haptic to typing indicator appearance
document.addEventListener('DOMContentLoaded', () => {
    // Observer to detect when typing indicator is added
    const messagesContainer = document.getElementById('chatMessages');
    if (messagesContainer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.id === 'typingIndicator') {
                        // Subtle pulse when typing indicator appears
                        HapticFeedback.pulse();
                        
                        // Audio feedback for iOS
                        if (window.UnifiedHaptic) {
                            window.UnifiedHaptic.trigger('pulse');
                        }
                    }
                });
            });
        });
        
        observer.observe(messagesContainer, {
            childList: true,
            subtree: false
        });
    }
});
