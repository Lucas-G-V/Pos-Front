import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseService {
    UrlApi: string = "https://apimarmitariareal.azurewebsites.net/";

    protected ObterHeaderJson() {
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      };
    }

    protected ObterHeaderForm(){
      return {
        headers: new HttpHeaders({
            'Content-Type': 'form-data'
        })
    };
    }

    protected extractData(response: any) {
      return response.data || {};
  }

  protected serviceError(response: Response | any) {
      let customError: string[] = [];
      let customResponse = { error: { errors: [''] }}

      if (response instanceof HttpErrorResponse) {

          if (response.statusText === "Unknown Error") {
              customError.push("Ocorreu um erro desconhecido");
              response.error.errors = customError;
          }
      }
      if (response.status === 500) {
          customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");              
          customResponse.error.errors = customError;
          return throwError(customResponse);
      }

      console.error(response);
      return throwError(response);
  }

}