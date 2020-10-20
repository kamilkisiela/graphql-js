import type { ObjMap } from '../jsutils/ObjMap';

type ObjectValues = <T>(obj: ObjMap<T>) => Array<T>;

const objectValues: ObjectValues =
  Object.values || ((obj) => Object.keys(obj).map((key) => obj[key]));
export default objectValues;
