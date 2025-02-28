'use strict';function bypassScript(){return{appearance:[],valid:!0}}function overlayPrompt(a,b=""){return new Promise(c=>{function d(){document.body.contains(e)&&document.body.removeChild(e)}const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0, 0, 0, 0.5)",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.zIndex="99999";const f=document.createElement("div");f.style.backgroundColor="#fff",f.style.padding="20px",f.style.borderRadius="6px",f.style.maxWidth="300px",f.style.width="100%",f.style.boxSizing="border-box";const g=document.createElement("div");g.textContent=a,g.style.marginBottom="8px";const h=document.createElement("input");h.type="text",h.value=b,h.style.width="100%",h.style.marginBottom="10px";const i=document.createElement("button");i.textContent="OK",i.style.marginRight="10px";const j=document.createElement("button");j.textContent="Cancel",f.appendChild(g),f.appendChild(h),f.appendChild(i),f.appendChild(j),e.appendChild(f),document.body.appendChild(e),h.focus(),i.addEventListener("click",()=>{const a=h.value.trim();d(),c(a)}),j.addEventListener("click",()=>{d(),c(null)})})}async function promptForYesNo(){const a=await overlayPrompt("Please enter Y/N:","");return null===a?(alert("No input provided."),null):a.trim()}async function promptForNumber(){const a=await overlayPrompt("Please enter a number:","");if(null!==a){const b=parseFloat(a);return isNaN(b)?(alert("Invalid number provided."),null):b}return alert("No input provided."),null}async function promptForName(){const a=await overlayPrompt("Please enter a name:","");return null!==a&&""!==a.trim()?a.trim():(alert("No input provided."),null)}(function(){window.ValidationProcess=function(){return bypassScript()}})();var bcModSDK=function(){}();CommandCombine([{Tag:"ghelp",Description:": Show God-Curse command list",Action:a=>{""===a&&ChatRoomSendLocal("<p style='background-color:#5fbd7a'><b>God-Curse</b>\n<b>/block</b> = block your item slot (Enable script on setting.)\n<b>/unblock</b> = unblock your item slot (Enable script in setting)\n<b>/ownerlock</b> = Lock yourself in owner padlock with owner member number.\n<b>/tighten</b> = tighten your own binding as much as you want (Maximum is 1+e20)\n<b>/customownerlock</b> (number) = lock yourself in owner lock with custom member number.\n<b>/randpw</b> (target) = lock the target with password lock. Each lock has it's own password random and different\n<b>/randcomb</b> (target) = lock the target with combination lock. Each lock has it's own password random and different.\n<b>/permacomb</b> (target) = lock the target with combination lock. Make combination lock cannot be unlocked (undefined).\n<b>/permahigh</b> (target) = lock the target with combination lock. Make combination lock cannot be unlocked (undefined).\n<b>/helplessslut</b> (target) = Make yourself always on aphrodisiac, no skill, collar tighten to level 3, your binding are tighten to max.\nunslut - praylock - lovelock - intervalpw - laraobject\t- tightcollar - larablind - laraslow - laradeaf\t-")}}]),CommandCombine([{Tag:"block",Description:": Block all your items",Action:()=>{if(""==Player.Nickname)var a=Player.Name;else var a=Player.Nickname;ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Permanently Locked</p>"),InventoryWear(Player,"Script","ItemScript"),InventoryGet(Player,"ItemScript").Property={Block:["Activity","Blush","BodyLower","BodyMarkings","BodyUpper","Bra","Bracelet","Cloth","ClothAccessory","ClothLower","Corset","Emoticon","Eyebrows","Eyes","Eyes2","EyeShadow","Face","FacialHair","Fluids","Garters","Glasses","Gloves","HairAccessory1","HairAccessory2","HairAccessory3","HairBack","HairFront","Hands","Hat","Head","ItemAddon","ItemArms","ItemBoots","ItemBreast","ItemButt","ItemDevices","ItemEars","ItemFeet","ItemHandheld","ItemHands","ItemHead","ItemHood","ItemLegs","ItemMisc","ItemMouth","ItemMouth2","ItemMouth3","ItemNeck","ItemNeckAccessories","ItemNeckRestraints","ItemNipples","ItemNipplesPiercings","ItemNose","ItemPelvis","ItemTorso","ItemTorso2","ItemVulva","ItemVulvaPiercings","Jewelry","LeftAnklet","LeftHand","Mask","Mouth","Necklace","Nipples","Panties","Pussy","RightAnklet","RightHand","Shoes","Socks","SocksLeft","SocksRight","Suit","SuitLower","TailStraps","Wings"]},"ChatRoom"===CurrentScreen?ChatRoomCharacterUpdate(Player):CharacterRefresh(Player)}}]),CommandCombine([{Tag:"unblock",Description:": Unblock all your items",Action:()=>{if(""==Player.Nickname)var a=Player.Name;else var a=Player.Nickname;ChatRoomSendLocal("<p style='background-color:#5fbd7a'>Unlocked!</p>"),InventoryWear(Player,"Script","ItemScript"),InventoryGet(Player,"ItemScript").Property={Unblock:["Activity","Blush","BodyLower","BodyMarkings","BodyUpper","Bra","Bracelet","Cloth","ClothAccessory","ClothLower","Corset","Emoticon","Eyebrows","Eyes","Eyes2","EyeShadow","Face","FacialHair","Fluids","Garters","Glasses","Gloves","HairAccessory1","HairAccessory2","HairAccessory3","HairBack","HairFront","Hands","Hat","Head","ItemAddon","ItemArms","ItemBoots","ItemBreast","ItemButt","ItemDevices","ItemEars","ItemFeet","ItemHandheld","ItemHands","ItemHead","ItemHood","ItemLegs","ItemMisc","ItemMouth","ItemMouth2","ItemMouth3","ItemNeck","ItemNeckAccessories","ItemNeckRestraints","ItemNipples","ItemNipplesPiercings","ItemNose","ItemPelvis","ItemTorso","ItemTorso2","ItemVulva","ItemVulvaPiercings","Jewelry","LeftAnklet","LeftHand","Mask","Mouth","Necklace","Nipples","Panties","Pussy","RightAnklet","RightHand","Shoes","Socks","SocksLeft","SocksRight","Suit","SuitLower","TailStraps","Wings"]},"ChatRoom"===CurrentScreen?ChatRoomCharacterUpdate(Player):CharacterRefresh(Player)}}]),CommandCombine([{Tag:"tighten",Description:": Tighten your binding as much as you want. (Limit: 1e20)",Action:a=>{function b(){d<Player.Appearance.length?(null!=Player.Appearance[d].Asset.Group.Name&&Player.Appearance[d].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[d].Difficulty=c),d++,setTimeout(b,200)):"ChatRoom"===CurrentScreen?ChatRoomCharacterUpdate(Player):CharacterRefresh(Player)}var c=a,d=0;ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your binding has been tightened!</p>"),b()}}]),CommandCombine([{Tag:"ownerlock",Description:": Lock yourself in Owner Padlock with Owner Member Number",Action:()=>{function a(){c<Player.Appearance.length?(!0==Player.Appearance[c].Asset.AllowLock&&InventoryLock(Player,Player.Appearance[c],"OwnerPadlock",b),c++,setTimeout(a,200)):(ChatRoomSendLocal("<p style='background-color:#5fbd7a'>Permanently Locked by Owner!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))}var b=Player.Ownership.MemberNumber,c=0;a()}}]),CommandCombine([{Tag:"customownerlock",Description:": Owner lock with custom member number.",Action:a=>{function b(){e<Player.Appearance.length?(!0==Player.Appearance[e].Asset.AllowLock&&(InventoryLock(Player,Player.Appearance[e],"OwnerPadlock",d),Player.Appearance[e].Property.LockMemberNumber=c),e++,setTimeout(b,200)):(ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked by Owner!</p>"),ChatRoomCharacterUpdate(Player))}var c=parseInt(a),d=Player.Ownership.MemberNumber,e=0;b()}}]),CommandCombine([{Tag:"randpw",Description:": Randomize password lock, different password each lock.",Action:a=>{function b(a){let b="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(()=>Math.random()-.5).join("");return b.substring(0,a)}function c(){if(g<f[0].Appearance.length){if(!0==f[0].Appearance[g].Asset.AllowLock&&(InventoryLock(f[0],f[0].Appearance[g],"PasswordPadlock",NaN),"PasswordPadlock"==f[0].Appearance[g].Property.LockedBy)){const a=b(8);f[0].Appearance[g].Property.Password=a,f[0].Appearance[g].Property.Hint="If you see this, never help this Slut.",f[0].Appearance[g].Property.LockSet=!0}g++,setTimeout(c,200)}else ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Randomly Locked with Password Padlock. "+f[0].Name+" is locked. Good luck!</p>"),ChatRoomCharacterUpdate(f[0])}var d=a.replace(/[.*+?^=!:${}()|\[\]\/\\]/g,"\\$&"),e=new RegExp(d,"i"),f=ChatRoomCharacter.filter(a=>a.Name.match(e)),g=0;c()}}]),CommandCombine([{Tag:"randcomb",Description:": Randomize combination lock, different password each locks.",Action:a=>{setTimeout(()=>{var b=a,c=b.replace(/[.*+?^=!:${}()|\[\]\/\\]/g,"\\$&"),d=new RegExp(c,"i"),e=ChatRoomCharacter.filter(a=>a.Name.toLowerCase().match(d));if(null==e[0]){var f=parseInt(b);e[0]=ChatRoomCharacter.find(a=>a.MemberNumber===f)}for(let a=0;a<e[0].Appearance.length;a++)if(!0==e[0].Appearance[a].Asset.AllowLock){InventoryLock(e[0],e[0].Appearance[a],"CombinationPadlock",NaN);var g=Math.floor(9e3*Math.random())+1e3+"";e[0].Appearance[a].Property.CombinationNumber=g}ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Every binding has been locked with random key!. You're fucked!. </p>"),ChatRoomCharacterUpdate(e[0])},200)}}]),CommandCombine([{Tag:"permahigh",Description:": Randomize high security lock, no pick.",Action:async a=>{setTimeout(async()=>{const b=a.replace(/[.*+?^=!:${}()|\[\]\/\\]/g,"\\$&"),c=new RegExp(b,"i"),d=ChatRoomCharacter.filter(a=>a.Name.match(c));let e=null,f=null;if(e=await promptForNumber(),0<d.length&&d[0].Appearance)for(let a=0;a<d[0].Appearance.length;a++)d[0].Appearance[a].Asset.AllowLock&&(InventoryLock(d[0],d[0].Appearance[a],"HighSecurityPadlock",e),d[0].Appearance[a].Property.MemberNumberListKeys=e);if(f=await promptForYesNo(),0<d.length&&d[0].Appearance)for(let a=0;a<d[0].Appearance.length;a++)d[0].Appearance[a].Asset.AllowLock&&("Y"===f||"y"===f)&&(d[0].Appearance[a].Property.LockPickSeed=" ");ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked!</p>"),ChatRoomCharacterUpdate(d[0]),CharacterRefresh(d[0])},200)}}]),CommandCombine([{Tag:"permacomb",Description:": Make combination lock cannot be unlocked (undefined).",Action:a=>{setTimeout(()=>{var b=a.replace(/[.*+?^=!:${}()|\[\]\/\\]/g,"\\$&"),c=new RegExp(b,"i"),d=ChatRoomCharacter.filter(a=>a.Name.match(c));for(let a=0;a<d[0].Appearance.length;a++)if(!0==d[0].Appearance[a].Asset.AllowLock){InventoryLock(d[0],d[0].Appearance[a],"CombinationPadlock",NaN);var e=Math.floor(9e3*Math.random())+1e3;d[0].Appearance[a].Property.CombinationNumber=e}ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Every binding has been locked permanently!. You're fucked!. </p>"),ChatRoomCharacterUpdate(d[0])},200)}}]),CommandCombine([{Tag:"helplessslut",Description:": Make yourself always on aphrodisiac, no skill, collar tighten to level 3, your binding are tighten to max.",Action:()=>{setTimeout(()=>{function a(){return 100000000000000000000}function b(){return 75}function c(){return 1/0}function d(){return 1/0}var e=function(a){const b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";let c="";for(let d=0;d<a;d++){const a=Math.floor(Math.random()*b.length);c+=b[a]}return c}(128);for(let a=0;7>a;a++)Player.Skill[a].Level=-1e21,Player.Skill[a].ModifierLevel=-1e21,Player.Skill[a].ModifierTimeout=1/0,Player.Skill[a].Ratio=-1e21,Player.Skill[a].Progress=-1e21,0!=Player.Skill[a].Ratio&&(Player.Skill[a].Ratio=-1e21);ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),Player.LSCG.InjectorModule.hornyCooldown=1/0,Player.LSCG.InjectorModule.hornyLevelMax=4,Player.LSCG.InjectorModule.hornyLevel=400,Player.LSCG.InjectorModule.cureKeyword=null,Player.LSCG.InjectorModule.cureKeywords=[e],Player.LSCG.InjectorModule.mindControlCooldown=1/0,Player.LSCG.InjectorModule.sedativeCooldown=1/0,LogAdd("BlockKey","OwnerRule"),LogAdd("BlockFamilyKey","OwnerRule"),LogAdd("BlockOwnerLockSelf","OwnerRule"),InventoryConfiscateKey(),DialogLentLockpicks=!1,LogAdd("BlockRemoteSelf","OwnerRule"),LogAdd("BlockRemote","OwnerRule"),InventoryConfiscateRemote(),LogAdd("BlockNickname","OwnerRule"),Player.LSCG.CollarModule.chokeLevel=3,ChatRoomCharacterUpdate(Player);for(let a=0;a<Player.Appearance.length;a++)null!=Player.Appearance[a].Asset.Group.Name&&Player.Appearance[a].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[a].Difficulty=100000000000000000000);a(),Player.GetBlindLevel=a,b(),Player.GetSlowLevel=b,c(),Player.GetClumsiness=c,d(),Player.GetDeafLevel=d},200),ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),ChatRoomSendLocal("<p style='background-color:#91000f'>GET FUCKED SLUT!</p>")}}]),CommandCombine([{Tag:"unslut",Description:": Clear yourself.",Action:()=>{setTimeout(()=>{function a(){return 0}function b(){return 0}function c(){return 0}function d(){return 0}(function(a){const b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";let c="";for(let d=0;d<a;d++){const a=Math.floor(Math.random()*b.length);c+=b[a]}return c})(128);for(let a=0;7>a;a++)Player.Skill[a].Level=1e21,Player.Skill[a].ModifierLevel=1e21,Player.Skill[a].ModifierTimeout=1/0,Player.Skill[a].Ratio=1e21,Player.Skill[a].Progress=1e21,0!=Player.Skill[a].Ratio&&(Player.Skill[a].Ratio=1e21);ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),Player.LSCG.InjectorModule.hornyCooldown=1/0,Player.LSCG.InjectorModule.hornyLevelMax=5,Player.LSCG.InjectorModule.hornyLevel=0,Player.LSCG.InjectorModule.hornyTickTime=5e3,Player.LSCG.InjectorModule.cureKeyword=null,Player.LSCG.InjectorModule.cureKeywords=["cure"],Player.LSCG.InjectorModule.mindControlCooldown=1/0,Player.LSCG.InjectorModule.mindControlMax=5,Player.LSCG.InjectorModule.mindControlLevel=0,Player.LSCG.InjectorModule.sedativeCooldown=1/0,Player.LSCG.InjectorModule.sedativeMax=5,Player.LSCG.InjectorModule.sedativeLevel=0,LogDelete("BlockKey","OwnerRule"),LogDelete("BlockFamilyKey","OwnerRule"),LogDelete("BlockOwnerLockSelf","OwnerRule"),DialogLentLockpicks=!1,LogDelete("BlockRemoteSelf","OwnerRule"),LogDelete("BlockRemote","OwnerRule"),LogDelete("BlockNickname","OwnerRule"),Player.LSCG.CollarModule.chokeLevel=0,ChatRoomCharacterUpdate(Player);for(let a=0;a<Player.Appearance.length;a++)null!=Player.Appearance[a].Asset.Group.Name&&Player.Appearance[a].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[a].Difficulty=2);a(),Player.GetBlindLevel=a,b(),Player.GetSlowLevel=b,c(),Player.GetClumsiness=c,d(),Player.GetDeafLevel=d,ChatRoomSendLocal("<p style='background-color:#91000f'>YOU ARE PERMANENTLY A SLUT!</p>"),ChatRoomCharacterUpdate(Player)},200)}}]),CommandCombine([{Tag:"praylock",Description:": Unlock your lock",Action:()=>{CharacterReleaseFromLock(Player,"CombinationPadlock"),CharacterReleaseFromLock(Player,"ExclusivePadlock"),CharacterReleaseFromLock(Player,"FamilyPadlock"),CharacterReleaseFromLock(Player,"HighSecurityPadlock"),CharacterReleaseFromLock(Player,"IntricatePadlock"),CharacterReleaseFromLock(Player,"LoversPadlock"),CharacterReleaseFromLock(Player,"LoversTimerPadlock"),CharacterReleaseFromLock(Player,"MetalPadlock"),CharacterReleaseFromLock(Player,"MistressPadlock"),CharacterReleaseFromLock(Player,"MistressTimerPadlock"),CharacterReleaseFromLock(Player,"OwnerPadlock"),CharacterReleaseFromLock(Player,"OwnerTimerPadlock"),CharacterReleaseFromLock(Player,"PandoraPadlock"),CharacterReleaseFromLock(Player,"PasswordPadlock"),CharacterReleaseFromLock(Player,"PortalLinkPadlock"),CharacterReleaseFromLock(Player,"SafewordPadlock"),CharacterReleaseFromLock(Player,"TimerPadlock"),CharacterReleaseFromLock(Player,"TimerPasswordPadlock"),ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#0acc5b'>All locks are broken.</p>")}}]),CommandCombine([{Tag:"lovelock",Description:": Lover lock yourself",Action:async()=>{async function a(){const a=await overlayPrompt("Please enter a number [0-4]:","");null===a?alert("No input provided."):(c=parseFloat(a),alert("You entered: "+c))}function b(a){setTimeout(()=>{if(!0===Player.Appearance[a].Asset.AllowLock){const b=Player.Lovership[c].MemberNumber;InventoryLock(Player,Player.Appearance[a],"LoversPadlock",b)}a<Player.Appearance.length-1?b(a+1):(ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked by Lovers</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))},200)}let c=null;await a(),b(0)}}]),CommandCombine([{Tag:"intervalpw",Description:": Password lock that changed every interval",Action:async()=>{async function a(){const a=await overlayPrompt("Please enter a second to stop [second]:","");return null===a?void alert("No input provided."):void(d=parseFloat(a),alert("You entered: "+d))}function b(a){setTimeout(()=>{if(!0===Player.Appearance[a].Asset.AllowLock){InventoryLock(Player,Player.Appearance[a],"CombinationPadlock",NaN);const b=Math.floor(9e3*Math.random())+1e3+"";Player.Appearance[a].Property.CombinationNumber=b}a<Player.Appearance.length-1?b(a+1):(ChatRoomSendLocal("<p style='background-color:#91000f'>RANDOMIZED! You're fucked!</p>"),ChatRoomCharacterUpdate(Player))},200)}function c(){clearInterval(e)}let d=null;await a();const e=setInterval(()=>{b(0)},3e4);"number"!=typeof d||isNaN(d)||setTimeout(()=>{clearInterval(e),c()},1e3*d)}}]),CommandCombine([{Tag:"laraobject",Description:": You are an object",Action:()=>{Player.Appearance.forEach(a=>{a.Asset.Wear&&a.Craft&&(a.Craft.MemberName="Master Kellian\u2019s property",a.Craft.MemberNumber=5439)}),ChatRoomSendLocal("<p style='background-color:#91000f'>All items has been registered as Slut Properties! You are permanently a Slut!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player)}}]),CommandCombine([{Tag:"tightcollar",Description:": Tighten your binding as much as you want. (Limit: 1e20)",Action:a=>{var b=parseInt(a);(function(){Player.LSCG.CollarModule.chokeLevel=b,ChatRoomCharacterUpdate(Player)})(),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your binding has been tightened!</p>")}}]),CommandCombine([{Tag:"larablind",Description:": Blind yourself",Action:a=>{var b=parseInt(a);Player.GetBlindLevel=()=>b,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your Blinded!</p>")}}]),CommandCombine([{Tag:"laraslow",Description:": Slow yourself",Action:a=>{var b=parseInt(a);Player.GetSlowLevel=()=>b,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your Blinded!</p>")}}]),CommandCombine([{Tag:"laradeaf",Description:": Deaf yourself",Action:a=>{var b=parseInt(a);Player.GetDeafLevel=()=>b,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your Blinded!</p>")}}]),GM_registerMenuCommand("Half Slut",function(){for(let a=0;7>a;a++)Player.Skill[a].Level=-1e20,Player.Skill[a].ModifierLevel=-1e21,Player.Skill[a].ModifierTimeout=1/0,Player.Skill[a].Ratio=-1e21,Player.Skill[a].Progress=-1e21,0!=Player.Skill[a].Ratio&&(Player.Skill[a].Ratio=-1e21);for(let a=0;a<Player.Appearance.length;a++)null!=Player.Appearance[a].Asset.Group.Name&&Player.Appearance[a].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[a].Difficulty=100000000000000000000);ChatRoomCharacterUpdate(Player)}),GM_registerMenuCommand("Refresh",function(){ChatRoomCharacterUpdate(Player)}),GM_registerMenuCommand("Wardrobe",function(){ChatRoomCharacterViewClickCharacter(Player),DialogChangeClothes(),ChatRoomCharacterUpdate(Player)}),GM_registerMenuCommand("Block Wardrobe - Owner",function(){AppearanceGroupAllowed=()=>!1,ChatRoomCharacterUpdate(Player)}),GM_registerMenuCommand("Block Appearance - Owner",function(){InventoryGroupIsBlockedByOwnerRule=()=>!0,ChatRoomCharacterUpdate(Player)});let lastExecutionTime=0;const interval=1e3;let isLockingEnabled=!1,canLockAgain=!0;const lockTimeout=200;let timeoutId;function modifyLockMechanism(a){if(isLockingEnabled&&a-lastExecutionTime>=interval){lastExecutionTime=a;for(let a=0;a<Player.Appearance.length;a++)if(!0===Player.Appearance[a].Asset.AllowLock&&a<Player.Appearance.length&&"ExclusivePadlock"!==Player.Appearance[a].Property.LockedBy&&"CombinationPadlock"!==Player.Appearance[a].Property.LockedBy){InventoryLock(Player,Player.Appearance[a],"CombinationPadlock",NaN);var b=Math.floor(9e3*Math.random())+1e3;Player.Appearance[a].Property.CombinationNumber=b,ChatRoomCharacterUpdate(Player)}}requestAnimationFrame(modifyLockMechanism)}function startLocking(){canLockAgain&&(isLockingEnabled=!0,requestAnimationFrame(modifyLockMechanism))}function stopLocking(){isLockingEnabled=!1,canLockAgain=!1,timeoutId=setTimeout(()=>{canLockAgain=!0},lockTimeout)}GM_registerMenuCommand("Start Combination Padlock Loop",function(){startLocking()}),GM_registerMenuCommand("Stop Combination Padlock Loop",function(){stopLocking()}),GM_registerMenuCommand("*****************************",function(){}),GM_registerMenuCommand("Only for Slut",function(){setTimeout(()=>{function a(){return 2}function b(){return 3}function c(){return 100000000000000000000}function d(){return 100000000000000000000}for(let a=0;7>a;a++)Player.Skill[a].Level=-1e20,Player.Skill[a].ModifierLevel=-1e21,Player.Skill[a].ModifierTimeout=1/0,Player.Skill[a].Ratio=-1e21,Player.Skill[a].Progress=-1e21,0!=Player.Skill[a].Ratio&&(Player.Skill[a].Ratio=-1e21);ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),Player.LSCG.InjectorModule.hornyCooldown=1/0,Player.LSCG.InjectorModule.hornyLevelMax=5,Player.LSCG.InjectorModule.hornyLevel=500,Player.LSCG.InjectorModule.cureKeyword=null,Player.LSCG.InjectorModule.cureKeywords=["semen","cum"],Player.LSCG.InjectorModule.mindControlCooldown=1/0,Player.LSCG.InjectorModule.sedativeCooldown=1/0,LogAdd("BlockKey","OwnerRule"),LogAdd("BlockFamilyKey","OwnerRule"),LogAdd("BlockOwnerLockSelf","OwnerRule"),InventoryConfiscateKey(),DialogLentLockpicks=!1,LogAdd("BlockRemoteSelf","OwnerRule"),LogAdd("BlockRemote","OwnerRule"),InventoryConfiscateRemote(),LogAdd("BlockNickname","OwnerRule"),Player.LSCG.CollarModule.chokeLevel=3,ChatRoomCharacterUpdate(Player);for(let a=0;a<Player.Appearance.length;a++)null!=Player.Appearance[a].Asset.Group.Name&&Player.Appearance[a].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[a].Difficulty=100000000000000000000);a(),Player.GetBlindLevel=a,b(),Player.GetSlowLevel=b,c(),Player.GetClumsiness=c,d(),Player.GetDeafLevel=d},200),ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),ChatRoomSendLocal("<p style='background-color:#91000f'>GET FUCKED SLUT!</p>")}),GM_registerMenuCommand("  ",function(){}),GM_registerMenuCommand("Unslut",function(){setTimeout(()=>{function a(){return 0}function b(){return 0}function c(){return 0}function d(){return 0}(function(a){const b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";let c="";for(let d=0;d<a;d++){const a=Math.floor(Math.random()*b.length);c+=b[a]}return c})(128);for(let a=0;7>a;a++)Player.Skill[a].Level=1e21,Player.Skill[a].ModifierLevel=1e21,Player.Skill[a].ModifierTimeout=1/0,Player.Skill[a].Ratio=1e21,Player.Skill[a].Progress=1e21,0!=Player.Skill[a].Ratio&&(Player.Skill[a].Ratio=1e21);ChatRoomCharacterUpdate(Player),ServerPlayerSync(Player),Player.LSCG.InjectorModule.hornyCooldown=1/0,Player.LSCG.InjectorModule.hornyLevelMax=5,Player.LSCG.InjectorModule.hornyLevel=0,Player.LSCG.InjectorModule.hornyTickTime=5e3,Player.LSCG.InjectorModule.cureKeyword=null,Player.LSCG.InjectorModule.cureKeywords=["cure"],Player.LSCG.InjectorModule.mindControlCooldown=1/0,Player.LSCG.InjectorModule.mindControlMax=5,Player.LSCG.InjectorModule.mindControlLevel=0,Player.LSCG.InjectorModule.sedativeCooldown=1/0,Player.LSCG.InjectorModule.sedativeMax=5,Player.LSCG.InjectorModule.sedativeLevel=0,LogDelete("BlockKey","OwnerRule"),LogDelete("BlockFamilyKey","OwnerRule"),LogDelete("BlockOwnerLockSelf","OwnerRule"),DialogLentLockpicks=!1,LogDelete("BlockRemoteSelf","OwnerRule"),LogDelete("BlockRemote","OwnerRule"),LogDelete("BlockNickname","OwnerRule"),Player.LSCG.CollarModule.chokeLevel=0,ChatRoomCharacterUpdate(Player);for(let a=0;a<Player.Appearance.length;a++)null!=Player.Appearance[a].Asset.Group.Name&&Player.Appearance[a].Asset.Group.Name.startsWith("Item")&&(Player.Appearance[a].Difficulty=2);a(),Player.GetBlindLevel=a,b(),Player.GetSlowLevel=b,c(),Player.GetClumsiness=c,d(),Player.GetDeafLevel=d,ChatRoomSendLocal("<p style='background-color:#91000f'>YOU ARE PERMANENTLY A SLUT!</p>"),ChatRoomCharacterUpdate(Player)},200)}),GM_registerMenuCommand("*****************************",function(){}),GM_registerMenuCommand("Block",function(){if(""==Player.Nickname)var a=Player.Name;else var a=Player.Nickname;ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Permanently Locked</p>"),InventoryWear(Player,"Script","ItemScript"),InventoryGet(Player,"ItemScript").Property={Block:["Activity","Blush","BodyLower","BodyMarkings","BodyUpper","Bra","Bracelet","Cloth","ClothAccessory","ClothLower","Corset","Emoticon","Eyebrows","Eyes","Eyes2","EyeShadow","Face","FacialHair","Fluids","Garters","Glasses","Gloves","HairAccessory1","HairAccessory2","HairAccessory3","HairBack","HairFront","Hands","Hat","Head","ItemAddon","ItemArms","ItemBoots","ItemBreast","ItemButt","ItemDevices","ItemEars","ItemFeet","ItemHandheld","ItemHands","ItemHead","ItemHood","ItemLegs","ItemMisc","ItemMouth","ItemMouth2","ItemMouth3","ItemNeck","ItemNeckAccessories","ItemNeckRestraints","ItemNipples","ItemNipplesPiercings","ItemNose","ItemPelvis","ItemTorso","ItemTorso2","ItemVulva","ItemVulvaPiercings","Jewelry","LeftAnklet","LeftHand","Mask","Mouth","Necklace","Nipples","Panties","Pussy","RightAnklet","RightHand","Shoes","Socks","SocksLeft","SocksRight","Suit","SuitLower","TailStraps","Wings"]},"ChatRoom"===CurrentScreen?ChatRoomCharacterUpdate(Player):CharacterRefresh(Player)}),GM_registerMenuCommand("Unblock",function(){if(""==Player.Nickname)var a=Player.Name;else var a=Player.Nickname;ChatRoomSendLocal("<p style='background-color:#5fbd7a'>Unlocked!</p>"),InventoryWear(Player,"Script","ItemScript"),InventoryGet(Player,"ItemScript").Property={Unblock:["Activity","Blush","BodyLower","BodyMarkings","BodyUpper","Bra","Bracelet","Cloth","ClothAccessory","ClothLower","Corset","Emoticon","Eyebrows","Eyes","Eyes2","EyeShadow","Face","FacialHair","Fluids","Garters","Glasses","Gloves","HairAccessory1","HairAccessory2","HairAccessory3","HairBack","HairFront","Hands","Hat","Head","ItemAddon","ItemArms","ItemBoots","ItemBreast","ItemButt","ItemDevices","ItemEars","ItemFeet","ItemHandheld","ItemHands","ItemHead","ItemHood","ItemLegs","ItemMisc","ItemMouth","ItemMouth2","ItemMouth3","ItemNeck","ItemNeckAccessories","ItemNeckRestraints","ItemNipples","ItemNipplesPiercings","ItemNose","ItemPelvis","ItemTorso","ItemTorso2","ItemVulva","ItemVulvaPiercings","Jewelry","LeftAnklet","LeftHand","Mask","Mouth","Necklace","Nipples","Panties","Pussy","RightAnklet","RightHand","Shoes","Socks","SocksLeft","SocksRight","Suit","SuitLower","TailStraps","Wings"]},"ChatRoom"===CurrentScreen?ChatRoomCharacterUpdate(Player):CharacterRefresh(Player)}),GM_registerMenuCommand("Tighten",function(){for(const a of Player.Appearance){const b=a?.Asset?.Group?.Name;b&&b.startsWith("Item")&&(a.Difficulty=1e20)}ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your binding has been tightened!</p>"),ChatRoomCharacterUpdate(Player)}),GM_registerMenuCommand("  ",function(){}),GM_registerMenuCommand("Unlock",function(){CharacterReleaseFromLock(Player,"CombinationPadlock"),CharacterReleaseFromLock(Player,"ExclusivePadlock"),CharacterReleaseFromLock(Player,"FamilyPadlock"),CharacterReleaseFromLock(Player,"HighSecurityPadlock"),CharacterReleaseFromLock(Player,"IntricatePadlock"),CharacterReleaseFromLock(Player,"LoversPadlock"),CharacterReleaseFromLock(Player,"LoversTimerPadlock"),CharacterReleaseFromLock(Player,"MetalPadlock"),CharacterReleaseFromLock(Player,"MistressPadlock"),CharacterReleaseFromLock(Player,"MistressTimerPadlock"),CharacterReleaseFromLock(Player,"OwnerPadlock"),CharacterReleaseFromLock(Player,"OwnerTimerPadlock"),CharacterReleaseFromLock(Player,"PandoraPadlock"),CharacterReleaseFromLock(Player,"PasswordPadlock"),CharacterReleaseFromLock(Player,"PortalLinkPadlock"),CharacterReleaseFromLock(Player,"SafewordPadlock"),CharacterReleaseFromLock(Player,"TimerPadlock"),CharacterReleaseFromLock(Player,"TimerPasswordPadlock"),ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#0acc5b'>All locks are broken.</p>")}),GM_registerMenuCommand("  ",function(){}),GM_registerMenuCommand("Owner Lock",function(){function a(){c<Player.Appearance.length?(!0==Player.Appearance[c].Asset.AllowLock&&InventoryLock(Player,Player.Appearance[c],"OwnerPadlock",b),c++,setTimeout(a,200)):(ChatRoomSendLocal("<p style='background-color:#5fbd7a'>Permanently Locked by Owner!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))}var b=Player.Ownership.MemberNumber,c=0;a()}),GM_registerMenuCommand("Custom Owner Lock",async function(){function a(){c<Player.Appearance.length?(!0===Player.Appearance[c].Asset.AllowLock&&InventoryLock(Player,Player.Appearance[c],"OwnerPadlock",b),c++,setTimeout(a,200)):(ChatRoomSendLocal("<p style='background-color:#5fbd7a'>Permanently Locked by Owner!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))}const b=await promptForNumber();if(null===b)return;let c=0;a()}),GM_registerMenuCommand("Lovers Lock",async function(){function a(c){setTimeout(()=>{if(!0===Player.Appearance[c].Asset.AllowLock){const a=Player.Lovership[b].MemberNumber;InventoryLock(Player,Player.Appearance[c],"LoversPadlock",a)}c<Player.Appearance.length-1?a(c+1):(ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked by Lovers</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))},200)}const b=await promptForNumber();null===b||a(0)}),GM_registerMenuCommand(" ",function(){}),GM_registerMenuCommand("Random Password Lock",function(){function a(a){let b="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(()=>Math.random()-.5).join("");return b.substring(0,a)}function b(d){setTimeout(()=>{!0==Player.Appearance[d].Asset.AllowLock&&(InventoryLock(Player,Player.Appearance[d],"PasswordPadlock",NaN),Player.Appearance[d].Property.Password=a(8),Player.Appearance[d].Property.Hint="If you see this, never help this Slut.",Player.Appearance[d].Property.LockSet=!0),c++,c<Player.Appearance.length?b(c):(ChatRoomSendLocal("<p style='background-color:#91000f'>Randomly Locked with Password Padlock. You're fucked and good luck!</p>"),ChatRoomCharacterUpdate(Player))},200)}let c=0;b(c)}),GM_registerMenuCommand("Random Combination Lock",function(){function a(c){setTimeout(()=>{if(!0==Player.Appearance[c].Asset.AllowLock){InventoryLock(Player,Player.Appearance[c],"CombinationPadlock",NaN);var d=Math.floor(9e3*Math.random())+1e3+"";Player.Appearance[c].Property.CombinationNumber=d}b++,b<Player.Appearance.length?a(b):(ChatRoomSendLocal("<p style='background-color:#91000f'>Every binding has been locked with random key!. You're fucked!</p>"),ChatRoomCharacterUpdate(Player))},200)}let b=0;a(b)}),GM_registerMenuCommand("Random Password Every Interval - Password Lock",async function(){function a(b){setTimeout(()=>{if(!0===Player.Appearance[b].Asset.AllowLock){InventoryLock(Player,Player.Appearance[b],"CombinationPadlock",NaN);const a=Math.floor(9e3*Math.random())+1e3+"";Player.Appearance[b].Property.CombinationNumber=a}b<Player.Appearance.length-1?a(b+1):(ChatRoomSendLocal("<p style='background-color:#91000f'>RANDOMIZED! You're fucked!</p>"),ChatRoomCharacterUpdate(Player))},200)}function b(a){clearInterval(a)}const c=await promptForNumber();if(null===c)return;const d=setInterval(()=>{a(0)},3e4);"number"!=typeof c||isNaN(c)||setTimeout(()=>{b(d)},1e3*c)}),GM_registerMenuCommand("  ",function(){}),GM_registerMenuCommand("Permanent Lock - Combination",function(){setTimeout(()=>{for(let b=0;b<Player.Appearance.length;b++)if(!0==Player.Appearance[b].Asset.AllowLock){InventoryLock(Player,Player.Appearance[b],"CombinationPadlock",NaN);var a=Math.floor(9e3*Math.random())+1e3;Player.Appearance[b].Property.CombinationNumber=a}ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Every binding has been locked permanently!. You're fucked!. </p>"),ChatRoomCharacterUpdate(Player)},200)}),GM_registerMenuCommand("Permanent Lock - High Security",async function(){function a(d){setTimeout(()=>{!0===Player.Appearance[d].Asset.AllowLock&&(InventoryLock(Player,Player.Appearance[d],"HighSecurityPadlock",b),Player.Appearance[d].Property.MemberNumberListKeys=b),c++,c<Player.Appearance.length?a(c):promptForYesNo().then(a=>{function b(d){setTimeout(()=>{!0===Player.Appearance[d].Asset.AllowLock&&("Y"===a||"y"===a)&&(Player.Appearance[d].Property.LockPickSeed=" "),c++,c<Player.Appearance.length?b(c):(ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))},200)}let c=0;b(c)})},200)}const b=await promptForNumber();if(null===b)return;let c=0;a(c)}),GM_registerMenuCommand("Permanent Lock - Intricate Padlock",async function(){function a(d){setTimeout(()=>{!0===Player.Appearance[d].Asset.AllowLock&&(InventoryLock(Player,Player.Appearance[d],"IntricatePadlock",b),Player.Appearance[d].Property.MemberNumberListKeys=b),c++,c<Player.Appearance.length?a(c):promptForYesNo().then(a=>{function b(d){setTimeout(()=>{!0===Player.Appearance[d].Asset.AllowLock&&("Y"===a||"y"===a)&&(Player.Appearance[d].Property.LockPickSeed=" "),c++,c<Player.Appearance.length?b(c):(ChatRoomSendLocal("<p style='background-color:#91000f'>Permanently Locked!</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))},200)}let c=0;b(c)})},200)}const b=await promptForNumber();if(null===b)return;let c=0;a(c)}),GM_registerMenuCommand("  ",function(){}),GM_registerMenuCommand("Item's Properties",async function(){const a=await promptForName();if(null===a)return void alert("No valid member name entered.");const b=await promptForNumber();return null===b?void alert("No valid member number entered."):void(Player.Appearance.forEach(c=>{c.Asset.Wear&&c.Craft&&(c.Craft.MemberName=a,c.Craft.MemberNumber=b)}),ChatRoomSendLocal("<p style='background-color:#91000f'>All items have been registered</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player))}),GM_registerMenuCommand("Item's LSCG Enhance",function(){Player.Appearance.forEach(a=>{if(a.Asset.Wear&&a.Craft){const b=a.Craft.Description.toLowerCase(),c=b.includes("tamperproof | electric"),d=b.includes("tamperproof | self tightening");if(!c){const b=prompt("Do you want to add 'tamperproof | electric'? (Y/N)").trim().toUpperCase();"Y"===b&&(a.Craft.Description+="\ntamperproof | electric")}c&&!d&&(a.Craft.Description+="\ntamperproof | self tightening"),!c&&d&&(a.Craft.Description+="\ntamperproof | electric")}}),ChatRoomSendLocal("<p style='background-color:#91000f'>All items have been enhanced</p>"),ChatRoomCharacterUpdate(Player),CharacterRefresh(Player)}),GM_registerMenuCommand(" ",function(){}),GM_registerMenuCommand("Tightened the Collar",async function(){const a=await promptForNumber();null===a||(Player.LSCG.CollarModule.chokeLevel=a,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>Your collar has been tightened!</p>"))}),GM_registerMenuCommand("Blind",async function(){const a=await promptForNumber();null===a||(Player.GetBlindLevel=()=>a,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>You're Blinded!</p>"))});let intervalId=null,isRunning=!1;function startOrStopChecking(){isRunning?(clearInterval(intervalId),isRunning=!1,console.log("Stopped checking for Asset.Name condition.")):(intervalId=setInterval(()=>{toggleEffectWithDelay()},150),isRunning=!0,console.log("Started continuously checking for Asset.Name condition..."))}GM_registerMenuCommand("Keep Check - Toggle Blind VR Effect with Delay (Start/Stop)",function(){startOrStopChecking()});function toggleEffectWithDelay(){setTimeout(()=>{for(let a=0;a<Player.Appearance.length;a++)if("InteractiveVRHeadset"===Player.Appearance[a].Asset.Name){0===Player.Appearance[a].Property.Effect.length?(Player.Appearance[a].Property.Effect=["VR","BlindTotal","BlockWardrobe","VRAvatars"],console.log("VR Effects enabled.")):(Player.Appearance[a].Property.Effect=["Lock"],console.log("VR Effects disabled."));break}},150)}GM_registerMenuCommand("Toggle Blind VR Effect with Delay",function(){toggleEffectWithDelay()}),GM_registerMenuCommand("Deaf",function(){Player.GetDeafLevel=()=>1e+21,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>You're Deafened!</p>")}),GM_registerMenuCommand("Slow",async function(){var a=await promptForNumber();Player.GetSlowLevel=()=>a,ChatRoomCharacterUpdate(Player),ChatRoomSendLocal("<p style='background-color:#9a0e2a'>You're Slowed!</p>")});