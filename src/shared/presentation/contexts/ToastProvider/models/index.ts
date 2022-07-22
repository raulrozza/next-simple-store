export interface IToastProvider {
    error(message: string): void;
    info(message: string): void;
}
