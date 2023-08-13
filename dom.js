// Function to generate a random sentence
function generateRandomSentence() {
    const subjects = ['The cat', 'A dog', 'An elephant', 'My friend', 'The tree'];
    const verbs = ['jumped', 'ran', 'slept', 'ate', 'swam'];
    const objects = ['over the fence', 'on the grass', 'under the moon', 'a delicious meal', 'to the river'];
    
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    
    return `${randomSubject} ${randomVerb} ${randomObject}.`;
  }
  
  // Generate and display a random sentence
  const randomSentence = generateRandomSentence();
  console.log(randomSentence);
  