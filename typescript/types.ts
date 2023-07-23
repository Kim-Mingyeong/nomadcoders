//player-object type
const player: {
  name: string;
  age?: number; //갖거나 갖지 않도록
} = {
  name: "min",
};

if (player.age && player.age < 10) {
}

//Alias Tpye
type Player = {
  name: string;
  age?: number;
};

const playerNico: Player = {
  name: "nico",
};

const playerMin: Player = {
  name: "min",
  age: 12,
};

//function
//name: string, argument type 지정
//function playerMaker(): Player, 함수 return값의 type 지정
function playerMaker(name: string): Player {
  return {
    name, // = name: name,
  };
}
// = const playerMaker = (name: string): Player => ({ name });

const min = playerMaker("min");
min.age = 23;

//Tuple
const player: [string, number, boolean] = ["min", 1, true];

let a: undefined = undefined;
let b: null = null;

//We Don’t know type
//unknown
let a: unknown;
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toLocaleUpperCase();
}

//void
function hello() {
  console.log("x");
}

//naver
function hello(name: string | number) {
  if (typeof name === "string") {
    name; // name: string
  } else if (typeof name === "number") {
    name; // name: number
  } else {
    name; // name: naver
  }
}
