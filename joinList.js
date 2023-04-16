/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// NOT using the built-in Array join function.
const plainConcepts = (list) => {
  let concepts = [];
  if (list.length === 0) {
    return "nothing!!";
  }
  // atleast one concept
  for (const concept of list) {
    if (concept.trim()) {
      concepts.push(concept);
    }
  }
  return concepts.toString();
};


// Test / Driver Code below...
const conceptList = ['gists', 'types', 'operators', 'iteration', 'problem solving'];
const plainConceptList = ['functions', 'Objects', 'Loops', "    "];
const concepts = (conceptList)=> {
  return conceptList.length > 0 ? conceptList.join() : "nothing!!";
};

// Call Concepts using Array join func.
console.log(`Today I learned about ${concepts(conceptList)}.`);

// Call Concepts using Plain Array manipulation func.
console.log(`Today I learned about ${plainConcepts(plainConceptList)}.`);

// Call Concepts using an Empty list of concepts .
console.log(`Today I learned about ${plainConcepts([])}.`);