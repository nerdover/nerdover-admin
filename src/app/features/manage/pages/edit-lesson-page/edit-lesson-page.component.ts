import { Component, computed, inject, input, OnInit } from '@angular/core';
import { EditorComponent } from '../../components/editor/editor.component';
import { ContentClientService } from '../../../../core/services/content-client.service';
import { Lesson } from '../../../../core/models/lesson';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-lesson-page',
  standalone: true,
  imports: [EditorComponent],
  templateUrl: './edit-lesson-page.component.html',
  styleUrl: './edit-lesson-page.component.scss',
})
export class EditLessonPageComponent implements OnInit {
  private readonly contentClientService = inject(ContentClientService);
  private readonly router = inject(Router);
  categoryId = input('');
  lessonId = input('');

  lesson?: Lesson;

  ngOnInit(): void {
    this.contentClientService
      .getLessonById(this.categoryId(), this.lessonId())
      .subscribe((lesson) => (this.lesson = lesson));
  }

  update(data: string) {
    this.contentClientService
      .updateLessonContent(this.categoryId(), this.lessonId(), data)
      .subscribe(() => {
        console.log('a');

        this.router.navigate(['/', this.categoryId()]);
      });
  }
}
