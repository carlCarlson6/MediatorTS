import { BusMessage } from "./core/BusMessage";
import { BusResponse } from "./core/BusResponse";
import { Handler } from "./core/Handler";

export class RegisteredInMemoryHandler<T extends BusMessage, S extends BusResponse> {
    
    public get Name(): string {
        return this.name;
    }

    public get Handler(): Handler<T,S> {
        return this.handler;
    }

    constructor(
        private readonly name: string, 
        private readonly handler: Handler<T,S>
    ) {}
}
