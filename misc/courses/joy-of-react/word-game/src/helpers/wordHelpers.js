import { WORDS } from '../data/words';

export function getWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
