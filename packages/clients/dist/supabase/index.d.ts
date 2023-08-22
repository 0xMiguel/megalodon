import { Database } from '@boilerplate/types';
export declare const supabaseClient: import("@supabase/supabase-js").SupabaseClient<Database, "public", {
    Tables: {
        users: {
            Row: {
                full_name: string | null;
                id: number;
                phone: string | null;
            };
            Insert: {
                full_name?: string | null | undefined;
                id?: number | undefined;
                phone?: string | null | undefined;
            };
            Update: {
                full_name?: string | null | undefined;
                id?: number | undefined;
                phone?: string | null | undefined;
            };
        };
        verifier: {
            Row: {
                id: number;
                verified: boolean | null;
            };
            Insert: {
                id?: number | undefined;
                verified?: boolean | null | undefined;
            };
            Update: {
                id?: number | undefined;
                verified?: boolean | null | undefined;
            };
        };
    };
    Views: {};
    Functions: {};
    Enums: {};
}>;
//# sourceMappingURL=index.d.ts.map