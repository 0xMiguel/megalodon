export declare const users: import("drizzle-orm/column.d-04875079").bt<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/column.d-04875079").bo<{
            name: "id";
            tableName: "users";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        fullName: import("drizzle-orm/column.d-04875079").bo<{
            name: "full_name";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        phone: import("drizzle-orm/column.d-04875079").bo<{
            name: "phone";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const verifier: import("drizzle-orm/column.d-04875079").bt<{
    name: "verifier";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/column.d-04875079").bo<{
            name: "id";
            tableName: "verifier";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        verified: import("drizzle-orm/column.d-04875079").bo<{
            name: "verified";
            tableName: "verifier";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=schema.d.ts.map