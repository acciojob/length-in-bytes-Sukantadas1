const byteSize = (str) => {
   // Create a Blob object with the input string
  const blob = new Blob([str]);

  // Get the size property of the Blob object (size in bytes)
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
