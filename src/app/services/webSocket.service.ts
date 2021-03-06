import { Observable } from 'rxjs';

export class WebSocketService {
  ws: WebSocket;

  createObservablesocket(url: string): Observable<string> {
    // Instantiate the client socket
    this.ws = new WebSocket(url);

    // Return an observable which listens for the messages
    return new Observable(
      observer => {
        this.ws.onmessage = (event) =>
        observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  // This send a message from client to server
  sendMessage(message: any) {
    this.ws.send(message);
  }
}
