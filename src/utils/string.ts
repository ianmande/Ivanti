export function completeText(str: string, value: string, position: 'leading' | 'trailing' = 'leading') {
  if (str.includes(value)) {
    return str;
  }
  if (position === 'leading') {
    return `${value}${capitalize(str)}`;
  }
  return `${str}${capitalize(value)}`;
}

export function parseLiterals(literals: TemplateStringsArray) {
  return literals.join('');
}

function capitalize(str: string) {
  return str.replace(/\b\w/g, substr => substr.toUpperCase());
}
