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
for (let index = 0; index <= 20; index++) {
  if (index > 9) {
    const newItem = {
      num: index,
      leters: "a",
    };
    letters.push(newItem);
    // console.log(newItem);
  }

  const element = letters[index];
  console.log(element);
}
