import { Component } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import { getAllCategoryIdentity } from '../../../../core/mock/mock';
import { Switch } from '../../../../shared/utils/switch';
import { AddCategoryPanelComponent } from '../../panels/add-category-panel/add-category-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';
@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddCategoryPanelComponent,
    ManageGroupComponent
  ],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
  animations: [fade],
})
export class CategoriesPageComponent {
  data = getAllCategoryIdentity();

  addCategoryPanel = new Switch();
}
