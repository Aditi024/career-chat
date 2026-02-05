/* iOS Native Interactions Enhancement Script */

// Add spring animation for messages
function addSpringAnimation(element) {
    element.style.animation = 'messageSpring 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
}

// Add to existing addMessage function
const originalAddMessage = window.addMessage;
if (originalAddMessage) {
    window.addMessage = function(text, isSent) {
        originalAddMessage.call(this, text, isSent);
        const messages = document.querySelectorAll('.message');
        const lastMessage = messages[messages.length - 1];
        if (lastMessage) {
            addSpringAnimation(lastMessage);
        }
    };
}

// Add CSS for spring animation
const style = document.createElement('style');
style.textContent = `
@keyframes messageSpring {
    0% {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
    }
    50% {
        transform: scale(1.02) translateY(-2px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Elastic bounce for send button */
.send-button.clicked {
    animation: buttonBounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes buttonBounce {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.85);
    }
    100% {
        transform: scale(1);
    }
}

/* Press effect for quick buttons */
.quick-btn.pressed {
    animation: buttonPress 0.2s ease-out;
}

@keyframes buttonPress {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
        background: rgba(255, 255, 255, 0.3);
    }
    100% {
        transform: scale(1);
    }
}
`;
document.head.appendChild(style);

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', () => {
    // Send button animation
    const sendButton = document.querySelector('.send-button');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);
        });
    }
    
    // Quick button animations
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-btn')) {
            e.target.classList.add('pressed');
            setTimeout(() => e.target.classList.remove('pressed'), 200);
        }
    });
    
    // Prevent double-tap zoom on iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
});
