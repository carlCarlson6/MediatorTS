import { InMemoryHandlers } from "./InMemoryHandlers";
import { ServiceBus } from "./core/ServiceBus";
import { BusResponse } from "./core/BusResponse";
import { BusMessage } from "./core/BusMessage";
import { Handler } from "./core/Handler";

export class InMemoryServiceBus implements ServiceBus {
    private readonly handlers: InMemoryHandlers;

    constructor() {
        this.handlers = new InMemoryHandlers();
    }

    public async Dispatch<T extends BusMessage, S extends BusResponse>(message: T): Promise<S> {
        const handler: Handler<T,S> = this.handlers.FindHandler(message.MessageName);
        const handlerResponse: S = await handler.Handle(message);
        return handlerResponse;
    }

    public Register<T extends BusMessage, S extends BusResponse>(handler: Handler<T,S>, handlerName: string): void {
        this.handlers.Add(handlerName, handler);
    }

}
