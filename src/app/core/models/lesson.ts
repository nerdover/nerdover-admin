interface Identifiable {
  id: string;
  title: string;
}

interface Traceable {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IdentifiableWithTrace extends Identifiable, Traceable { }

export interface Category extends IdentifiableWithTrace {
  lessons?: Lesson[];
  series?: Series[];
}

export interface Lesson extends IdentifiableWithTrace {
  content: string;
  categoryId: string;
}

export interface Series extends IdentifiableWithTrace {
  categoryId: string;
  contents: SeriesLesson[];
}

export interface SeriesLesson extends IdentifiableWithTrace {
  content: string;
  categoryId: string;
  seriesId: string;
}
