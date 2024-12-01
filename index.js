const MATRICS = ["(з-с-ц)", "л", "(п-б)", "(т-д)", "(ч-ш-щ-ж)", "(ф-в)", "н", "м", "(к-х-г-ґ)", "р"];
let numberOfWords = 20;
const letters = [];
// console.log(numberOfWords);
const count = document.querySelector("form");
const table = document.querySelector(".tbody");
console.log(table);

count.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const count1 = form.elements.count.value;
  // console.log(Number(count));
  numberOfWords = Number(count1);
  newItems(numberOfWords);
  const markup = letters
    .map(
      (letter) => ` <tr>
          <td>${letter.num}</td>
          <td></td>
          <td>${letter.leters}</td>
          <td></td>
        </tr>`
    )
    .join("");
  console.log(markup);
  table.insertAdjacentHTML("beforeend", markup);
}

function newItems(count) {
  // console.log("i am", count);
  for (let index = 10; index <= count; index++) {
    // console.log(count);
    const l = convertNumToString(index);
    const newItem = {
      num: index,
      leters: l,
    };
    // console.log(newItem);
    letters.push(newItem);
  }
  // console.log(letters);
}

// for (let index = 10; index <= numberOfWords; index++) {
//   // console.log(count);
//   const l = convertNumToString(index);
//   const newItem = {
//     num: index,
//     leters: l,
//   };
//   letters.push(newItem);
// }
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
