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
 ![Caught screenshot](https://github.com/ankurparihar/Console-Scripts/blob/master/files/ChromeDyn_caught.png)<br/>
 - And hell Ya!!! Next day with careful execution took 1st place of the day.
 ![Win_screenshot](https://github.com/ankurparihar/Console-Scripts/blob/master/files/ChromeDyn_win.png)<br/>

3. **Scroller** - Scroll webpages automatically. Automatic/Manual revert scrolling. Speed increase or decrease.<br/>
- When the page reaches bottom most or up most part, it will automatically start scrolling in reverse.
- To stop scrolling `pix = 0`<br/>
- To increase/decrease speed either `pix = {Some_Value_here}` or `setInterval(scrollPage,{some_value_here})`<br/>
- To revert either `revert()` or `pix = -pix`<br/>
