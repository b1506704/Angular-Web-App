import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IAssistResponseModel {
    suggestion: string;
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'https://mail-getter-handler.azurewebsites.net/api/';
    // private baseUrl = ' http://localhost:7209/api/';

    constructor(
        private http: HttpClient,
        // private config: HealthcareProviderConfigService
    ) {
    }

    public verify(data: string): Observable<IAssistResponseModel> {
        return this.http.post<IAssistResponseModel>(this.baseUrl + 'MailProcessingHandler', { prompt: data });
    }

    public verifyFile(formData: FormData): Observable<IAssistResponseModel> {
        return this.http.post<IAssistResponseModel>(this.baseUrl + 'FileProcessingHandler', formData);
    }
}
