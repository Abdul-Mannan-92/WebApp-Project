// @ts-ignore
import {Injectable} from "@angular/core";
// @ts-ignore
import {Subject} from "rxjs";
// @ts-ignore
import {HttpClient} from "@angular/common/http";
import {Joke} from "./joke.model";

// @ts-ignore
@Injectable({providedIn: 'root'})
export class JokeService {
  private joke: Joke = {"type": '', "setup": '', "punchline": '', "id": 0}
  private jokeUpdated = new Subject<Joke>();

  constructor(private http: HttpClient) {
  }

  getJoke() {
    this.http.get<{ joke: Joke }>('https://official-joke-api.appspot.com/random_joke').subscribe((payLoad: any) => {
      // console.log(payLoad);
      this.joke = payLoad;
      this.jokeUpdated.next(this.joke);
    });
  }

  getUpdatedJoke(){
    return this.jokeUpdated.asObservable();
  }

}
