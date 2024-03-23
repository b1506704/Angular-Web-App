import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatCard, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';


@NgModule({
    declarations: [
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonToggleModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonToggleModule
    ]
})
export class SharedModule { }
