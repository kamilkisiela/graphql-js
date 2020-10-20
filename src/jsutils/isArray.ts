export default function isArray<T>(
  value: T | T[] | ReadonlyArray<T>,
): value is T[] | ReadonlyArray<T> {
  return Array.isArray(value);
}
