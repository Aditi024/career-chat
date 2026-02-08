# GitHub Authentication Setup Guide

## Quick Fix: Push to GitHub

You need to authenticate with GitHub to push your code. Here are the steps:

### Step 1: Create a GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `iMessage Career Chat`
4. Select scopes:
   - ✅ **repo** (full control)
5. Click **"Generate token"**
6. **COPY THE TOKEN** - you'll only see it once!

### Step 2: Push Your Code

Open Terminal and run these commands:

```bash
cd /Users/aditi.sharma2/Documents/Cursor/iMessage

# When prompted for password, paste your Personal Access Token
git push -u origin main
```

When it asks for:
- **Username**: `Aditi024`
- **Password**: Paste your Personal Access Token (not your GitHub password!)

### Step 3: Verify on GitHub

After pushing, check: https://github.com/Aditi024/career-chat

You should see all your files including `photo-embed.js`

### Step 4: Trigger Vercel Redeploy

Once code is on GitHub:
1. Go to: https://vercel.com/aditi024s-projects/imessage-career-chat
2. Click **"Deployments"**
3. Your latest commit should auto-deploy
4. Or click **"Redeploy"** on the latest deployment

## Alternative: If GitHub is too much trouble

You can disconnect GitHub from Vercel and go back to direct deploys:

1. Go to: https://vercel.com/aditi024s-projects/imessage-career-chat/settings/git
2. Click **"Disconnect"**
3. Use `vercel --prod` to deploy directly (like before)

---

**Need help?** Let me know which approach you prefer!
