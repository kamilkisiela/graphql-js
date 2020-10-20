import { SYMBOL_ASYNC_ITERATOR } from '../polyfills/symbols';

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 */
export default function isAsyncIterable(
  maybeAsyncIterable: any,
): maybeAsyncIterable is AsyncIterable<unknown> {
  return typeof maybeAsyncIterable?.[SYMBOL_ASYNC_ITERATOR] === 'function';
}
