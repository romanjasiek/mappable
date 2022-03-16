/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
// customMap.addCompanyMarker(company);