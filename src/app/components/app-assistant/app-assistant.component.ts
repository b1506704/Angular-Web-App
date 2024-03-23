import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    public editorConfig: AngularEditorConfig
angularEditorLogo: any;

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
            // uploadUrl: 'v1/image',
            // upload: (file: File) => { },
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

    public onKeyDown(e: KeyboardEvent) {
        if (e && e.key === 'Enter') {
            this.onSuggest();
        }
    }

    public onSuggest() {
        this.httpService.verify(this.htmlContent).subscribe(res => {
            this.response = res.suggestion;
        });
    }

    public onOutput(e: any) {
        console.log(e);
    }
}
