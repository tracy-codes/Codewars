function meeting(s) {
  // Separate all the names
  // We need to sort by ABC order
  // We need to reformat the names to be (LAST, FIRST) and push them to a new array
  let names = s.split(";");
  let list = names.map((name, idx, array) => {
    let first = name.split(":")[0].toUpperCase();
    let last = name.split(":")[1].toUpperCase();
    return `(${last}, ${first})`;
  });
  let newList = "";
  list.sort().forEach(name => {
    newList += name;
  });
  return newList;
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
console.log(
  meeting(
    "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"
  )
);
console.log(
  meeting(
    "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"
  )
);
