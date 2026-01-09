function allMethods() {
  return Object.getOwnPropertyNames(Math)
    .filter(prop => typeof Math[prop] === "function")
    .join(", ");
}

alert(allMethods());
