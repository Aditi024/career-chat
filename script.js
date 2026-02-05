// CV Knowledge Base - Updated from Profile.pdf
const cvData = {
    name: "Aditi Sharma",
    title: "Senior Product Designer",
    currentCompany: "Salesforce",
    email: "aditisharma.connect@gmail.com",
    website: "www.aditi.work",
    linkedin: "www.linkedin.com/in/aditiatwork",
    summary: "Skilled product designer with over 7 years of experience making a difference in people's lives by creating engaging and impactful digital experiences through user-centered design processes, teamwork, and innovative problem-solving.",
    
    education: [
        {
            degree: "Master's degree, Interaction Design",
            school: "Boston University",
            year: "2019",
            focus: ["Interaction Design", "Graphic design"]
        },
        {
            degree: "Bachelor of Design, Visual Communication",
            school: "Symbiosis International University",
            year: "2014"
        }
    ],
    
    skills: {
        topSkills: [
            "User Flows",
            "Design Systems",
            "Typography"
        ],
        design: [
            "Product design",
            "User experience design",
            "User interface design",
            "Interaction design",
            "Motion design",
            "Wire-framing",
            "Prototyping",
            "Information architecture",
            "Research",
            "Usability testing",
            "Journey mapping",
            "Service design",
            "Behavioral science in UX"
        ],
        tools: [
            "Figma",
            "Sketch",
            "Principle",
            "Adobe Creative Suite",
            "Protopie",
            "Origami Studio"
        ],
        team: [
            "Sprint/Workshop Facilitation",
            "Design Mentorship",
            "Recruitment and interviewing"
        ]
    },
    
    certifications: [
        "Scrum Product Owner Certified (SPOC)"
    ],
    
    awards: [
        "Constantin Alajalov Scholarship",
        "Best Technical Product"
    ],
    
    experience: [
        {
            role: "Senior Product Designer",
            company: "Salesforce",
            location: "Greater Bengaluru Area",
            period: "July 2025 - Present",
            duration: "8 months",
            achievements: [
                "Designing Agentic Knowledge experiences, shaping how AI understands context, gaps, and confidence in answers"
            ]
        },
        {
            role: "Lead Product Designer - Consumer",
            company: "AliveCor",
            location: "Bangalore",
            period: "October 2021 - May 2025",
            duration: "3 years 8 months",
            achievements: [
                "Spearheaded high-impact projects on the consumer team that contributed to user growth, business expansion, and revenue generation for the core product",
                "Designed a user-type-focused onboarding experience to improve navigation success rates by 25% and boost feature engagement by 30%",
                "Reduced KardiaCare churn by 18% with UX improvements, personalized engagement, and streamlined renewals, boosting retention and revenue",
                "Implemented UX strategies centred in behavioural science for the larger design team such as outcome-based design, habit formation",
                "Created 'north star' designs to drive discussions and gain buy-in from leadership and stakeholders"
            ]
        },
        {
            role: "Product Designer",
            company: "Walmart Labs",
            location: "San Bruno, California",
            period: "August 2019 - September 2021",
            duration: "2 years 2 months",
            achievements: [
                "Led end-to-end design and research support for 5+ Walmart supply chain platforms, assisting 150k warehouse personnel in getting their jobs done more efficiently",
                "Overall 24% decrease in warehouse errors, across US-Canada-Mexico supply chain, which resulted in saving $1.2M in labour costs per annum",
                "Closely collaborating with product owners, managers and developers across various time zones to devise roadmaps, product vision and business processes"
            ]
        },
        {
            role: "User Experience Designer",
            company: "Mailchimp",
            location: "Greater Atlanta Area",
            period: "May 2018 - August 2018",
            duration: "4 months",
            achievements: [
                "Collaborated with lead cross-functional teams to create MailChimp's new system rollout for several multichannel projects and Customer Experience Platform"
            ]
        },
        {
            role: "UX Design",
            company: "EF Education First",
            location: "Greater Boston Area",
            period: "September 2018 - December 2018",
            duration: "4 months",
            achievements: [
                "Designed and prototyped 'Trip' portal web app for EF Go Ahead Tours along with collaborating with a cross functional team",
                "Led various stakeholder workshops to get internal buy-in on design concepts"
            ]
        },
        {
            role: "User Experience Designer",
            company: "Snapdeal",
            location: "Mumbai Area, India",
            period: "January 2017 - July 2017",
            duration: "7 months",
            achievements: [
                "Interface design (UX and UI) for the mobile app and the desktop site",
                "Collaborated with lead designers and illustrators to revamp Snapdeal's brand narrative"
            ]
        },
        {
            role: "User Experience Designer",
            company: "Tata CLiQ",
            location: "Mumbai Area, India",
            period: "January 2016 - January 2017",
            duration: "1 year 1 month",
            achievements: [
                "Ideation, design and production for the product launch across multiple platforms",
                "Highlights – Progressive Web Application for mobile, Visual Systems mobile and desktop"
            ]
        },
        {
            role: "Visual Design Lead",
            company: "Jabong",
            location: "Mumbai",
            period: "April 2014 - November 2015",
            duration: "1 year 8 months",
            achievements: [
                "Led visual design initiatives for leading fashion e-commerce platform"
            ]
        }
    ],
    
    community: [
        {
            role: "ODD Fellow",
            organization: "On Deck Design",
            period: "June 2021 - Present",
            duration: "4 years 9 months",
            description: "Continuous community for experienced designers who want to accelerate their careers and become confident leaders through professional development and access to a trusted network of peers"
        }
    ]
};

// Question answering logic
function answerQuestion(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Current role / Salesforce
    if (lowerQuestion.includes('current') || lowerQuestion.includes('present') || lowerQuestion.includes('now') || lowerQuestion.includes('salesforce')) {
        const current = cvData.experience[0];
        return `Aditi is currently a ${current.role} at ${current.company} in ${current.location} (since ${current.period}).\n\nShe's designing Agentic Knowledge experiences, shaping how AI understands context, gaps, and confidence in answers.`;
    }
    
    // Education
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('university') || lowerQuestion.includes('school')) {
        let answer = "Aditi's educational background:\n\n";
        cvData.education.forEach(edu => {
            answer += `• ${edu.degree} from ${edu.school}\n`;
        });
        return answer;
    }
    
    // Skills
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('tool') || lowerQuestion.includes('expertise') || lowerQuestion.includes('proficient')) {
        let answer = "Aditi's skills and expertise:\n\n";
        answer += "Top Skills: " + cvData.skills.topSkills.join(", ") + "\n\n";
        answer += "Design: " + cvData.skills.design.slice(0, 6).join(", ") + ", and more.\n\n";
        answer += "Tools: " + cvData.skills.tools.join(", ");
        return answer;
    }
    
    // Walmart Labs
    if (lowerQuestion.includes('walmart')) {
        const walmart = cvData.experience[2];
        return `At ${walmart.company} (${walmart.period}), Aditi was a ${walmart.role} where she:\n\n• Led end-to-end design and research support for 5+ Walmart supply chain platforms, assisting 150k warehouse personnel\n• Overall 24% decrease in warehouse errors across US-Canada-Mexico supply chain\n• Resulted in saving $1.2M in labour costs per annum\n• Closely collaborated with product owners, managers and developers across various time zones`;
    }
    
    // Alivecor
    if (lowerQuestion.includes('alivecor') || lowerQuestion.includes('previous')) {
        const alivecor = cvData.experience[1];
        return `At ${alivecor.company} (${alivecor.period}), Aditi was a ${alivecor.role} where she:\n\n• Spearheaded high-impact projects contributing to user growth and revenue generation\n• Designed onboarding experience improving navigation success by 25% and feature engagement by 30%\n• Reduced KardiaCare churn by 18% with UX improvements\n• Implemented UX strategies based on behavioural science`;
    }
    
    // Experience/Work history
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('career') || lowerQuestion.includes('background')) {
        let answer = "Aditi has over 7 years of experience in product design:\n\n";
        cvData.experience.slice(0, 5).forEach(exp => {
            answer += `• ${exp.role} at ${exp.company} (${exp.period})\n`;
        });
        return answer;
    }
    
    // Achievements/Metrics
    if (lowerQuestion.includes('achievement') || lowerQuestion.includes('metric') || lowerQuestion.includes('impact') || lowerQuestion.includes('result')) {
        return `Key achievements:\n\n• 25% improvement in navigation success rates (AliveCor)\n• 30% boost in feature engagement (AliveCor)\n• 18% reduction in churn (AliveCor)\n• 24% decrease in warehouse errors (Walmart Labs)\n• $1.2M savings in labour costs per annum (Walmart Labs)\n• Currently designing AI knowledge experiences at Salesforce`;
    }
    
    // Companies
    if (lowerQuestion.includes('company') || lowerQuestion.includes('companies') || lowerQuestion.includes('where') || lowerQuestion.includes('worked')) {
        const companies = cvData.experience.map(exp => exp.company).slice(0, 6).join(", ");
        return `Aditi has worked at leading tech and e-commerce companies:\n\n${companies}, and more.`;
    }
    
    // Location
    if (lowerQuestion.includes('location') || lowerQuestion.includes('based')) {
        return `Aditi is currently based in Greater Bengaluru Area, India. She has also worked in San Bruno (Walmart Labs), Atlanta (Mailchimp), Boston (EF Education First), and Mumbai (Tata CliQ, Jabong, Snapdeal).`;
    }
    
    // Contact
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
        return `You can reach Aditi at:\n• Email: ${cvData.email}\n• Website: ${cvData.website}\n• LinkedIn: ${cvData.linkedin}`;
    }
    
    // Photo/Picture
    if (lowerQuestion.includes('photo') || lowerQuestion.includes('picture') || lowerQuestion.includes('look like') || lowerQuestion.includes('see you') || lowerQuestion.includes('your face') || lowerQuestion.includes('show me')) {
        // Return special marker for photo
        return 'SHOW_PHOTO';
    }
    
    // Summary/About
    if (lowerQuestion.includes('about') || lowerQuestion.includes('who') || lowerQuestion.includes('summary')) {
        return `${cvData.summary}\n\nCurrently: ${cvData.experience[0].role} at ${cvData.experience[0].company}`;
    }
    
    // Certifications
    if (lowerQuestion.includes('certification') || lowerQuestion.includes('certified')) {
        return `Certifications:\n• ${cvData.certifications.join('\n• ')}\n\nAwards:\n• ${cvData.awards.join('\n• ')}`;
    }
    
    // Years of experience
    if (lowerQuestion.includes('year') || lowerQuestion.includes('how long')) {
        return "Aditi has over 7 years of experience in product design, starting in 2014. She's worked at major companies including Salesforce, AliveCor, Walmart Labs, Mailchimp, and leading e-commerce platforms.";
    }
    
    // Default response
    return "I can help you learn about Aditi's career! Try asking about:\n• Current role at Salesforce\n• Education background\n• Skills and tools\n• Experience at specific companies (Walmart Labs, AliveCor, etc.)\n• Achievements and metrics\n• Certifications and awards\n• Contact information\n• Photo (ask 'Can I see your photo?')";
}

// Chat functions
function addMessage(text, isSent = false, imageUrl = null) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    
    // Add image if provided
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'message-image';
        img.alt = "Aditi Sharma";
        img.onerror = function() {
            console.error('Failed to load image:', imageUrl);
            this.style.display = 'none';
        };
        img.onload = function() {
            console.log('Image loaded successfully:', imageUrl);
        };
        bubble.appendChild(img);
    }
    
    // Add text if provided
    if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        bubble.appendChild(p);
    }
    
    const time = document.createElement('div');
    time.className = 'message-time';
    const now = new Date();
    time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.appendChild(bubble);
    messageDiv.appendChild(time);
    messagesContainer.appendChild(messageDiv);
    
    // Smooth scroll to bottom with iOS native feel
    setTimeout(() => {
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
    
    // Haptic feedback - different patterns for sent vs received
    if (window.navigator && window.navigator.vibrate) {
        if (isSent) {
            // Light single tap for user's message
            window.navigator.vibrate(10);
        } else {
            // Double tap pattern for incoming answer (feels more responsive)
            window.navigator.vibrate([15, 50, 15]);
        }
    }
    
    // Audio feedback for iOS (works when vibration doesn't)
    if (window.UnifiedHaptic) {
        if (isSent) {
            window.UnifiedHaptic.trigger('light');
        } else {
            window.UnifiedHaptic.trigger('notification');
        }
    }
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message received';
    typingDiv.id = 'typingIndicator';
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    bubble.appendChild(typing);
    
    typingDiv.appendChild(bubble);
    messagesContainer.appendChild(typingDiv);
    
    setTimeout(() => {
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const question = input.value.trim();
    
    if (!question) return;
    
    // Haptic feedback
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
    
    // Audio feedback for iOS
    if (window.UnifiedHaptic) {
        window.UnifiedHaptic.trigger('medium');
    }
    
    // Add user message
    addMessage(question, true);
    input.value = '';
    
    // Blur input on mobile to hide keyboard
    if (window.innerWidth <= 393) {
        input.blur();
    }
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking time
    setTimeout(() => {
        removeTypingIndicator();
        const answer = answerQuestion(question);
        
        // Add haptic feedback right before showing answer
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([10, 30, 10]); // Preview vibration
        }
        
        // Audio preview for iOS
        if (window.UnifiedHaptic) {
            window.UnifiedHaptic.trigger('pulse');
        }
        
        // Small delay for haptic to register before message appears
        setTimeout(() => {
            // Check if answer is a photo request
            if (answer === 'SHOW_PHOTO') {
                console.log('Photo request detected, showing photo');
                addMessage("Here's my photo!", false, window.ADITI_PHOTO || 'aditi-photo.jpg');
            } else {
                addMessage(answer);
            }
        }, 50);
    }, 1000 + Math.random() * 1000);
}

function askQuestion(question) {
    const input = document.getElementById('messageInput');
    
    // Haptic feedback
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
    
    // Audio feedback for iOS
    if (window.UnifiedHaptic) {
        window.UnifiedHaptic.trigger('selection');
    }
    
    input.value = question;
    sendMessage();
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Handle input focus/blur for iOS keyboard
function handleInputFocus() {
    const messagesContainer = document.getElementById('chatMessages');
    setTimeout(() => {
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 300);
}

function handleInputBlur() {
    // Reset viewport on iOS when keyboard closes
    window.scrollTo(0, 0);
}

// Prevent zoom on iOS when focusing input
function preventIOSZoom() {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        viewport.setAttribute('content', 
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        );
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('chatMessages');
    
    // Set header avatar from embedded photo
    const headerAvatar = document.getElementById('headerAvatar');
    if (headerAvatar && window.ADITI_PHOTO) {
        headerAvatar.src = window.ADITI_PHOTO;
    }
    
    // Add event listeners for iOS-specific behaviors
    input.addEventListener('focus', handleInputFocus);
    input.addEventListener('blur', handleInputBlur);
    
    // Prevent iOS zoom
    preventIOSZoom();
    
    // Auto-focus on desktop only
    if (window.innerWidth > 393) {
        input.focus();
    }
    
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            messagesContainer.scrollTo({
                top: messagesContainer.scrollHeight,
                behavior: 'smooth'
            });
        }, 300);
    });
    
    // Smooth scroll on touch devices
    if ('ontouchstart' in window) {
        messagesContainer.style.webkitOverflowScrolling = 'touch';
    }
});
