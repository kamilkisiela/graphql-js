import objectEntries from '../polyfills/objectEntries';

import type {
  ObjMap,
  ObjMapLike,
  ReadOnlyObjMap,
  ReadOnlyObjMapLike,
} from './ObjMap';

function toObjMap<T>(obj: ObjMapLike<T>): ObjMap<T>;
function toObjMap<T>(obj: ReadOnlyObjMapLike<T>): ReadOnlyObjMap<T>;
function toObjMap(obj) {
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  const map = Object.create(null);
  for (const [key, value] of objectEntries(obj)) {
    map[key] = value;
  }
  return map;
}

export default toObjMap;
