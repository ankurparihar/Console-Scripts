# Console-Scripts

<hr>

Console-Scripts for website tweaks

Fun experiments I do with websites

***Usage Instructions:***
- Copy script code<br/>
- Open website the script is made for<br/>
- [Open console](https://kb.mailster.co/how-can-i-open-the-browsers-console/)<br/>
- Paste the code<br/>
- Press enter key and see what happens<br/>

***Note:*** Reload the page to stop script execution.<br/>

1. **Medium-Clapper** - If you like a [Medium](https://medium.com/) article so much and want to give maximum claps to author withour long pressing the mouse or touchpad use this script.<br/>

2. **Chrome-Dino** - Tweaks for online dinosaur game [Chromedino](https://chromedino.com). Read cautions carefully.<br/>
 - Target JavaScript for analysis [game.js](https://chromedino.com/js/game.js)<br/>
 - After having a large score a winning prompt will appear.<br/>
 - But if caught IP will be banned.<br/>
 ![Caught screenshot](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/files/ChromeDyn_caught.png)<br/>
 - And hell Ya!!! Next day with careful execution took 1st place of the day.
 ![Win_screenshot](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/files/ChromeDyn_win.png)<br/>

3. **Scroller** - Scroll webpages automatically. Automatic/Manual revert scrolling. Speed increase or decrease.<br/>
- When the page reaches bottom most or up most part, it will automatically start scrolling in reverse.
- To stop scrolling `pix = 0`<br/>
- To increase/decrease speed either `pix = {Some_Value_here}` or `setInterval(scrollPage,{some_value_here})`<br/>
- To revert either `revert()` or `pix = -pix`<br/>

4. **World's Dumbest Game** - make high scores on scoreboard<br/>
- Just use the script before beginning the game and it will ask for initials after pushing the button.<br/>
![initials](https://github.com/ankurparihar/Console-Scripts/blob/master/files/WDG2.png?raw=true)<br/>
- result<br/>
![High Scores](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/files/WDG.png)<br/>

5. **Live Start Page** - unlock pro features of [Live Start Page](https://chrome.google.com/webstore/detail/live-start-page-living-wa/ocggccaacacpienfcgmgcihoombokbbj) extension (Tested clock functionality)<br/>
- Open settings by clicking on extension.<br\>
- Modify the function `isPremium` of `AUTH` object using this code in [Live Start Page.js](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/Live%20Start%20Page.js).<br/>
- The effect will be gone after that session or page reload but the settings changed by this will be enduring.<br/>

6. **Last Knife** - score tweaking for the facebook instant game [Last Knife](https://www.facebook.com/instantgames/1250735238360354)<br/>
- Json file [Last Knife.json](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/Last%20knife.json) describing the breakpoints and variables (Although not covered all)<br/>
- Get high score, unlock all swords, get diamonds and many more.<br/>
![Last Knife.png](https://raw.githubusercontent.com/ankurparihar/Console-Scripts/master/files/Last%20Knife.png)<br/>