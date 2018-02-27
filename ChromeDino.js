// The experiments and research so far on site https://chromedino.com/
// You will find the tricks for offline version of game on most websites but these are different

// Caution:
// Use vpn or proxy before trying these otherwise your IP will be blocked if they smell a fish
// If several times detected your IP might be blacklisted

// Apart from the dinosaur game we used to play in our chrome browser in free time there is another web version
// Try to tweak it
// They have score boards too.

// Points:
// All the tweaks are done in instance mode.
// Firstly go to site and then open console but don't run the game.
// To activate instance mode run the game once and then you need to pause it otherwise the game will be over soon.
// To pause it click anywhere outside it. Click in console area.
// The canvas is named Runner.
// If you simply run Runner.instance_ in console you will get all the list of variables/methods along their current value/implementation.
// Instance is used as Runner.instance_.{something_goes_here}

// you may put some other values

// To increase speed:
Runner.instance_.currentSpeed = 10;				
// put -1 here and the dinosaur will run backwords. Funny little dino... :)

// To change distance ran:
Runner.instance_.distanceRan = 1000;
// You will get instant score boost which will be value/4


// After this I got this 

// But soon they detected the cheat and then...