export declare const config: {
    jwt: {
        secretKey: string | undefined;
        expiresInSec: number;
    };
    bcrypt: {
        saltRounds: number;
    };
    serverPort: number;
    db: string;
};
