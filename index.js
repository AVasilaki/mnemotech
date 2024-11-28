const MATRICS = ["з-с-ц", "л", "п-б", "т-д", "ч-ш-щ-ж", "ф,в", "Н", "м", "к,х,г,ґ", "р"];

const letters = [
  {
    num: 1,
    letters: "л",
  },
  {
    num: 2,
    letters: "п,б",
  },
  {
    num: 3,
    letters: "т,д",
  },
  {
    num: 4,
    letters: "ч,ш,щ,ж",
  },
  {
    num: 5,
    letters: "Ф,в",
  },
  {
    num: 6,
    letters: "Н",
  },
  {
    num: 7,
    letters: "м",
  },
  {
    num: 8,
    letters: "к,х,г,ґ",
  },
  {
    num: 9,
    letters: "р",
  },
  {
    num: 0,
    letters: "з,с,ц",
  },
];

const numberOfWords = 20;
for (let index = 10; index <= numberOfWords; index++) {
  const l = convertNumToString(index);
  const newItem = {
    num: index,
    leters: l,
  };
  letters.push(newItem);
  // console.log(newItem);

  const element = letters[index];
  console.log(element);
}

function convertNumToString(params) {
  const a = params.toString().split("").map(Number);
  const b = a.map((el, i, arr) => {
    console.log(el);
    console.log(MATRICS[i + 1].split());
    return (el = MATRICS[el]);
    console.log(arr);
    // for (let index = 0; index < a.length; index++) {
    //   a[index] = MATRICS[index];
    // }
  });
  return b;
  console.log(b);
}
