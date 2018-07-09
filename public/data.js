const imageResults = [
  {
    type: 'image',
    url: 'images/breakfast.jpeg',
    name: 'breakfast.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-02-21T18:43:27.598Z',
    last_opened: '2018-02-21T18:43:27.598Z',
    app: 'preview',
  },
  {
    type: 'image',
    url: 'images/greenwich.jpeg',
    name: 'greenwich.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-02-21T18:43:27.598Z',
    last_opened: '2018-02-21T18:43:27.598Z',
    app: 'preview',
  },
  {
    type: 'image',
    url: 'images/joshua_tree.jpeg',
    name: 'joshua_tree.jpeg',
    created: '2018-01-30T10:18:11.721Z',
    modified: '2018-02-21T18:43:27.598Z',
    last_opened: '2018-02-21T18:43:27.598Z',
    app: 'preview',
  },
];

const applicationResults = [
  {
    type: 'application',
    size: 181200000,
    app: 'slack',
    version: '3.0.5',
    created: '2017-12-11T01:08:11.721Z',
    modified: '2017-12-11T01:08:11.721Z',
    last_opened: '2018-02-21T18:43:27.598Z',
  },
  {
    type: 'application',
    size: 181200000,
    app: 'lingo',
    version: '1.0.3',
    created: '2017-11-01T01:08:11.721Z',
    modified: '2017-11-01T01:08:11.721Z',
    last_opened: '2018-01-01T18:43:27.598Z',
  },
];

const developerFileResults = [
  {
    type: 'developer_file',
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
