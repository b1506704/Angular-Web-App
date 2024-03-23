import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { HttpService } from '../../services/http.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'app-assistant',
    templateUrl: './app-assistant.component.html',
    styleUrls: ['./app-assistant.component.scss']
})
export class AppAssistantComponent implements OnInit {
    public htmlContent = '';
    public response = 'Response';
    public editorConfig: AngularEditorConfig;
    public fileName = 'Upload Requirement';

    public isSuggestDisabled = false;
    public isFileMode = false;
    public isDrag = false;
    public isFileValid = true;

    constructor(
        private httpService: HttpService
    ) {
        this.editorConfig = {
            editable: true,
            height: 'auto',
            minHeight: '20vh',
            maxHeight: '20vh',
            width: 'auto',
            minWidth: '0',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter requirement here...',
            defaultFontName: 'Arial',
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                [
                    'undo',
                    'redo',
                    'fontName'
                ],
                [
                    'insertVideo',
                    'insertHorizontalRule',
                    'removeFormat',
                    'link',
                    'unlink'
                ]
            ]
        };
    }

    ngOnInit() {
    }

    public onViewModeChanged(value: boolean) {
        console.log(value);
        this.isFileMode = value;
    }

    public onSuggest() {
        this.isSuggestDisabled = true;

        this.httpService.verify(this.htmlContent).toPromise()
            .then(res => {
                this.response = res.suggestion;
            })
            .catch(er => console.log(er))
            .finally(() => { this.isSuggestDisabled = false; });
    }

    public uploadFile(e: any) {
        const file = (e.dataTransfer || e.target).files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (readFile: any) => {
            console.log(readFile);
            this.fileName = (file.name || 'Upload Requirement');
        };

        reader.onerror = (error) => {
            console.error(error);
            this.fileName = 'Upload Requirement';
        };

        reader.readAsDataURL(file);
    }

    public onDragLeave(): void {
        this.isDrag = false;
    }

    public onDragOver(e: DragEvent): void {
        e.preventDefault();
        this.isDrag = true;
    }

    public onDrop(event: DragEvent): void {
        event.preventDefault();
        this.uploadFile(event);
        this.onDragLeave();
    }
}
