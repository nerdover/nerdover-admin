import { Component, signal } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import { getAllCategoryIdentity } from '../../../../core/mock/mock';
import { Switch } from '../../../../shared/utils/switch';
import { AddCategoryPanelComponent } from '../../panels/add-category-panel/add-category-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { DeletePanelComponent } from '../../panels/delete-panel/delete-panel.component';
@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddCategoryPanelComponent,
    DeletePanelComponent,
  ],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
  animations: [fade],
})
export class CategoriesPageComponent {
  data = getAllCategoryIdentity();

  currentDeleteCategoryId = signal<string | undefined>(undefined);

  addCategoryPanel = new Switch();
  deletePanel = new Switch();

  openDeletePanel(categoryId: string) {
    this.currentDeleteCategoryId.set(categoryId);
    this.deletePanel.open();
  }

  closeDeletePanel() {
    this.currentDeleteCategoryId.set(undefined);
    this.deletePanel.close();
  }
}
