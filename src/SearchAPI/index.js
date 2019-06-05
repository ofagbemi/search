import { getApp as _getApp, getResults as _getResults } from './impl';

/**
 * @param {string} key
 *
 * @returns Promise<{|
 *   name: string;
 *   icon: Url;
 * |}>
 */
export function getApp(key) {
  return _getApp(key);
}

/**
 * Given a query, returns a Promise that resolves with an array of section objects.
 * Each section object has a `key` that identifies the section (e.g. `topHits` or
 * `developerFiles`) and an array of result objects for that section.
 *
 * A result object represents a single search result for the query. For example,
 * a result representing an image file might look like this:
 *
 * ```
 * {
 *   id: 'cab01436-4b95-45af-988e-a0b73f7f1492',
 *   type: 'image',
 *   url: 'images/greenwich.jpeg',
 *   name: 'greenwich.jpeg',
 *   created: '2018-01-30T10:18:11.721Z',
 *   modified: '2018-01-21T18:43:27.598Z',
 *   last_opened: '2018-02-20T18:43:27.598Z',
 *   app: 'preview',
 * }
 * ```
 *
 * A result representing an application might look like this:
 * ```
 * {
 *   id: '38f6236c-0b67-404a-8f72-d2bfa6977046',
 *   type: 'application',
 *   size: 181200000,
 *   app: 'slack',
 *   name: 'Slack',
 *   version: '3.0.5',
 *   created: '2017-12-11T01:08:11.721Z',
 *   modified: '2017-12-11T01:08:11.721Z',
 *   last_opened: '2018-02-21T18:43:27.598Z',
 * }
 * ```
 * @returns Promise<
 *   Array<{|
 *     section: string;
 *     results: Array<ResultType>
 *   |}>
 * >
 */
export function getResults(query) {
  return _getResults(query);
}
