const MATRICS = ["(з-с-ц)", "л", "(п-б)", "(т-д)'", "(ч-ш-щ-ж)", "(ф-в)", "н", "м", "(к-х-г-ґ)", "р"];

const letters = [];

const numberOfWords = 20;

for (let index = 10; index <= numberOfWords; index++) {
  const l = convertNumToString(index);
  const newItem = {
    num: index,
    leters: l,
  };
  letters.push(newItem);
}

function convertNumToString(params) {
  const a = params.toString().split("").map(Number);
  return createString(a);
}

function createString(params) {
  const b = params.map((el) => {
    return (el = MATRICS[el]);
  });
  return b.join(" - ");
}
console.log(letters);
