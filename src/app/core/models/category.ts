import { ILessonMetadata } from './lesson';

export interface ICategory {
  id: string;
  title: string;
  cover?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILessonMap extends ICategory {
  lessons: ILessonMetadata[];
}

export interface ICreateCategory {
  id: string;
  title: string;
  cover?: File;
}
export interface IUpdateCategory {
  title: string;
  cover?: File;
}