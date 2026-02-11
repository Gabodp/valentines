# Valentine's Day Interactive Page 💝

A cute and interactive Valentine's Day webpage with dynamic button behavior.

## Features
- 💕 Adorable animated dino character
- 🎯 Interactive "Yes" and "No" buttons
- 📉 "No" button shrinks with each click
- 📈 "Yes" button grows with each "No" click
- 💬 Changing messages on the "No" button
- 🎊 Confetti celebration when "Yes" is clicked
- 📱 Fully responsive design

## Deployment to GitHub Pages

### Quick Setup (3 steps):

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `valentines` (or any name you prefer)
   - Make it Public
   - Do NOT initialize with README

2. **Push your code**
   ```bash
   cd /Users/gabrieldelpino/Documents/valentines
   git init
   git add .
   git commit -m "Initial commit: Valentine's Day page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/valentines.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/valentines/`

## Local Testing

Open `index.html` in your browser to test locally.

## Customization

- **Change messages**: Edit the `noMessages` array in `script.js`
- **Adjust colors**: Modify the gradients in `style.css`
- **Replace dino**: Swap `dino.png` with your own image
- **Change question**: Edit the `<h1>` text in `index.html`

## Files
- `index.html` - Main page structure
- `style.css` - Styling and animations
- `script.js` - Interactive behavior
- `dino.png` - Cute dino character
