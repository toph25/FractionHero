// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"FractionCore","status":true,"description":"Specialized functions for the game Fraction Hero.","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.25 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.45 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.17 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_BaseParamControl","status":true,"description":"v1.03 Gain control over the method of calculation for base\nparameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.","parameters":{"---MaxHP---":"","MHP Formula":"(base + plus) * paramRate * buffRate + flat","MHP Maximum":"customMax || (user.isActor() ? 9999 : 999999)","MHP Minimum":"customMin || 1","---MaxMP---":"","MMP Formula":"(base + plus) * paramRate * buffRate + flat","MMP Maximum":"customMax || (user.isActor() ? 9999 : 9999)","MMP Minimum":"customMin || 0","---Attack---":"","ATK Formula":"(base + plus) * paramRate * buffRate + flat","ATK Maximum":"customMax || (user.isActor() ? 999 : 999)","ATK Minimum":"customMin || 1","---Defense---":"","DEF Formula":"(base + plus) * paramRate * buffRate + flat","DEF Maximum":"customMax || (user.isActor() ? 999 : 999)","DEF Minimum":"customMin || 1","---M.Attack---":"","MAT Formula":"(base + plus) * paramRate * buffRate + flat","MAT Maximum":"customMax || (user.isActor() ? 999 : 999)","MAT Minimum":"customMin || 1","---M.Defense---":"","MDF Formula":"(base + plus) * paramRate * buffRate + flat","MDF Maximum":"customMax || (user.isActor() ? 999 : 999)","MDF Minimum":"customMin || 1","---Agility---":"","AGI Formula":"(base + plus) * paramRate * buffRate + flat","AGI Maximum":"customMax || (user.isActor() ? 999 : 999)","AGI Minimum":"customMin || 1","---Luck---":"","LUK Formula":"(base + plus) * paramRate * buffRate + flat","LUK Maximum":"customMax || (user.isActor() ? 999 : 999)","LUK Minimum":"customMin || 1","LUK Effect":"Math.max(1.0 + (user.luk - target.luk) * 0.001, 0.0)"}},
{"name":"YEP_X_ClassBaseParam","status":true,"description":"v1.04 (Requires YEP_BaseParamControl) Allow you to use\nformulas for class parameter growth.","parameters":{}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.11 (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Cursor1","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}},
{"name":"YEP_X_ExtMesPack2","status":true,"description":"v1.00 (Requires YEP_MessageCore.js) Adds text codes to display\nvarious game data information for messages.","parameters":{"---Quantity Text Codes---":"","TextCode QI":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar item = $dataItems[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(item)) {\\n  var quantity = $gameParty.numIndependentItems(item);\\n} else {\\n  var quantity = $gameParty.numItems(item);\\n}\\ntext = this.groupDigits(quantity);\"","TextCode QW":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar weapon = $dataWeapons[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(weapon)) {\\n  var quantity = $gameParty.numIndependentItems(weapon);\\n} else {\\n  var quantity = $gameParty.numItems(weapon);\\n}\\ntext = this.groupDigits(quantity);\"","TextCode QA":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar armor = $dataArmors[x];\\nif (Imported.YEP_ItemCore && DataManager.isIndependent(armor)) {\\n  var quantity = $gameParty.numIndependentItems(armor);\\n} else {\\n  var quantity = $gameParty.numItems(armor);\\n}\\ntext = this.groupDigits(quantity);\"","---Compare Text Codes---":"","TextCode Compare":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 24;\\n} else if (x < y) {\\n  var colorId = 25;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare1":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 2;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare2":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 14;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare3":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 3;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare4":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 4;\\n} else if (x < y) {\\n  var colorId = 0;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare5":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 7;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare6":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 25;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare7":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 13;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare8":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 9;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","TextCode Compare9":"\"// Variables:\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\nif (x >= y) {\\n  var colorId = 0;\\n} else if (x < y) {\\n  var colorId = 20;\\n}\\ntext = '\\\\x1bc[' + colorId + ']';\"","---Case Text Codes---":"","TextCode CaseSwitch":"\"// Variables:\\n//   s - The switch ID (number) to be checked.\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\ntext = (s) ? x : y;\"","TextCode CaseEval":"\"// Variables:\\n//   e - The eval code to be checked.\\n//   x - The 1st value inserted into the text code.\\n//   y - The 2nd value inserted into the text code.\\n//   text - The text to be returned.\\n\\ntext = (e) ? x : y;\"","---Actor Param Codes---":"","---Actor Params---":"","TextCode ALvl":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.level;\\ntext = this.groupDigits(value);\"","TextCode AMhp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mhp;\\ntext = this.groupDigits(value);\"","TextCode AHp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hp;\\ntext = this.groupDigits(value);\"","TextCode AHp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMmp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mmp;\\ntext = this.groupDigits(value);\"","TextCode AMp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mp;\\ntext = this.groupDigits(value);\"","TextCode AMp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMtp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.maxTp();\\ntext = this.groupDigits(value);\"","TextCode ATp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tp;\\ntext = this.groupDigits(value);\"","TextCode ATp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode AAtk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.atk;\\ntext = this.groupDigits(value);\"","TextCode ADef":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.def;\\ntext = this.groupDigits(value);\"","TextCode AMat":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mat;\\ntext = this.groupDigits(value);\"","TextCode AMdf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mdf;\\ntext = this.groupDigits(value);\"","TextCode AAgi":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.agi;\\ntext = this.groupDigits(value);\"","TextCode ALuk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.luk;\\ntext = this.groupDigits(value);\"","---Actor XParams---":"","TextCode AHit":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hit;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AEva":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.eva;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACri":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cri;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMrf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mrf;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ACnt":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.cnt;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AHrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.hrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ATrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.trg;\\ntext = Math.floor(value * 100) + '%';\"","---Actor SParams---":"","TextCode ATgr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tgr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AGrd":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.grd;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ARec":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.rec;\\ntext = Math.floor(value * 100) + '%';\"","TextCode APha":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.pha;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ATcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.tcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode APdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.pdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AMdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.mdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AFdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.fdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode AExr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar actor = $gameActors.actor(x);\\nvar value = actor.exr;\\ntext = Math.floor(value * 100) + '%';\"","---Enemy Param Codes---":"","---Enemy Params---":"","TextCode ELvl":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nif (Imported.YEP_EnemyLevels) {\\n  var enemy = $gameTroop.members()[x];\\n  var value = enemy.level;\\n  text = this.groupDigits(value);\\n} else {\\n  text = $gameParty.highestLevel();\\n}\"","TextCode EMhp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mhp;\\ntext = this.groupDigits(value);\"","TextCode EHp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hp;\\ntext = this.groupDigits(value);\"","TextCode EHp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMmp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mmp;\\ntext = this.groupDigits(value);\"","TextCode EMp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mp;\\ntext = this.groupDigits(value);\"","TextCode EMp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMtp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.maxTp();\\ntext = this.groupDigits(value);\"","TextCode ETp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tp;\\ntext = this.groupDigits(value);\"","TextCode ETp%":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tpRate();\\ntext = Math.floor(value * 100) + '%';\"","TextCode EAtk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.atk;\\ntext = this.groupDigits(value);\"","TextCode EDef":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.def;\\ntext = this.groupDigits(value);\"","TextCode EMat":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mat;\\ntext = this.groupDigits(value);\"","TextCode EMdf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mdf;\\ntext = this.groupDigits(value);\"","TextCode EAgi":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.agi;\\ntext = this.groupDigits(value);\"","TextCode ELuk":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.luk;\\ntext = this.groupDigits(value);\"","TextCode EExp":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.exp();\\ntext = this.groupDigits(value);\"","TextCode EGold":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.gold();\\ntext = this.groupDigits(value);\"","---Enemy XParams---":"","TextCode EHit":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hit;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EEva":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.eva;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECri":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cri;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMev":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mev;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMrf":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mrf;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ECnt":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.cnt;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EHrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.hrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mrg;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ETrg":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.trg;\\ntext = Math.floor(value * 100) + '%';\"","---Enemy SParams---":"","TextCode ETgr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tgr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EGrd":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.grd;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ERec":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.rec;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EPha":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.pha;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode ETcr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.tcr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EPdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.pdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EMdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.mdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EFdr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.fdr;\\ntext = Math.floor(value * 100) + '%';\"","TextCode EExr":"\"// Variables:\\n//   x - The value inserted into the text code.\\n//   text - The string to be shown in the message window.\\n\\nvar enemy = $gameTroop.members()[x];\\nvar value = enemy.exr;\\ntext = Math.floor(value * 100) + '%';\""}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.12 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.12 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.04 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"0","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_SegmentedGauges","status":true,"description":"v1.01 Segment up your gauges to make them easier to read.","parameters":{"---Segments---":"","HP Gauge Segments":"200","MP Gauge Segments":"20","TP Gauge Segments":"10","---Status Menu Core---":"","EXP Gauge Segments":"100","Param Gauge Segments":"100"}},
{"name":"RMMVNodeP1","status":true,"description":"A plugin to read and write files using Node.js","parameters":{}},
{"name":"SRD_NameInputUpgrade","status":true,"description":"Improves upon the \"Name Input\" screen for your RPG Maker MV game.","parameters":{"Keyboard Mode?":"true","Display Message":"Input a name.","Display Message 2":"Press ENTER when ready.","Help Window Width":"400","Help Window Height":"this.fittingHeight(2)","== Display Options ==":"","Show Face":"true","Background Image":"","Scale Background?":"true","Name Opacity":"255","Keyboard Opacity":"255","Help Opacity":"255","Underline Color":"0","Text Color":"0","Name Display X":"0","Name Display Y":"100","Help Window X":"0","Help Window Y":"40","= Custom Characters =":"","LATIN 1 Row 1":"A,B,C,D,E,a,b,c,d,e","LATIN 1 Row 2":"F,G,H,I,J,f,g,h,i,j","LATIN 1 Row 3":"K,L,M,N,O,k,l,m,n,o","LATIN 1 Row 4":"P,Q,R,S,T,p,q,r,s,t","LATIN 1 Row 5":"U,V,W,X,Y,u,v,w,x,y","LATIN 1 Row 6":"Z,[,],^,_,z,{,},|,~","LATIN 1 Row 7":"0,1,2,3,4,!,#,$,%,&","LATIN 1 Row 8":"5,6,7,8,9,(,),*,+,-","LATIN 1 Row 9":"/,=,?,<,>,:,;, ,Page,OK","LATIN 2 Row 1":"Á,É,Í,Ó,Ú,á,é,í,ó,ú","LATIN 2 Row 2":"À,È,Ì,Ò,Ù,à,è,ì,ò,ù","LATIN 2 Row 3":"Â,Ê,Î,Ô,Û,â,ê,î,ô,û","LATIN 2 Row 4":"Ä,Ë,Ï,Ö,Ü,ä,ë,ï,ö,ü","LATIN 2 Row 5":"Ā,Ē,Ī,Ō,Ū,ā,ē,ī,ō,ū","LATIN 2 Row 6":"Ã,Å,Æ,Ç,Ð,ã,å,æ,ç,ð","LATIN 2 Row 7":"Ñ,Õ,Ø,Š,Ŵ,ñ,õ,ø,š,ŵ","LATIN 2 Row 8":"Ý,Ŷ,Ÿ,Ž,Þ,ý,ÿ,ŷ,ž,þ","LATIN 2 Row 9":"Ĳ,Œ,ĳ,œ,ß,«,»,,Page,OK"}},
{"name":"SRD_TimerUpgrade","status":true,"description":"Gives developers move control over the visual and mechanical aspects of the game's timer system.","parameters":{"Timer Format":"%2:%3:%4","Timer Position":"TOP","Timer Start SE":"","Timer Expire SE":"Bell3, 80, 100, 0","Pause Color":"#FFFF00","Use Background":"true","== Auto Settings ==":"","Use Auto-Stop":"true","Use Auto-Pause":"true","Auto-Pause Opacity":"120","Use Auto-Abort":"true","== Label Settings ==":"","Default Label":"","Label Font Size":"22","== Font Settings ==":"","Timer Font":"GameFont","Timer Font Size":"32","Timer Italic":"false","Timer Text Color":"#ffffff","Timer Outline Color":"rgba(0, 0, 0, 0.5)"}}
];