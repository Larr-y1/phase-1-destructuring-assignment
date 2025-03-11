
// --- STRINGS ---

const farmAnimals = "cow horse sheep pig chicken";

// 1. Use destructuring to assign five animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Destructure four traditional animal names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Destructure three traditional animal colors (excluding horse & chicken)
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// --- ARRAYS ---

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 4. Destructure seven rainbow colors using full names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure six colors using initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Destructure only indigo using indg
const [, , , , , indg] = colors;

// --- OBJECTS ---

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink", 
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

// 7. Destructure all properties from muppet
const { muppetName, color, song, job, partner } = muppet; 

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// 8. Destructure song2, song4, nestedJob, and nestedPartner
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
