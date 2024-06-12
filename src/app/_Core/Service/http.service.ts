import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class HttpService {

    tryService() {
        return "Hello kitty";
    }
}