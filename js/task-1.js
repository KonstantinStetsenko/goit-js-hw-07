const sum = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${sum}`);

const totalTitle = document.querySelectorAll(".item");

totalTitle.forEach((total) => {
  const titleH2 = total.querySelector("h2");
  console.log(`Category: ${titleH2.textContent}`);
  const sumCategory = total.querySelectorAll("li").length;
  console.log(`Elements: ${sumCategory}`);
});
