let shrimpProfile = [
    { Discord: 'Mouse#4194', Toyhouse: 'https://toyhou.se/MouseDemon', Links: 'https://toyhou.se/MouseDemon/characters', 
Permissions: `NO NSFW/suggestive/fetish art, no romantic ship art with non-consensual "affection," no whitewashing or changing races, no hate art (bigotry, racism, homophobia, etc), no drawing death, no drawing characters physically harming another character (unless specified in their profile that it's okay)
YES to modifying outfits, new outfits, messing with hairstyles, fluffy/wholesome or platonic ship art (ships are listed in my profile), having my characters interact with yours, group/meme art, blood/gore/suffering or other emotional pain (just no death).`, 
Extra: `I always attack back (friendly fire included). 
I'll at least match what you do for me (like full body for full body, character interactions for character interactions, ship art for ship art). 
I'm happy to do chain attacks! (you'll just need to tell me or attack again because otherwise, I'll worry about being bothersome). 
I mostly draw humanoids, but I'll try others if that's what you have. All art loved regardless of style/skill. DMs open for anything. :)`, 
},

    { Discord: 'Hollow.Leaf#9854', Toyhouse:'https://toyhou.se/arias_hollow', Links: 'https://toyhou.se/arias_hollow/characters',
Permissions: `Permissions can be found in full detail on my main profile page here: https://toyhou.se/arias_hollow
The condensed version though is no NSFW or NSFW-adjacent arts, no dub-con or non-con for any kind of physical interaction (even non-sexual and non-romantic coded ones), no bigotry, no death or gore, and no whitewashing, racebending, or genderbending.
But definitely feel free to experiment with new outfits (extra points if they fit the character's described style, unless I guess it's for a comedy piece or AU concept, in which case it might not be as applicable) or mildly alter hair styles (like a character with long hair tying it back differently than normal unless stated somewhere on their sheet that they definitely wouldn't for some reason). Lighthearted, serious, comedic pieces, Pride Art pieces...any tone/style is fine!`,
Extra: `I will do my best to return any attack before the event ends, if time/energy doesn't allow for it I'll probably still informally return the attack at some future date once the energy does allow it.
My hit list too: https://forms.gle/4Xj1AvhvKTcFxwSu8`,
}

]

function clickShrimp() {
    var randomShrimp = _.sample(shrimpProfile);
    console.log(randomShrimp)

}

//MAAAAYBE A LINK
function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}


// RANDOM SHRIMP PROFILE FUNCTION
function randomProfile(shrimpProfile)
{
  
let test = shrimpProfile[Math.floor(Math.random()*shrimpProfile.length)];

let dis = test.Discord
let toy = test.Toyhouse
let toyLink = linkify(toy).replace("C:/", "");

 // Change the node's value by removing the fake path
 //inputNode.value = fileInput.value.replace("C:\\fakepath\\", "");

let beep = `Discord: ${dis} <br><br> Toyhouse: ${toyLink}`

return beep
     
}

//console.log(randomProfile(shrimpProfile));

// Button for Team Shrimp
document.querySelector('#shrimp').addEventListener('click', function () {
    //console.log(randomProfile(shrimpProfile));
    let discordRan = document.querySelector('#proDiscord');
    //discordRan.innerHTML = `Discord: ${shrimpProfile[0].Discord}` 
    console.log(Object.values(randomProfile(shrimpProfile)));
    //discordRan.innerHTML = `Discord: ${Object.values(randomProfile(shrimpProfile))}`;
    discordRan.innerHTML = `Discord: ${JSON.stringify(randomProfile(shrimpProfile)).replace(/["]+/g, '')}`;

    ////TESTING AGAIN
    //console.log(randomProfile(shrimpProfile));
    // let beep = randomProfile(shrimpProfile);
    // let substrings = beep.toString().split(',');
    // console.log(substrings)

})