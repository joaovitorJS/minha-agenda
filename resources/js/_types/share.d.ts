export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    messages: {
        success?: string;
        error?: string;
    }
};