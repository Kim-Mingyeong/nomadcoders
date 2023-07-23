// call signatures type 생성
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

//overloading
// 파라미터의 type이 다를 때
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// 파라미터의 개수가 다를 때
type Add = {
  //c: optional
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// polymorphism

// generics
