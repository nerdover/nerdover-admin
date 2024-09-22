import { Category, Identifiable } from '../models/lesson';

export const MOCK: Category[] = [
  {
    id: 'math',
    title: 'Mathematics',
    lessons: [
      {
        id: 'integer',
        title: 'Integer',
        categoryId: 'math',
        content: 'ABC',
      },
      {
        id: 'real-number',
        title: 'Real Number',
        categoryId: 'math',
        content: '123',
      },
    ],
  },
  {
    id: 'computer',
    title: 'Computer',
    series: [
      {
        id: 'programming-in-c',
        title: 'Programming in C',
        categoryId: 'computer',
        contents: [
          {
            id: 'introduction',
            title: 'Introduction to C',
            categoryId: 'computer',
            seriesId: 'programming-in-c',
            content: 'CCC',
          },
          {
            id: 'data-type-in-c',
            title: 'Data Types',
            categoryId: 'computer',
            seriesId: 'programming-in-c',
            content: 'DDD',
          },
        ],
      },
    ],
    lessons: [
      {
        id: 'flowchart',
        title: 'Flowchart',
        categoryId: 'computer',
        content: 'AAA',
      },
    ],
  },
];

export const getCategoryById = (id: string) => MOCK.find((c) => c.id === id);

export const getLessonById = (cid: string, lid: string) =>
  getCategoryById(cid)?.lessons?.find((l) => l.id === lid);

export const getSeriesById = (cid: string, sid: string) =>
  getCategoryById(cid)?.series?.find((s) => s.id === sid);

export const getSeriesLessonById = (cid: string, sid: string, slid: string) =>
  getSeriesById(cid, sid)?.contents.find((sl) => sl.id === slid);

export const getAllCategoryIdentity = (): Identifiable[] =>
  MOCK.map(({ id, title }) => ({ id, title }));

export const getAllLessonIdentity = (cid: string): Identifiable[] | undefined =>
  getCategoryById(cid)?.lessons?.map(({ id, title }) => ({
    id,
    title,
  }));

export const getAllSeriesIdentity = (cid: string): Identifiable[] | undefined =>
  getCategoryById(cid)?.series?.map(({ id, title }) => ({
    id,
    title,
  }));

export const getAllSeriesLessonIdentity = (
  cid: string,
  sid: string
): Identifiable[] | undefined =>
  getSeriesById(cid, sid)?.contents.map(({ id, title }) => ({ id, title }));
