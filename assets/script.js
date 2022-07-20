// set up text to print, each item in array is new line
var aText = new Array(
  `It was unexpected`,
  `The time when I fell for you`,
  `I was trying to collect the pieces of my broken heart`,
  `Piece by piece`,
  `Emotion by emotion`,
  `Thought by thought`,
  `I wasn't looking for it `,
  `But there were you`,
  `You and your beautiful eyes`,
  `Your silly smile`,
  `And your amazing way to see the world around you`,
  ``,
  `I couldn't help it`,
  `The more I met you, more feelings appeared inside my chest.`,
  `And there was that strange familiar feeling `,
  `That pulled me back to you every single time I tried to run away`,
  `Something told me that I knew you before, from somewhere`,
  `Even if I knew that was the first time we met`,
  ``,
  `And then the memories came back`,
  `And all I wanted to do was run to you`,
  `Pull you in my arms and tell you`,
  `"I'm here", "I'm back" `,
  `All I wanted to feel was you head on my shoulder,`,
  `Your kiss in my forehead`,
  `Your eyes looking at me`,
  `Your hands intertwined with mine`,
  `Your voice close to my ear`,
  `Wispering "you're in home"`,
  ``,
  `I thought I was crazy for feeling this way`,
  `And then you told me you felt in the same way.`,
  `And those fantasies came true`,
  `Your arms around me`,
  `Your lips kissing my forehead`,
  `And you whispered finally`,
  `"You're in home"`,
  ``,
  `I'm coming home`
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();