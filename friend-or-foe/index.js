function friend(friends) {
  // map through each name in "friends" and return value if name.length >=4 else return false
  return friends.filter(friend => {
    friend.length === 4;
  });
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
