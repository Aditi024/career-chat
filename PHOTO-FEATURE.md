# Photo Feature

## Overview
The app now displays Aditi's photo when requested by the user.

## How It Works

### Trigger Phrases
Users can ask to see the photo using any of these phrases:
- "Can I see your photo?"
- "Show me your picture"
- "What do you look like?"
- "Can I see you?"
- "Show me your face"
- "Your photo"
- "Your picture"

### Response
The app will:
1. Show typing indicator
2. Display the message "Here's my photo!"
3. Show the photo (IMG_8677.jpeg) in the chat bubble
4. Photo is displayed at max 250px width with rounded corners

### Visual Integration

**Header Avatar:**
- Your photo now appears in the header avatar (circular, 40px)
- Replaces the previous "AS" text initials
- Always visible at the top of the chat

**Chat Bubble Photo:**
- Appears in a gray message bubble (like receiving a message)
- Rounded corners (12px border-radius)
- Max width: 250px (scales nicely on mobile)
- Responsive and touch-friendly

## Styling

### Photo in Messages
```css
.message-image {
    width: 100%;
    max-width: 250px;
    border-radius: 12px;
    display: block;
    margin-bottom: 8px;
}
```

### Avatar Photo
```css
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## iMessage-Style Display
The photo appears exactly like sending a photo in iMessage:
- Shows in a message bubble
- Has timestamp below
- Maintains iOS styling
- Smooth animation on appearance
- Haptic/audio feedback when received

## File
- `IMG_8677.jpeg` - Your photo (included in deployment)
- Automatically optimized by Vercel CDN
- Fast loading on all devices

## Example Usage
**User:** "Can I see your photo?"
**App:** *Shows typing indicator*
**App:** [Photo message bubble with "Here's my photo!" + your photo]

## Mobile Experience
- Photo loads quickly on mobile networks
- Touch-friendly (can be tapped, though no zoom implemented yet)
- Scales perfectly for different screen sizes
- Maintains aspect ratio
