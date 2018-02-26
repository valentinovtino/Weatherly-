// import Trie from '../node_modules/@valentinovtino/complete-me/lib/trie.js';
import { Trie } from '@valentinovtino/complete-me/lib/index.js';
import citiesList from '../__mocks__/citiesData.js';
import zipcodesList from '../__mocks__/zipData.js';

let trie = new Trie();

citiesList.data.forEach(city => {
  trie.insert(city.toLowerCase());
});

zipcodesList.forEach( zipcode => {
  trie.insert(zipcode);
});

export default trie;

