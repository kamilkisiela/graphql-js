import type { ObjMap } from '../jsutils/ObjMap';

type ObjectEntries = <T>(obj: ObjMap<T>) => Array<[string, T]>;

const objectEntries: ObjectEntries =
  Object.entries || ((obj) => Object.keys(obj).map((key) => [key, obj[key]]));

export default objectEntries;
