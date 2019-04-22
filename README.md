# [dx2-battlespeed-calculator](https://github.com/czamp/dx2-battlespeed-calculator)

This app is a tool used to help players of SEGA's [Shin Megami Tensei Dx2 Liberation](https://d2-megaten-l.sega.com/en/) mobile game build in-game teams.

The app calculates the "Battle Speed" statistic—which determines which team goes first in battle—of any 1-4 unit team in the game.

This is useful when planning a future team, and finding out if, when fully maxed out, the units you are planning to develop will meet the speed requirements you have set (i.e., low-speed for Slow PvP teams, fast enough team to always go first in AG50, etc.)

### How to Use

For each character you plan on using in a team:

1. Select your unit's name from the dropdown, and its agility stat at max-level will be loaded. For units under the max level, you can input your own Ag (found in-game).

2. Add any speed % bonuses from brands. Remember to add 15% if using a set of Speed brands.

3. If the unit has the Speedster skill, click the Speedster toggle.


 Optionally, if your selected Dx2 has an agility bonus skill, input its Ag stat buff below.

 Team Battle Speed is displayed below. Although this may differ slightly from the in-game display of battle speed for the same team, **the calculation displayed in this app is correct**. The in-game calculation does not take *Speedster* or *Dx2 Leader Bonuses* into account. As such, in-game battlespeed is not calculated until the player has left the team screen, and started the battle.

 #### About

 Stats from [Dx2 Wiki](http://dx2wiki.com/index.php/Main_Page).

 Built with [React](https://github.com/facebook/react), [Redux](https://github.com/reduxjs/redux), and [Semantic UI](https://github.com/Semantic-Org/Semantic-UI).
