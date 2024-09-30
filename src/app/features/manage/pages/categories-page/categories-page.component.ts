import { Component, inject, OnInit } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import { Switch } from '../../../../shared/utils/switch';
import { AddCategoryPanelComponent } from '../../panels/add-category-panel/add-category-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';
import { DatePipe } from '@angular/common';
import { ContentClientService } from '../../../../core/services/content-client.service';
import { IdentifiableWithTrace } from '../../../../core/models/lesson';
@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddCategoryPanelComponent,
    ManageGroupComponent,
    DatePipe,
  ],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
  animations: [fade],
})
export class CategoriesPageComponent {
  private readonly contentClientService = inject(ContentClientService);
  categories = this.contentClientService.categories;

  addCategoryPanel = new Switch();
}
