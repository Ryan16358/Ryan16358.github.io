// ===========================================
// COLOR THEME SYSTEM FOR PORTFOLIO WEBSITE
// ===========================================

// This array contains all the different color themes that users can cycle through
// Each theme object has colors for both the sidebar (box1) and main content (box2)
const themes = [
  {
    name: "default", // Theme identifier
    box1: "#202020", // Sidebar background color (dark gray)
    box1Gradient: "linear-gradient(to bottom, #202020 0%, #2a2a2a 100%)", // Mobile gradient version
    box2: "white", // Main content background (white)
    box2Gradient: "linear-gradient(to bottom, #f8f9fa 0%, white 100%)", // Mobile gradient version
    text1: "white", // Text color for sidebar
    text2: "black", // Text color for main content
  },
  {
    name: "blue",
    box1: "#1e3a8a", // Dark blue sidebar
    box1Gradient: "linear-gradient(to bottom, #1e3a8a 0%, #3b82f6 100%)",
    box2: "#f0f9ff", // Light blue main area
    box2Gradient: "linear-gradient(to bottom, #dbeafe 0%, #f0f9ff 100%)",
    text1: "white",
    text2: "#1e40af", // Dark blue text
  },
  {
    name: "purple",
    box1: "#581c87", // Dark purple sidebar
    box1Gradient: "linear-gradient(to bottom, #581c87 0%, #8b5cf6 100%)",
    box2: "#faf5ff", // Light purple main area
    box2Gradient: "linear-gradient(to bottom, #e9d5ff 0%, #faf5ff 100%)",
    text1: "white",
    text2: "#6b21a8", // Dark purple text
  },
  {
    name: "green",
    box1: "#14532d", // Dark green sidebar
    box1Gradient: "linear-gradient(to bottom, #14532d 0%, #22c55e 100%)",
    box2: "#f0fdf4", // Light green main area
    box2Gradient: "linear-gradient(to bottom, #dcfce7 0%, #f0fdf4 100%)",
    text1: "white",
    text2: "#15803d", // Dark green text
  },
  {
    name: "orange",
    box1: "#9a3412", // Dark orange sidebar
    box1Gradient: "linear-gradient(to bottom, #9a3412 0%, #f97316 100%)",
    box2: "#fff7ed", // Light orange main area
    box2Gradient: "linear-gradient(to bottom, #fed7aa 0%, #fff7ed 100%)",
    text1: "white",
    text2: "#c2410c", // Dark orange text
  },
  {
    name: "dark",
    box1: "#000000", // Pure black sidebar
    box1Gradient: "linear-gradient(to bottom, #000000 0%, #1f1f1f 100%)",
    box2: "#f8f8f8", // Light gray main area
    box2Gradient: "linear-gradient(to bottom, #e5e5e5 0%, #f8f8f8 100%)",
    text1: "white",
    text2: "#000000", // Pure black text
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
 *
 * How it works:
 * 1. Calculate the next theme index
 * 2. Get the theme colors
 * 3. Check if we're on mobile or desktop
 * 4. Apply the colors to both sidebar and main content
 * 5. Update text colors for readability
 */
function changeColor() {
  // STEP 1: Move to the next theme in the array
  // The modulo operator (%) ensures we loop back to 0 when we reach the end
  // Example: if currentThemeIndex is 5 and themes.length is 6,
  // then (5 + 1) % 6 = 0, so we go back to the first theme
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // STEP 2: Get the theme object that contains all the colors
  const theme = themes[currentThemeIndex];

  // STEP 3: Find the HTML elements we need to modify
  // querySelector finds the first element that matches the CSS selector
  const box1 = document.querySelector(".box1"); // The sidebar
  const box2 = document.querySelector(".box2"); // The main content area

  // STEP 4: Check if we're on mobile or desktop
  // On mobile (screen width <= 770px), we use gradient backgrounds
  // On desktop, we use solid colors
  const isMobile = window.innerWidth <= 770;

  // STEP 5: Apply the background colors to the sidebar (box1)
  if (isMobile) {
    // On mobile, apply the gradient background for visual appeal
    box1.style.background = theme.box1Gradient;
  } else {
    // On desktop, apply the solid background color
    box1.style.backgroundColor = theme.box1;
  }
  // Set the text color for the sidebar
  box1.style.color = theme.text1;

  // STEP 6: Apply the background colors to the main content (box2)
  if (isMobile) {
    // On mobile, apply the gradient background
    box2.style.background = theme.box2Gradient;
  } else {
    // On desktop, apply the solid background color
    box2.style.backgroundColor = theme.box2;
  }
  // Set the text color for the main content
  box2.style.color = theme.text2;

  // STEP 7: Update heading colors in the main content area
  // querySelectorAll finds ALL elements that match the selector
  const box2Headings = box2.querySelectorAll("h1, h2, h3, h4");
  // forEach loops through each heading element
  box2Headings.forEach((heading) => {
    // Apply the theme's text color to each heading
    heading.style.color = theme.text2;
  });

  // STEP 8: Update paragraph colors in the main content area
  // Different themes need different shades for optimal readability
  const box2Paragraphs = box2.querySelectorAll("p");
  box2Paragraphs.forEach((p) => {
    // Only update paragraphs inside the extra-content section
    if (p.closest(".extra-content")) {
      // Choose the appropriate color based on the current theme
      // This ternary operator chain chooses darker shades for better contrast
      p.style.color =
        theme.text2 === "#000000"
          ? "#555" // Dark theme gets gray
          : theme.text2 === "#1e40af"
          ? "#1e3a8a" // Blue theme gets darker blue
          : theme.text2 === "#6b21a8"
          ? "#581c87" // Purple theme gets darker purple
          : theme.text2 === "#15803d"
          ? "#14532d" // Green theme gets darker green
          : theme.text2 === "#c2410c"
          ? "#9a3412" // Orange theme gets darker orange
          : "#555"; // Default fallback color
    }
  });

  // STEP 9: Add smooth transition effects
  // These make the color changes animate smoothly instead of jumping instantly
  box1.style.transition = "all 0.5s ease"; // 0.5 second smooth transition
  box2.style.transition = "all 0.5s ease"; // for both boxes
}

// ===========================================
// RESPONSIVE THEME REAPPLICATION
// ===========================================

/**
 * This event listener handles window resizing
 * When the user rotates their phone or resizes the browser window,
 * we need to reapply the current theme because mobile and desktop
 * use different background styles (gradients vs solid colors)
 */
window.addEventListener("resize", () => {
  // Only reapply if we're not on the default theme (index 0)
  if (currentThemeIndex > 0) {
    // Get the current theme
    const theme = themes[currentThemeIndex];

    // Get the elements again
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");

    // Check the new screen size
    const isMobile = window.innerWidth <= 770;

    // Reapply the appropriate background style
    if (isMobile) {
      // Switched to mobile - use gradients
      box1.style.background = theme.box1Gradient;
      box2.style.background = theme.box2Gradient;
    } else {
      // Switched to desktop - use solid colors
      box1.style.backgroundColor = theme.box1;
      box2.style.backgroundColor = theme.box2;
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
  console.log("Click the question mark (?) icon to change color themes!");

  // You could add more initialization code here if needed
  // For example: setting up other interactive features,
  // loading user preferences, or starting animations
});

// ===========================================
// HOW THE THEME SYSTEM WORKS - SUMMARY
// ===========================================

/*
OVERVIEW:
This theme system allows users to cycle through 6 different color schemes
by clicking the question mark icon in the social media section.

KEY CONCEPTS:

1. ARRAY INDEXING:
   - Arrays in JavaScript start counting from 0
   - themes[0] = default, themes[1] = blue, themes[2] = purple, etc.

2. MODULO OPERATOR (%):
   - Used to create a circular loop through the themes
   - Example: (5 + 1) % 6 = 0 (goes back to start after reaching end)

3. DOM MANIPULATION:
   - document.querySelector() finds HTML elements
   - element.style.property modifies CSS properties
   - Changes happen instantly in the browser

4. RESPONSIVE DESIGN:
   - Different styles for mobile vs desktop
   - window.innerWidth tells us the screen size
   - Gradients on mobile, solid colors on desktop

5. EVENT LISTENERS:
   - 'DOMContentLoaded' waits for page to load
   - 'resize' detects when window size changes
   - onclick (in HTML) detects button clicks

6. CONDITIONAL LOGIC:
   - if/else statements choose different behaviors
   - Ternary operators (? :) provide compact conditional choices
   - forEach loops apply changes to multiple elements

The system is designed to be smooth, responsive, and maintainable.
To add a new theme, just add another object to the themes array!
*/
