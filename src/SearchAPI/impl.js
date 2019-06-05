import uuid from 'uuid';
import groupBy from 'lodash/groupBy';

const imageResults = [
  {
    id: uuid.v4(),
    type: 'image',
    url: 'images/breakfast.jpeg',
    name: 'breakfast.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-01-05T18:43:27.598Z',
    last_opened: '2018-02-21T18:43:27.598Z',
    app: 'preview',
  },
  {
    id: uuid.v4(),
    type: 'image',
    url: 'images/greenwich.jpeg',
    name: 'greenwich.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-01-21T18:43:27.598Z',
    last_opened: '2018-02-20T18:43:27.598Z',
    app: 'preview',
  },
  {
    id: uuid.v4(),
    type: 'image',
    url: 'images/joshua_tree.jpeg',
    name: 'joshua_tree.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-02-21T18:43:27.598Z',
    last_opened: '2018-02-11T18:43:27.598Z',
    app: 'preview',
  },
];

const applicationResults = [
  {
    id: uuid.v4(),
    type: 'application',
    size: 181200000,
    app: 'slack',
    name: 'Slack',
    version: '3.0.5',
    created: '2017-12-11T01:08:11.721Z',
    modified: '2017-12-11T01:08:11.721Z',
    last_opened: '2018-02-21T18:43:27.598Z',
  },
  {
    id: uuid.v4(),
    type: 'application',
    size: 181200000,
    app: 'lingo',
    name: 'Lingo',
    version: '1.0.3',
    created: '2017-11-01T01:08:11.721Z',
    modified: '2017-11-01T01:08:11.721Z',
    last_opened: '2018-01-01T18:43:27.598Z',
  },
  {
    id: uuid.v4(),
    type: 'application',
    size: 181200000,
    app: 'preview',
    name: 'Preview',
    version: '12.1.8',
    created: '2017-11-01T01:08:11.721Z',
    modified: '2017-11-01T01:08:11.721Z',
    last_opened: '2018-01-19T18:43:27.598Z',
  },
  {
    id: uuid.v4(),
    type: 'application',
    size: 181200000,
    app: 'xcode',
    name: 'Xcode',
    version: '17.0.1',
    created: '2017-11-01T01:08:11.721Z',
    modified: '2017-11-01T01:08:11.721Z',
    last_opened: '2018-01-10T18:43:27.598Z',
  },
];

const developerFileResults = [
  {
    id: uuid.v4(),
    type: 'developerFile',
    size: 19827,
    name: 'test.py',
    app: 'xcode',
    created: '2017-11-01T01:08:11.721Z',
    modified: '2017-11-01T01:08:11.721Z',
    last_opened: '2018-01-01T18:43:27.598Z',
    content:
      "from .local import *  # nopep8\n\n# Blank url means it won't send logging requests\n\nANALYTICS_URL = ''\n",
  },
];

const allResults = imageResults
  .concat(applicationResults)
  .concat(developerFileResults);

const apps = {
  slack: {
    name: 'Slack',
    icon: 'app-icons/slack.png',
  },
  preview: {
    name: 'Preview',
    icon: 'app-icons/preview.png',
  },
  xcode: {
    name: 'Xcode',
    icon: 'app-icons/xcode.png',
  },
  lingo: {
    name: 'Lingo',
    icon: 'app-icons/lingo.png',
  },
};

export function getApp(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const app = apps[key];

      if (!app) {
        reject(new Error(`app "${key}" not found`));
      } else {
        resolve(app);
      }
    }, 200);
  });
}

/**
 *
 * @param {string} query
 * @returns a promise that resolves with an array of section objects,
 * each of the shape
 * {
 *   section: string,
 *   results: Array<Object>,
 * }
 */
export function getResults(query) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (!query) {
        return resolve([]);
      }

      const matchingResults = allResults
        .filter(result =>
          result.name.toLowerCase().includes(query.toLowerCase())
        )
        .sort(
          (a, b) => -1 * (Date.parse(a.last_opened) - Date.parse(b.last_opened))
        );

      const topHits = [
        matchingResults.shift(),
        matchingResults.shift(),
        matchingResults.shift(),
      ].filter(r => r !== undefined);

      const resultGroups = groupBy(matchingResults, 'type');

      if (topHits.length) {
        resultGroups.topHits = topHits;
      }

      resolve(
        Object.keys(resultGroups).map(key => {
          return {
            section: key,
            results: resultGroups[key],
          };
        })
      );
    });
  }, 400);
}
