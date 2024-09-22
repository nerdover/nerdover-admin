export interface Identifiable {
  id: string;
  title: string;
}

interface Traceable {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category extends Identifiable, Traceable {
  lessons?: Lesson[];
  series?: Series[];
}

export interface Lesson extends Identifiable, Traceable {
  content: string;
  categoryId: string;
}

export interface Series extends Identifiable, Traceable {
  categoryId: string;
  contents: SeriesLesson[];
}

export interface SeriesLesson extends Identifiable, Traceable {
  content: string;
  categoryId: string;
  seriesId: string;
}
