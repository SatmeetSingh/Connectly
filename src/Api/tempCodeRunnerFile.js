 let occursA = 0;
  let occursB = 0;
  let occursC = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (occursA < k && s[i] === 'a') ||
      (occursB < k && s[i] === 'b') ||
      (occursC < k && s[i] === 'c')
    ) {
      str += s[i];
    }

    if (
      (occursA < k && s[s.length - i - 1] === 'a') ||
      (occursB < k && s[s.length - i - 1] === 'b') ||
      (occursC < k && s[s.length - i - 1] === 'c')
    ) {
      str += s[s.length - i - 1];
    }