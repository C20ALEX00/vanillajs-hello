window.onload = function() {
  // array with the words
  let pronoun = ["A", "The"];
  let subject = ["gat ", "jogger ", "dog ", "driver ", " comedian "];
  let action = ["took my ", "therw my ", "yelled at my ", "stole my "];
  let possetion = ["homework ", "toe ", "car "];
  let where = ["on the street ", "in my house ", "in my driveway "];
  // declaring random variables
  let rdm1 = Math.floor(Math.random() * pronoun.length);
  let rdm2 = Math.floor(Math.random() * subject.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    pronoun[rdm1] +
    subject[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
