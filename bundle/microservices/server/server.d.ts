import { Logger } from '@nestjs/common/services/logger.service';
import { Observable, Subscription } from 'rxjs';
import { MessageHandlers } from '../interfaces/message-handlers.interface';
import { MicroserviceOptions, WritePacket } from './../interfaces';
export declare abstract class Server {
    protected readonly messageHandlers: MessageHandlers;
    protected readonly logger: Logger;
    addHandler(pattern: any, callback: (data: any) => Promise<Observable<any>>): void;
    getHandlers(): MessageHandlers;
    getHandlerByPattern(pattern: string): (data: any) => Promise<Observable<any>> | null;
    send(stream$: Observable<any>, respond: (data: WritePacket) => void): Subscription;
    transformToObservable<T = any>(resultOrDeffered: any): Observable<T>;
    getOptionsProp<T extends {
        options?: any;
    }>(obj: MicroserviceOptions, prop: keyof T['options'], defaultValue?: any): any;
    protected handleError(error: string): void;
    protected loadPackage(name: string, ctx: string): any;
}
