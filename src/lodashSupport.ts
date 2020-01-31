import * as _ from "lodash";

 let users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];


export function findUsers() {
  return _.find(users, { 'age': 1, 'active': true });
}
