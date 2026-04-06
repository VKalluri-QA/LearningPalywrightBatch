// Browser Execution Planner
// You have an array of all supported browsers and another array of temporarily blocked browsers. Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.


// Input:
// allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]

// Output:
// { runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }