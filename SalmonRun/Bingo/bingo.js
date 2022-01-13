
// The content of the squares.
// Make sure there are 25, separated by newlines, within the backticks below.
// Blank lines are ignored.
var strings = `

Dying to a missile while climbing a wall
69 egg total
Lessers push Steelhead out of your shot
Bad Scrapper turn
Someone dies during tide change

Aggressive revive
Disconnect in Wave 1
Everyone dies when you're out killing a Stinger
Same special 3 games in a row
10 egg Goldie is killed away from basket

Last up during Rush
Eel blocks Splashdown
Free
666 Power Eggs
Night wave/high tide spam

Uncoordinated squidbag
Shitty Mothership Stingray
Flyfish spawns in the same spot you just killed one
Last one to low tide says "This way!"
Basket gushers opened first during Seek

AFK when the match starts
WUT/Agent name
Egg guarding
Baby Stinger
Maws gets a double

`;

// Nothing else below needs to be edited!

// Ignore stray right clicks within the page.
document.addEventListener('contextmenu', event => event.preventDefault());

// Get the array of square elements.
var squares = document.getElementsByTagName('td');

// The defined highlight colors.
var orange = 'rgba(251, 92, 3, 0.5)'; // for left clicks
var green = 'rgba(23, 168, 3, 0.5)'; // for right clicks
var clear = 'rgba(0, 0, 0, 0)';

for (var element of squares) {
    // For each square, set or clear the highlight color on left/right clicks.
    element.addEventListener('click', function(e) {
        var color = orange;
        if (e.target.style.backgroundColor == orange) {
            color = clear;
        }
        e.target.style.backgroundColor = color;
    }, false);
    element.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        var color = green;
        if (e.target.style.backgroundColor == green) {
            color = clear;
        }
        e.target.style.backgroundColor = color;
    }, false);
}

// Set the inner text for each square to the defined strings from above.
strings = strings.split(/[\r\n]+/);
for (var i = 0; i < 25; i++) {
    squares[i].innerText = strings[i + 1];
}

