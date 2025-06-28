// ===========================================
// COLOR THEME SYSTEM FOR PORTFOLIO WEBSITE
// ===========================================

// This array contains all the different color themes that users can cycle through
// Each theme object now only contains sidebar (box1) background colors
const themes = [
  {
    name: "default", // Theme identifier
    box1: "#0d1117", // GitHub dark background
    box1Gradient: "linear-gradient(to bottom, #0d1117 0%, #161b22 100%)", // Mobile gradient version
  },
  {
    name: "purple-rose",
    box1: "#AA759F", // Purple-rose sidebar
    box1Gradient: "linear-gradient(to bottom, #AA759F 0%, #c48bb7 100%)",
  },
  {
    name: "brown",
    box1: "#8F5536", // Brown sidebar
    box1Gradient: "linear-gradient(to bottom, #8F5536 0%, #a66b4a 100%)",
  },
  {
    name: "red",
    box1: "#AC4142", // Red sidebar
    box1Gradient: "linear-gradient(to bottom, #AC4142 0%, #c55a5a 100%)",
  },
  {
    name: "orange",
    box1: "#D28445", // Orange sidebar
    box1Gradient: "linear-gradient(to bottom, #D28445 0%, #e19a5f 100%)",
  },
  {
    name: "green",
    box1: "#90A959", // Green sidebar
    box1Gradient: "linear-gradient(to bottom, #90A959 0%, #a3bb70 100%)",
  },
  {
    name: "teal",
    box1: "#75B5AA", // Teal sidebar
    box1Gradient: "linear-gradient(to bottom, #75B5AA 0%, #8bc5bc 100%)",
  },
  {
    name: "blue",
    box1: "#6A9FB5", // Blue sidebar
    box1Gradient: "linear-gradient(to bottom, #6A9FB5 0%, #82b3c7 100%)",
  },
];

// This variable keeps track of which theme is currently active
// It starts at 0, which corresponds to the 'default' theme (first in array)
let currentThemeIndex = 0;

// ===========================================
// MAIN THEME SWITCHING FUNCTION
// ===========================================

/**
 * This function is called when the user clicks the question mark (?) icon
 * It cycles through all available themes and applies the next one
 * ONLY affects the sidebar (box1) - no changes to main content or text colors
 *
 * How it works:
 * 1. Calculate the next theme index
 * 2. Get the theme colors
 * 3. Check if we're on mobile or desktop
 * 4. Apply the colors ONLY to the sidebar (box1)
 */
function changeColor() {
  // STEP 1: Move to the next theme in the array
  // The modulo operator (%) ensures we loop back to 0 when we reach the end
  // Example: if currentThemeIndex is 7 and themes.length is 8,
  // then (7 + 1) % 8 = 0, so we go back to the first theme
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // STEP 2: Get the theme object that contains the sidebar colors
  const theme = themes[currentThemeIndex];

  // STEP 3: Find ONLY the sidebar element we need to modify
  // querySelector finds the first element that matches the CSS selector
  const box1 = document.querySelector(".box1"); // The sidebar

  // STEP 4: Check if we're on mobile or desktop
  // On mobile (screen width <= 770px), we use gradient backgrounds
  // On desktop, we use solid colors
  const isMobile = window.innerWidth <= 770;

  // STEP 5: Apply the background colors ONLY to the sidebar (box1)
  if (isMobile) {
    // On mobile, apply the gradient background for visual appeal
    box1.style.background = theme.box1Gradient;
  } else {
    // On desktop, apply the solid background color
    box1.style.backgroundColor = theme.box1;
  }

  // STEP 6: Add smooth transition effects ONLY to the sidebar
  // This makes the color changes animate smoothly instead of jumping instantly
  box1.style.transition = "all 0.5s ease"; // 0.5 second smooth transition

  // NOTE: We deliberately do NOT modify:
  // - box1 text color (keeps original styling)
  // - box2 (main content area) background
  // - box2 text colors
  // - heading colors
  // - paragraph colors
}

// ===========================================
// RESPONSIVE THEME REAPPLICATION
// ===========================================

/**
 * This event listener handles window resizing
 * When the user rotates their phone or resizes the browser window,
 * we need to reapply the current theme because mobile and desktop
 * use different background styles (gradients vs solid colors)
 * ONLY affects the sidebar (box1)
 */
window.addEventListener("resize", () => {
  // Only reapply if we're not on the default theme (index 0)
  if (currentThemeIndex > 0) {
    // Get the current theme
    const theme = themes[currentThemeIndex];

    // Get ONLY the sidebar element
    const box1 = document.querySelector(".box1");

    // Check the new screen size
    const isMobile = window.innerWidth <= 770;

    // Reapply the appropriate background style ONLY to sidebar
    if (isMobile) {
      // Switched to mobile - use gradients
      box1.style.background = theme.box1Gradient;
    } else {
      // Switched to desktop - use solid colors
      box1.style.backgroundColor = theme.box1;
    }
  }
});

// ===========================================
// INITIALIZATION
// ===========================================

/**
 * This event listener waits for the entire HTML document to load
 * before running any code. This ensures all elements exist before
 * we try to manipulate them.
 *
 * DOMContentLoaded fires when the HTML is fully loaded and parsed,
 * but before images and stylesheets finish loading.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Log messages to the browser's developer console
  // Users can see these by pressing F12 and going to the Console tab
  console.log("Portfolio loaded successfully!");
  console.log(
    "Click the question mark (?) icon to change sidebar color themes!"
  );
  console.log(
    "Available sidebar themes:",
    themes.map((t) => t.name).join(", ")
  );

  // You could add more initialization code here if needed
  // For example: setting up other interactive features,
  // loading user preferences, or starting animations
});

// ===========================================
// HOW THE SIMPLIFIED THEME SYSTEM WORKS - SUMMARY
// ===========================================

/*
OVERVIEW:
This simplified theme system allows users to cycle through 8 different sidebar color schemes
by clicking the question mark icon. It ONLY changes the sidebar background color.

WHAT CHANGES:
- Sidebar (box1) background color only
- Smooth transitions for visual appeal

WHAT STAYS THE SAME:
- All text colors remain unchanged
- Main content area (box2) styling is preserved
- Heading colors stay as originally designed
- Paragraph colors remain untouched
- All other styling remains intact

SIDEBAR COLOR PALETTE:
- Default: GitHub dark (#0d1117) - modern dark theme
- Purple-Rose: Soft purple (#AA759F) - elegant and warm
- Brown: Earthy brown (#8F5536) - natural and comfortable
- Red: Bold red (#AC4142) - energetic and attention-grabbing
- Orange: Warm orange (#D28445) - friendly and inviting
- Green: Natural green (#90A959) - calm and refreshing
- Teal: Cool teal (#75B5AA) - modern and sophisticated
- Blue: Classic blue (#6A9FB5) - professional and trustworthy

KEY CONCEPTS:

1. SIMPLIFIED APPROACH:
   - Only modifies sidebar background
   - Preserves all existing text styling
   - No impact on main content area

2. ARRAY INDEXING:
   - Arrays in JavaScript start counting from 0
   - themes[0] = default, themes[1] = purple-rose, themes[2] = brown, etc.

3. MODULO OPERATOR (%):
   - Used to create a circular loop through the themes
   - Example: (7 + 1) % 8 = 0 (goes back to start after reaching end)

4. RESPONSIVE DESIGN:
   - Different styles for mobile vs desktop
   - window.innerWidth tells us the screen size
   - Gradients on mobile, solid colors on desktop

5. MINIMAL DOM MANIPULATION:
   - Only targets .box1 element
   - Preserves all other styling
   - Clean and focused approach

The system is now much simpler and focused - it only changes what you want changed!
To add a new sidebar theme, just add another object with box1 and box1Gradient properties.
*/
