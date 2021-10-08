import { curry } from './functional';

export const map = curry((fn, arr) => arr.map(fn));
export const filter = curry((fn, arr) => arr.filter(fn));
