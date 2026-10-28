function cleanText(text) {
  return text.trim();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
}

function formatDisplayName(firstName, lastName) {
  return capitalize(cleanText(firstName)) + " " + capitalize(cleanText(lastName));
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
