export interface ILessonMetadata {
  id: string;
  categoryId: string;
  title: string;
  cover?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILesson extends ILessonMetadata {
  content: string;
}

export interface ICreateLesson {
  id: string;
  categoryId: string;
  title: string;
  cover?: string;
}
export interface IUpdateLesson {
  title: string;
  content: string;
  cover?: string;
}
