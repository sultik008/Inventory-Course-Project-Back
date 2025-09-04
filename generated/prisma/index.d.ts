
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model items
 * 
 */
export type items = $Result.DefaultSelection<Prisma.$itemsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model usersinvs
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type usersinvs = $Result.DefaultSelection<Prisma.$usersinvsPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventories
 * const inventories = await prisma.inventory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersinvs`: Exposes CRUD operations for the **usersinvs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usersinvs
    * const usersinvs = await prisma.usersinvs.findMany()
    * ```
    */
  get usersinvs(): Prisma.usersinvsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inventory: 'inventory',
    items: 'items',
    users: 'users',
    usersinvs: 'usersinvs',
    category: 'category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inventory" | "items" | "users" | "usersinvs" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      items: {
        payload: Prisma.$itemsPayload<ExtArgs>
        fields: Prisma.itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findFirst: {
            args: Prisma.itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findMany: {
            args: Prisma.itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          create: {
            args: Prisma.itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          createMany: {
            args: Prisma.itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          delete: {
            args: Prisma.itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          update: {
            args: Prisma.itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          deleteMany: {
            args: Prisma.itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          upsert: {
            args: Prisma.itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      usersinvs: {
        payload: Prisma.$usersinvsPayload<ExtArgs>
        fields: Prisma.usersinvsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersinvsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersinvsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          findFirst: {
            args: Prisma.usersinvsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersinvsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          findMany: {
            args: Prisma.usersinvsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>[]
          }
          create: {
            args: Prisma.usersinvsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          createMany: {
            args: Prisma.usersinvsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersinvsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>[]
          }
          delete: {
            args: Prisma.usersinvsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          update: {
            args: Prisma.usersinvsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          deleteMany: {
            args: Prisma.usersinvsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersinvsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersinvsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>[]
          }
          upsert: {
            args: Prisma.usersinvsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersinvsPayload>
          }
          aggregate: {
            args: Prisma.UsersinvsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersinvs>
          }
          groupBy: {
            args: Prisma.usersinvsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersinvsGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersinvsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersinvsCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inventory?: inventoryOmit
    items?: itemsOmit
    users?: usersOmit
    usersinvs?: usersinvsOmit
    category?: categoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    usersinvs: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersinvs?: boolean | InventoryCountOutputTypeCountUsersinvsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountUsersinvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersinvsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    inventory: number
    items: number
    usersinvs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | UsersCountOutputTypeCountInventoryArgs
    items?: boolean | UsersCountOutputTypeCountItemsArgs
    usersinvs?: boolean | UsersCountOutputTypeCountUsersinvsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsersinvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersinvsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryMinAggregateOutputType = {
    inventoryid: string | null
    owner: string | null
    createdat: Date | null
    public: boolean | null
    description: string | null
    field1: string | null
    field2: string | null
    field3: string | null
    image: string | null
    category: string | null
    name: string | null
    ownername: string | null
    customid: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    inventoryid: string | null
    owner: string | null
    createdat: Date | null
    public: boolean | null
    description: string | null
    field1: string | null
    field2: string | null
    field3: string | null
    image: string | null
    category: string | null
    name: string | null
    ownername: string | null
    customid: string | null
  }

  export type InventoryCountAggregateOutputType = {
    inventoryid: number
    owner: number
    createdat: number
    public: number
    description: number
    field1: number
    field2: number
    field3: number
    image: number
    category: number
    name: number
    ownername: number
    customid: number
    _all: number
  }


  export type InventoryMinAggregateInputType = {
    inventoryid?: true
    owner?: true
    createdat?: true
    public?: true
    description?: true
    field1?: true
    field2?: true
    field3?: true
    image?: true
    category?: true
    name?: true
    ownername?: true
    customid?: true
  }

  export type InventoryMaxAggregateInputType = {
    inventoryid?: true
    owner?: true
    createdat?: true
    public?: true
    description?: true
    field1?: true
    field2?: true
    field3?: true
    image?: true
    category?: true
    name?: true
    ownername?: true
    customid?: true
  }

  export type InventoryCountAggregateInputType = {
    inventoryid?: true
    owner?: true
    createdat?: true
    public?: true
    description?: true
    field1?: true
    field2?: true
    field3?: true
    image?: true
    category?: true
    name?: true
    ownername?: true
    customid?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    inventoryid: string
    owner: string | null
    createdat: Date | null
    public: boolean | null
    description: string | null
    field1: string
    field2: string
    field3: string
    image: string | null
    category: string
    name: string | null
    ownername: string | null
    customid: string | null
    _count: InventoryCountAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    owner?: boolean
    createdat?: boolean
    public?: boolean
    description?: boolean
    field1?: boolean
    field2?: boolean
    field3?: boolean
    image?: boolean
    category?: boolean
    name?: boolean
    ownername?: boolean
    customid?: boolean
    users?: boolean | inventory$usersArgs<ExtArgs>
    usersinvs?: boolean | inventory$usersinvsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    owner?: boolean
    createdat?: boolean
    public?: boolean
    description?: boolean
    field1?: boolean
    field2?: boolean
    field3?: boolean
    image?: boolean
    category?: boolean
    name?: boolean
    ownername?: boolean
    customid?: boolean
    users?: boolean | inventory$usersArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    owner?: boolean
    createdat?: boolean
    public?: boolean
    description?: boolean
    field1?: boolean
    field2?: boolean
    field3?: boolean
    image?: boolean
    category?: boolean
    name?: boolean
    ownername?: boolean
    customid?: boolean
    users?: boolean | inventory$usersArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    inventoryid?: boolean
    owner?: boolean
    createdat?: boolean
    public?: boolean
    description?: boolean
    field1?: boolean
    field2?: boolean
    field3?: boolean
    image?: boolean
    category?: boolean
    name?: boolean
    ownername?: boolean
    customid?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inventoryid" | "owner" | "createdat" | "public" | "description" | "field1" | "field2" | "field3" | "image" | "category" | "name" | "ownername" | "customid", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | inventory$usersArgs<ExtArgs>
    usersinvs?: boolean | inventory$usersinvsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | inventory$usersArgs<ExtArgs>
  }
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | inventory$usersArgs<ExtArgs>
  }

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      usersinvs: Prisma.$usersinvsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryid: string
      owner: string | null
      createdat: Date | null
      public: boolean | null
      description: string | null
      field1: string
      field2: string
      field3: string
      image: string | null
      category: string
      name: string | null
      ownername: string | null
      customid: string | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `inventoryid`
     * const inventoryWithInventoryidOnly = await prisma.inventory.findMany({ select: { inventoryid: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `inventoryid`
     * const inventoryWithInventoryidOnly = await prisma.inventory.createManyAndReturn({
     *   select: { inventoryid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `inventoryid`
     * const inventoryWithInventoryidOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { inventoryid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends inventory$usersArgs<ExtArgs> = {}>(args?: Subset<T, inventory$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usersinvs<T extends inventory$usersinvsArgs<ExtArgs> = {}>(args?: Subset<T, inventory$usersinvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly inventoryid: FieldRef<"inventory", 'String'>
    readonly owner: FieldRef<"inventory", 'String'>
    readonly createdat: FieldRef<"inventory", 'DateTime'>
    readonly public: FieldRef<"inventory", 'Boolean'>
    readonly description: FieldRef<"inventory", 'String'>
    readonly field1: FieldRef<"inventory", 'String'>
    readonly field2: FieldRef<"inventory", 'String'>
    readonly field3: FieldRef<"inventory", 'String'>
    readonly image: FieldRef<"inventory", 'String'>
    readonly category: FieldRef<"inventory", 'String'>
    readonly name: FieldRef<"inventory", 'String'>
    readonly ownername: FieldRef<"inventory", 'String'>
    readonly customid: FieldRef<"inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.users
   */
  export type inventory$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * inventory.usersinvs
   */
  export type inventory$usersinvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    where?: usersinvsWhereInput
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    cursor?: usersinvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersinvsScalarFieldEnum | UsersinvsScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsMinAggregateOutputType = {
    inventoryid: string | null
    id: string | null
    createdby: string | null
    createdat: Date | null
    lasteditat: Date | null
    image: string | null
    fieldvalue1: string | null
    fieldvalue2: string | null
    fieldvalue3: string | null
    customid: string | null
    ownername: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    inventoryid: string | null
    id: string | null
    createdby: string | null
    createdat: Date | null
    lasteditat: Date | null
    image: string | null
    fieldvalue1: string | null
    fieldvalue2: string | null
    fieldvalue3: string | null
    customid: string | null
    ownername: string | null
  }

  export type ItemsCountAggregateOutputType = {
    inventoryid: number
    id: number
    createdby: number
    createdat: number
    lasteditat: number
    image: number
    fieldvalue1: number
    fieldvalue2: number
    fieldvalue3: number
    customid: number
    ownername: number
    _all: number
  }


  export type ItemsMinAggregateInputType = {
    inventoryid?: true
    id?: true
    createdby?: true
    createdat?: true
    lasteditat?: true
    image?: true
    fieldvalue1?: true
    fieldvalue2?: true
    fieldvalue3?: true
    customid?: true
    ownername?: true
  }

  export type ItemsMaxAggregateInputType = {
    inventoryid?: true
    id?: true
    createdby?: true
    createdat?: true
    lasteditat?: true
    image?: true
    fieldvalue1?: true
    fieldvalue2?: true
    fieldvalue3?: true
    customid?: true
    ownername?: true
  }

  export type ItemsCountAggregateInputType = {
    inventoryid?: true
    id?: true
    createdby?: true
    createdat?: true
    lasteditat?: true
    image?: true
    fieldvalue1?: true
    fieldvalue2?: true
    fieldvalue3?: true
    customid?: true
    ownername?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to aggregate.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithAggregationInput | itemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    inventoryid: string
    id: string
    createdby: string
    createdat: Date | null
    lasteditat: Date | null
    image: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid: string | null
    ownername: string
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    id?: boolean
    createdby?: boolean
    createdat?: boolean
    lasteditat?: boolean
    image?: boolean
    fieldvalue1?: boolean
    fieldvalue2?: boolean
    fieldvalue3?: boolean
    customid?: boolean
    ownername?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    id?: boolean
    createdby?: boolean
    createdat?: boolean
    lasteditat?: boolean
    image?: boolean
    fieldvalue1?: boolean
    fieldvalue2?: boolean
    fieldvalue3?: boolean
    customid?: boolean
    ownername?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryid?: boolean
    id?: boolean
    createdby?: boolean
    createdat?: boolean
    lasteditat?: boolean
    image?: boolean
    fieldvalue1?: boolean
    fieldvalue2?: boolean
    fieldvalue3?: boolean
    customid?: boolean
    ownername?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectScalar = {
    inventoryid?: boolean
    id?: boolean
    createdby?: boolean
    createdat?: boolean
    lasteditat?: boolean
    image?: boolean
    fieldvalue1?: boolean
    fieldvalue2?: boolean
    fieldvalue3?: boolean
    customid?: boolean
    ownername?: boolean
  }

  export type itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inventoryid" | "id" | "createdby" | "createdat" | "lasteditat" | "image" | "fieldvalue1" | "fieldvalue2" | "fieldvalue3" | "customid" | "ownername", ExtArgs["result"]["items"]>
  export type itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryid: string
      id: string
      createdby: string
      createdat: Date | null
      lasteditat: Date | null
      image: string | null
      fieldvalue1: string
      fieldvalue2: string
      fieldvalue3: string
      customid: string | null
      ownername: string
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = $Result.GetResult<Prisma.$itemsPayload, S>

  type itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items'], meta: { name: 'items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {itemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemsFindUniqueArgs>(args: SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemsFindFirstArgs>(args?: SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `inventoryid`
     * const itemsWithInventoryidOnly = await prisma.items.findMany({ select: { inventoryid: true } })
     * 
     */
    findMany<T extends itemsFindManyArgs>(args?: SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {itemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends itemsCreateArgs>(args: SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemsCreateManyArgs>(args?: SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `inventoryid`
     * const itemsWithInventoryidOnly = await prisma.items.createManyAndReturn({
     *   select: { inventoryid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items.
     * @param {itemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends itemsDeleteArgs>(args: SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {itemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemsUpdateArgs>(args: SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemsDeleteManyArgs>(args?: SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemsUpdateManyArgs>(args: SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `inventoryid`
     * const itemsWithInventoryidOnly = await prisma.items.updateManyAndReturn({
     *   select: { inventoryid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items.
     * @param {itemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends itemsUpsertArgs>(args: SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemsCountArgs>(
      args?: Subset<T, itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemsGroupByArgs['orderBy'] }
        : { orderBy?: itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items model
   */
  readonly fields: itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the items model
   */
  interface itemsFieldRefs {
    readonly inventoryid: FieldRef<"items", 'String'>
    readonly id: FieldRef<"items", 'String'>
    readonly createdby: FieldRef<"items", 'String'>
    readonly createdat: FieldRef<"items", 'DateTime'>
    readonly lasteditat: FieldRef<"items", 'DateTime'>
    readonly image: FieldRef<"items", 'String'>
    readonly fieldvalue1: FieldRef<"items", 'String'>
    readonly fieldvalue2: FieldRef<"items", 'String'>
    readonly fieldvalue3: FieldRef<"items", 'String'>
    readonly customid: FieldRef<"items", 'String'>
    readonly ownername: FieldRef<"items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * items findUnique
   */
  export type itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findUniqueOrThrow
   */
  export type itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findFirst
   */
  export type itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findFirstOrThrow
   */
  export type itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findMany
   */
  export type itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items create
   */
  export type itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a items.
     */
    data: XOR<itemsCreateInput, itemsUncheckedCreateInput>
  }

  /**
   * items createMany
   */
  export type itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items createManyAndReturn
   */
  export type itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * items update
   */
  export type itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a items.
     */
    data: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
    /**
     * Choose, which items to update.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items updateMany
   */
  export type itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * items updateManyAndReturn
   */
  export type itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * items upsert
   */
  export type itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the items to update in case it exists.
     */
    where: itemsWhereUniqueInput
    /**
     * In case the items found by the `where` argument doesn't exist, create a new items with this data.
     */
    create: XOR<itemsCreateInput, itemsUncheckedCreateInput>
    /**
     * In case the items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
  }

  /**
   * items delete
   */
  export type itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter which items to delete.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items deleteMany
   */
  export type itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * items without action
   */
  export type itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    logedin: Date | null
    isadmin: boolean | null
    picture: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    logedin: Date | null
    isadmin: boolean | null
    picture: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    logedin: number
    isadmin: number
    picture: number
    password: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logedin?: true
    isadmin?: true
    picture?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logedin?: true
    isadmin?: true
    picture?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logedin?: true
    isadmin?: true
    picture?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string
    logedin: Date | null
    isadmin: boolean
    picture: string
    password: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    logedin?: boolean
    isadmin?: boolean
    picture?: boolean
    password?: boolean
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    items?: boolean | users$itemsArgs<ExtArgs>
    usersinvs?: boolean | users$usersinvsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    logedin?: boolean
    isadmin?: boolean
    picture?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    logedin?: boolean
    isadmin?: boolean
    picture?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    logedin?: boolean
    isadmin?: boolean
    picture?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "logedin" | "isadmin" | "picture" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    items?: boolean | users$itemsArgs<ExtArgs>
    usersinvs?: boolean | users$usersinvsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[]
      items: Prisma.$itemsPayload<ExtArgs>[]
      usersinvs: Prisma.$usersinvsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      logedin: Date | null
      isadmin: boolean
      picture: string
      password: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends users$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, users$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends users$itemsArgs<ExtArgs> = {}>(args?: Subset<T, users$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usersinvs<T extends users$usersinvsArgs<ExtArgs> = {}>(args?: Subset<T, users$usersinvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly logedin: FieldRef<"users", 'DateTime'>
    readonly isadmin: FieldRef<"users", 'Boolean'>
    readonly picture: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.inventory
   */
  export type users$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * users.items
   */
  export type users$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * users.usersinvs
   */
  export type users$usersinvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    where?: usersinvsWhereInput
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    cursor?: usersinvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersinvsScalarFieldEnum | UsersinvsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model usersinvs
   */

  export type AggregateUsersinvs = {
    _count: UsersinvsCountAggregateOutputType | null
    _min: UsersinvsMinAggregateOutputType | null
    _max: UsersinvsMaxAggregateOutputType | null
  }

  export type UsersinvsMinAggregateOutputType = {
    userid: string | null
    inventoryid: string | null
    role: string | null
  }

  export type UsersinvsMaxAggregateOutputType = {
    userid: string | null
    inventoryid: string | null
    role: string | null
  }

  export type UsersinvsCountAggregateOutputType = {
    userid: number
    inventoryid: number
    role: number
    _all: number
  }


  export type UsersinvsMinAggregateInputType = {
    userid?: true
    inventoryid?: true
    role?: true
  }

  export type UsersinvsMaxAggregateInputType = {
    userid?: true
    inventoryid?: true
    role?: true
  }

  export type UsersinvsCountAggregateInputType = {
    userid?: true
    inventoryid?: true
    role?: true
    _all?: true
  }

  export type UsersinvsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersinvs to aggregate.
     */
    where?: usersinvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersinvs to fetch.
     */
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersinvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersinvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersinvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usersinvs
    **/
    _count?: true | UsersinvsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersinvsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersinvsMaxAggregateInputType
  }

  export type GetUsersinvsAggregateType<T extends UsersinvsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersinvs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersinvs[P]>
      : GetScalarType<T[P], AggregateUsersinvs[P]>
  }




  export type usersinvsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersinvsWhereInput
    orderBy?: usersinvsOrderByWithAggregationInput | usersinvsOrderByWithAggregationInput[]
    by: UsersinvsScalarFieldEnum[] | UsersinvsScalarFieldEnum
    having?: usersinvsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersinvsCountAggregateInputType | true
    _min?: UsersinvsMinAggregateInputType
    _max?: UsersinvsMaxAggregateInputType
  }

  export type UsersinvsGroupByOutputType = {
    userid: string
    inventoryid: string
    role: string | null
    _count: UsersinvsCountAggregateOutputType | null
    _min: UsersinvsMinAggregateOutputType | null
    _max: UsersinvsMaxAggregateOutputType | null
  }

  type GetUsersinvsGroupByPayload<T extends usersinvsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersinvsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersinvsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersinvsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersinvsGroupByOutputType[P]>
        }
      >
    >


  export type usersinvsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    inventoryid?: boolean
    role?: boolean
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersinvs"]>

  export type usersinvsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    inventoryid?: boolean
    role?: boolean
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersinvs"]>

  export type usersinvsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    inventoryid?: boolean
    role?: boolean
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersinvs"]>

  export type usersinvsSelectScalar = {
    userid?: boolean
    inventoryid?: boolean
    role?: boolean
  }

  export type usersinvsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "inventoryid" | "role", ExtArgs["result"]["usersinvs"]>
  export type usersinvsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type usersinvsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type usersinvsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $usersinvsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usersinvs"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: string
      inventoryid: string
      role: string | null
    }, ExtArgs["result"]["usersinvs"]>
    composites: {}
  }

  type usersinvsGetPayload<S extends boolean | null | undefined | usersinvsDefaultArgs> = $Result.GetResult<Prisma.$usersinvsPayload, S>

  type usersinvsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersinvsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersinvsCountAggregateInputType | true
    }

  export interface usersinvsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usersinvs'], meta: { name: 'usersinvs' } }
    /**
     * Find zero or one Usersinvs that matches the filter.
     * @param {usersinvsFindUniqueArgs} args - Arguments to find a Usersinvs
     * @example
     * // Get one Usersinvs
     * const usersinvs = await prisma.usersinvs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersinvsFindUniqueArgs>(args: SelectSubset<T, usersinvsFindUniqueArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usersinvs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersinvsFindUniqueOrThrowArgs} args - Arguments to find a Usersinvs
     * @example
     * // Get one Usersinvs
     * const usersinvs = await prisma.usersinvs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersinvsFindUniqueOrThrowArgs>(args: SelectSubset<T, usersinvsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usersinvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsFindFirstArgs} args - Arguments to find a Usersinvs
     * @example
     * // Get one Usersinvs
     * const usersinvs = await prisma.usersinvs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersinvsFindFirstArgs>(args?: SelectSubset<T, usersinvsFindFirstArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usersinvs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsFindFirstOrThrowArgs} args - Arguments to find a Usersinvs
     * @example
     * // Get one Usersinvs
     * const usersinvs = await prisma.usersinvs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersinvsFindFirstOrThrowArgs>(args?: SelectSubset<T, usersinvsFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usersinvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usersinvs
     * const usersinvs = await prisma.usersinvs.findMany()
     * 
     * // Get first 10 Usersinvs
     * const usersinvs = await prisma.usersinvs.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const usersinvsWithUseridOnly = await prisma.usersinvs.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends usersinvsFindManyArgs>(args?: SelectSubset<T, usersinvsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usersinvs.
     * @param {usersinvsCreateArgs} args - Arguments to create a Usersinvs.
     * @example
     * // Create one Usersinvs
     * const Usersinvs = await prisma.usersinvs.create({
     *   data: {
     *     // ... data to create a Usersinvs
     *   }
     * })
     * 
     */
    create<T extends usersinvsCreateArgs>(args: SelectSubset<T, usersinvsCreateArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usersinvs.
     * @param {usersinvsCreateManyArgs} args - Arguments to create many Usersinvs.
     * @example
     * // Create many Usersinvs
     * const usersinvs = await prisma.usersinvs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersinvsCreateManyArgs>(args?: SelectSubset<T, usersinvsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usersinvs and returns the data saved in the database.
     * @param {usersinvsCreateManyAndReturnArgs} args - Arguments to create many Usersinvs.
     * @example
     * // Create many Usersinvs
     * const usersinvs = await prisma.usersinvs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usersinvs and only return the `userid`
     * const usersinvsWithUseridOnly = await prisma.usersinvs.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersinvsCreateManyAndReturnArgs>(args?: SelectSubset<T, usersinvsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usersinvs.
     * @param {usersinvsDeleteArgs} args - Arguments to delete one Usersinvs.
     * @example
     * // Delete one Usersinvs
     * const Usersinvs = await prisma.usersinvs.delete({
     *   where: {
     *     // ... filter to delete one Usersinvs
     *   }
     * })
     * 
     */
    delete<T extends usersinvsDeleteArgs>(args: SelectSubset<T, usersinvsDeleteArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usersinvs.
     * @param {usersinvsUpdateArgs} args - Arguments to update one Usersinvs.
     * @example
     * // Update one Usersinvs
     * const usersinvs = await prisma.usersinvs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersinvsUpdateArgs>(args: SelectSubset<T, usersinvsUpdateArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usersinvs.
     * @param {usersinvsDeleteManyArgs} args - Arguments to filter Usersinvs to delete.
     * @example
     * // Delete a few Usersinvs
     * const { count } = await prisma.usersinvs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersinvsDeleteManyArgs>(args?: SelectSubset<T, usersinvsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usersinvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usersinvs
     * const usersinvs = await prisma.usersinvs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersinvsUpdateManyArgs>(args: SelectSubset<T, usersinvsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usersinvs and returns the data updated in the database.
     * @param {usersinvsUpdateManyAndReturnArgs} args - Arguments to update many Usersinvs.
     * @example
     * // Update many Usersinvs
     * const usersinvs = await prisma.usersinvs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usersinvs and only return the `userid`
     * const usersinvsWithUseridOnly = await prisma.usersinvs.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersinvsUpdateManyAndReturnArgs>(args: SelectSubset<T, usersinvsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usersinvs.
     * @param {usersinvsUpsertArgs} args - Arguments to update or create a Usersinvs.
     * @example
     * // Update or create a Usersinvs
     * const usersinvs = await prisma.usersinvs.upsert({
     *   create: {
     *     // ... data to create a Usersinvs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usersinvs we want to update
     *   }
     * })
     */
    upsert<T extends usersinvsUpsertArgs>(args: SelectSubset<T, usersinvsUpsertArgs<ExtArgs>>): Prisma__usersinvsClient<$Result.GetResult<Prisma.$usersinvsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usersinvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsCountArgs} args - Arguments to filter Usersinvs to count.
     * @example
     * // Count the number of Usersinvs
     * const count = await prisma.usersinvs.count({
     *   where: {
     *     // ... the filter for the Usersinvs we want to count
     *   }
     * })
    **/
    count<T extends usersinvsCountArgs>(
      args?: Subset<T, usersinvsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersinvsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usersinvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersinvsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersinvsAggregateArgs>(args: Subset<T, UsersinvsAggregateArgs>): Prisma.PrismaPromise<GetUsersinvsAggregateType<T>>

    /**
     * Group by Usersinvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersinvsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersinvsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersinvsGroupByArgs['orderBy'] }
        : { orderBy?: usersinvsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersinvsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersinvsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usersinvs model
   */
  readonly fields: usersinvsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usersinvs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersinvsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends inventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inventoryDefaultArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usersinvs model
   */
  interface usersinvsFieldRefs {
    readonly userid: FieldRef<"usersinvs", 'String'>
    readonly inventoryid: FieldRef<"usersinvs", 'String'>
    readonly role: FieldRef<"usersinvs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usersinvs findUnique
   */
  export type usersinvsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter, which usersinvs to fetch.
     */
    where: usersinvsWhereUniqueInput
  }

  /**
   * usersinvs findUniqueOrThrow
   */
  export type usersinvsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter, which usersinvs to fetch.
     */
    where: usersinvsWhereUniqueInput
  }

  /**
   * usersinvs findFirst
   */
  export type usersinvsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter, which usersinvs to fetch.
     */
    where?: usersinvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersinvs to fetch.
     */
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersinvs.
     */
    cursor?: usersinvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersinvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersinvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersinvs.
     */
    distinct?: UsersinvsScalarFieldEnum | UsersinvsScalarFieldEnum[]
  }

  /**
   * usersinvs findFirstOrThrow
   */
  export type usersinvsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter, which usersinvs to fetch.
     */
    where?: usersinvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersinvs to fetch.
     */
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersinvs.
     */
    cursor?: usersinvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersinvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersinvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersinvs.
     */
    distinct?: UsersinvsScalarFieldEnum | UsersinvsScalarFieldEnum[]
  }

  /**
   * usersinvs findMany
   */
  export type usersinvsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter, which usersinvs to fetch.
     */
    where?: usersinvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersinvs to fetch.
     */
    orderBy?: usersinvsOrderByWithRelationInput | usersinvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usersinvs.
     */
    cursor?: usersinvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersinvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersinvs.
     */
    skip?: number
    distinct?: UsersinvsScalarFieldEnum | UsersinvsScalarFieldEnum[]
  }

  /**
   * usersinvs create
   */
  export type usersinvsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * The data needed to create a usersinvs.
     */
    data: XOR<usersinvsCreateInput, usersinvsUncheckedCreateInput>
  }

  /**
   * usersinvs createMany
   */
  export type usersinvsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usersinvs.
     */
    data: usersinvsCreateManyInput | usersinvsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersinvs createManyAndReturn
   */
  export type usersinvsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * The data used to create many usersinvs.
     */
    data: usersinvsCreateManyInput | usersinvsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usersinvs update
   */
  export type usersinvsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * The data needed to update a usersinvs.
     */
    data: XOR<usersinvsUpdateInput, usersinvsUncheckedUpdateInput>
    /**
     * Choose, which usersinvs to update.
     */
    where: usersinvsWhereUniqueInput
  }

  /**
   * usersinvs updateMany
   */
  export type usersinvsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usersinvs.
     */
    data: XOR<usersinvsUpdateManyMutationInput, usersinvsUncheckedUpdateManyInput>
    /**
     * Filter which usersinvs to update
     */
    where?: usersinvsWhereInput
    /**
     * Limit how many usersinvs to update.
     */
    limit?: number
  }

  /**
   * usersinvs updateManyAndReturn
   */
  export type usersinvsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * The data used to update usersinvs.
     */
    data: XOR<usersinvsUpdateManyMutationInput, usersinvsUncheckedUpdateManyInput>
    /**
     * Filter which usersinvs to update
     */
    where?: usersinvsWhereInput
    /**
     * Limit how many usersinvs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usersinvs upsert
   */
  export type usersinvsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * The filter to search for the usersinvs to update in case it exists.
     */
    where: usersinvsWhereUniqueInput
    /**
     * In case the usersinvs found by the `where` argument doesn't exist, create a new usersinvs with this data.
     */
    create: XOR<usersinvsCreateInput, usersinvsUncheckedCreateInput>
    /**
     * In case the usersinvs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersinvsUpdateInput, usersinvsUncheckedUpdateInput>
  }

  /**
   * usersinvs delete
   */
  export type usersinvsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
    /**
     * Filter which usersinvs to delete.
     */
    where: usersinvsWhereUniqueInput
  }

  /**
   * usersinvs deleteMany
   */
  export type usersinvsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersinvs to delete
     */
    where?: usersinvsWhereInput
    /**
     * Limit how many usersinvs to delete.
     */
    limit?: number
  }

  /**
   * usersinvs without action
   */
  export type usersinvsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersinvs
     */
    select?: usersinvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersinvs
     */
    omit?: usersinvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersinvsInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    name?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["category"]>

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const categoryWithNameOnly = await prisma.category.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `name`
     * const categoryWithNameOnly = await prisma.category.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `name`
     * const categoryWithNameOnly = await prisma.category.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InventoryScalarFieldEnum: {
    inventoryid: 'inventoryid',
    owner: 'owner',
    createdat: 'createdat',
    public: 'public',
    description: 'description',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    image: 'image',
    category: 'category',
    name: 'name',
    ownername: 'ownername',
    customid: 'customid'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    inventoryid: 'inventoryid',
    id: 'id',
    createdby: 'createdby',
    createdat: 'createdat',
    lasteditat: 'lasteditat',
    image: 'image',
    fieldvalue1: 'fieldvalue1',
    fieldvalue2: 'fieldvalue2',
    fieldvalue3: 'fieldvalue3',
    customid: 'customid',
    ownername: 'ownername'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    logedin: 'logedin',
    isadmin: 'isadmin',
    picture: 'picture',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsersinvsScalarFieldEnum: {
    userid: 'userid',
    inventoryid: 'inventoryid',
    role: 'role'
  };

  export type UsersinvsScalarFieldEnum = (typeof UsersinvsScalarFieldEnum)[keyof typeof UsersinvsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    inventoryid?: UuidFilter<"inventory"> | string
    owner?: UuidNullableFilter<"inventory"> | string | null
    createdat?: DateTimeNullableFilter<"inventory"> | Date | string | null
    public?: BoolNullableFilter<"inventory"> | boolean | null
    description?: StringNullableFilter<"inventory"> | string | null
    field1?: StringFilter<"inventory"> | string
    field2?: StringFilter<"inventory"> | string
    field3?: StringFilter<"inventory"> | string
    image?: StringNullableFilter<"inventory"> | string | null
    category?: StringFilter<"inventory"> | string
    name?: StringNullableFilter<"inventory"> | string | null
    ownername?: StringNullableFilter<"inventory"> | string | null
    customid?: StringNullableFilter<"inventory"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    usersinvs?: UsersinvsListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    inventoryid?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    public?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    field1?: SortOrder
    field2?: SortOrder
    field3?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    name?: SortOrderInput | SortOrder
    ownername?: SortOrderInput | SortOrder
    customid?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    usersinvs?: usersinvsOrderByRelationAggregateInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    inventoryid?: string
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    owner?: UuidNullableFilter<"inventory"> | string | null
    createdat?: DateTimeNullableFilter<"inventory"> | Date | string | null
    public?: BoolNullableFilter<"inventory"> | boolean | null
    description?: StringNullableFilter<"inventory"> | string | null
    field1?: StringFilter<"inventory"> | string
    field2?: StringFilter<"inventory"> | string
    field3?: StringFilter<"inventory"> | string
    image?: StringNullableFilter<"inventory"> | string | null
    category?: StringFilter<"inventory"> | string
    name?: StringNullableFilter<"inventory"> | string | null
    ownername?: StringNullableFilter<"inventory"> | string | null
    customid?: StringNullableFilter<"inventory"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    usersinvs?: UsersinvsListRelationFilter
  }, "inventoryid">

  export type inventoryOrderByWithAggregationInput = {
    inventoryid?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    public?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    field1?: SortOrder
    field2?: SortOrder
    field3?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    name?: SortOrderInput | SortOrder
    ownername?: SortOrderInput | SortOrder
    customid?: SortOrderInput | SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    inventoryid?: UuidWithAggregatesFilter<"inventory"> | string
    owner?: UuidNullableWithAggregatesFilter<"inventory"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    public?: BoolNullableWithAggregatesFilter<"inventory"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    field1?: StringWithAggregatesFilter<"inventory"> | string
    field2?: StringWithAggregatesFilter<"inventory"> | string
    field3?: StringWithAggregatesFilter<"inventory"> | string
    image?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    category?: StringWithAggregatesFilter<"inventory"> | string
    name?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    ownername?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    customid?: StringNullableWithAggregatesFilter<"inventory"> | string | null
  }

  export type itemsWhereInput = {
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    inventoryid?: UuidFilter<"items"> | string
    id?: UuidFilter<"items"> | string
    createdby?: UuidFilter<"items"> | string
    createdat?: DateTimeNullableFilter<"items"> | Date | string | null
    lasteditat?: DateTimeNullableFilter<"items"> | Date | string | null
    image?: StringNullableFilter<"items"> | string | null
    fieldvalue1?: StringFilter<"items"> | string
    fieldvalue2?: StringFilter<"items"> | string
    fieldvalue3?: StringFilter<"items"> | string
    customid?: StringNullableFilter<"items"> | string | null
    ownername?: StringFilter<"items"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type itemsOrderByWithRelationInput = {
    inventoryid?: SortOrder
    id?: SortOrder
    createdby?: SortOrder
    createdat?: SortOrderInput | SortOrder
    lasteditat?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    fieldvalue1?: SortOrder
    fieldvalue2?: SortOrder
    fieldvalue3?: SortOrder
    customid?: SortOrderInput | SortOrder
    ownername?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inventoryid_customid?: itemsInventoryidCustomidCompoundUniqueInput
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    inventoryid?: UuidFilter<"items"> | string
    createdby?: UuidFilter<"items"> | string
    createdat?: DateTimeNullableFilter<"items"> | Date | string | null
    lasteditat?: DateTimeNullableFilter<"items"> | Date | string | null
    image?: StringNullableFilter<"items"> | string | null
    fieldvalue1?: StringFilter<"items"> | string
    fieldvalue2?: StringFilter<"items"> | string
    fieldvalue3?: StringFilter<"items"> | string
    customid?: StringNullableFilter<"items"> | string | null
    ownername?: StringFilter<"items"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "inventoryid_customid">

  export type itemsOrderByWithAggregationInput = {
    inventoryid?: SortOrder
    id?: SortOrder
    createdby?: SortOrder
    createdat?: SortOrderInput | SortOrder
    lasteditat?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    fieldvalue1?: SortOrder
    fieldvalue2?: SortOrder
    fieldvalue3?: SortOrder
    customid?: SortOrderInput | SortOrder
    ownername?: SortOrder
    _count?: itemsCountOrderByAggregateInput
    _max?: itemsMaxOrderByAggregateInput
    _min?: itemsMinOrderByAggregateInput
  }

  export type itemsScalarWhereWithAggregatesInput = {
    AND?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    OR?: itemsScalarWhereWithAggregatesInput[]
    NOT?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    inventoryid?: UuidWithAggregatesFilter<"items"> | string
    id?: UuidWithAggregatesFilter<"items"> | string
    createdby?: UuidWithAggregatesFilter<"items"> | string
    createdat?: DateTimeNullableWithAggregatesFilter<"items"> | Date | string | null
    lasteditat?: DateTimeNullableWithAggregatesFilter<"items"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"items"> | string | null
    fieldvalue1?: StringWithAggregatesFilter<"items"> | string
    fieldvalue2?: StringWithAggregatesFilter<"items"> | string
    fieldvalue3?: StringWithAggregatesFilter<"items"> | string
    customid?: StringNullableWithAggregatesFilter<"items"> | string | null
    ownername?: StringWithAggregatesFilter<"items"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    logedin?: DateTimeNullableFilter<"users"> | Date | string | null
    isadmin?: BoolFilter<"users"> | boolean
    picture?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    inventory?: InventoryListRelationFilter
    items?: ItemsListRelationFilter
    usersinvs?: UsersinvsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logedin?: SortOrderInput | SortOrder
    isadmin?: SortOrder
    picture?: SortOrder
    password?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByRelationAggregateInput
    items?: itemsOrderByRelationAggregateInput
    usersinvs?: usersinvsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    logedin?: DateTimeNullableFilter<"users"> | Date | string | null
    isadmin?: BoolFilter<"users"> | boolean
    picture?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    inventory?: InventoryListRelationFilter
    items?: ItemsListRelationFilter
    usersinvs?: UsersinvsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logedin?: SortOrderInput | SortOrder
    isadmin?: SortOrder
    picture?: SortOrder
    password?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    logedin?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    isadmin?: BoolWithAggregatesFilter<"users"> | boolean
    picture?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type usersinvsWhereInput = {
    AND?: usersinvsWhereInput | usersinvsWhereInput[]
    OR?: usersinvsWhereInput[]
    NOT?: usersinvsWhereInput | usersinvsWhereInput[]
    userid?: UuidFilter<"usersinvs"> | string
    inventoryid?: UuidFilter<"usersinvs"> | string
    role?: StringNullableFilter<"usersinvs"> | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type usersinvsOrderByWithRelationInput = {
    userid?: SortOrder
    inventoryid?: SortOrder
    role?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type usersinvsWhereUniqueInput = Prisma.AtLeast<{
    userid_inventoryid?: usersinvsUseridInventoryidCompoundUniqueInput
    AND?: usersinvsWhereInput | usersinvsWhereInput[]
    OR?: usersinvsWhereInput[]
    NOT?: usersinvsWhereInput | usersinvsWhereInput[]
    userid?: UuidFilter<"usersinvs"> | string
    inventoryid?: UuidFilter<"usersinvs"> | string
    role?: StringNullableFilter<"usersinvs"> | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "userid_inventoryid">

  export type usersinvsOrderByWithAggregationInput = {
    userid?: SortOrder
    inventoryid?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: usersinvsCountOrderByAggregateInput
    _max?: usersinvsMaxOrderByAggregateInput
    _min?: usersinvsMinOrderByAggregateInput
  }

  export type usersinvsScalarWhereWithAggregatesInput = {
    AND?: usersinvsScalarWhereWithAggregatesInput | usersinvsScalarWhereWithAggregatesInput[]
    OR?: usersinvsScalarWhereWithAggregatesInput[]
    NOT?: usersinvsScalarWhereWithAggregatesInput | usersinvsScalarWhereWithAggregatesInput[]
    userid?: UuidWithAggregatesFilter<"usersinvs"> | string
    inventoryid?: UuidWithAggregatesFilter<"usersinvs"> | string
    role?: StringNullableWithAggregatesFilter<"usersinvs"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
  }

  export type categoryOrderByWithRelationInput = {
    name?: SortOrder
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
  }, "name">

  export type categoryOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type inventoryCreateInput = {
    inventoryid?: string
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
    users?: usersCreateNestedOneWithoutInventoryInput
    usersinvs?: usersinvsCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    inventoryid?: string
    owner?: string | null
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
    usersinvs?: usersinvsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutInventoryNestedInput
    usersinvs?: usersinvsUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    usersinvs?: usersinvsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    inventoryid?: string
    owner?: string | null
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
  }

  export type inventoryUpdateManyMutationInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventoryUncheckedUpdateManyInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemsCreateInput = {
    inventoryid: string
    id?: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
    users: usersCreateNestedOneWithoutItemsInput
  }

  export type itemsUncheckedCreateInput = {
    inventoryid: string
    id?: string
    createdby: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
  }

  export type itemsUpdateInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdby?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type itemsCreateManyInput = {
    inventoryid: string
    id?: string
    createdby: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
  }

  export type itemsUpdateManyMutationInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type itemsUncheckedUpdateManyInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdby?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryCreateNestedManyWithoutUsersInput
    items?: itemsCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
    items?: itemsUncheckedCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
    items?: itemsUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
    items?: itemsUncheckedUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersinvsCreateInput = {
    role?: string | null
    inventory: inventoryCreateNestedOneWithoutUsersinvsInput
    users: usersCreateNestedOneWithoutUsersinvsInput
  }

  export type usersinvsUncheckedCreateInput = {
    userid: string
    inventoryid: string
    role?: string | null
  }

  export type usersinvsUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUpdateOneRequiredWithoutUsersinvsNestedInput
    users?: usersUpdateOneRequiredWithoutUsersinvsNestedInput
  }

  export type usersinvsUncheckedUpdateInput = {
    userid?: StringFieldUpdateOperationsInput | string
    inventoryid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersinvsCreateManyInput = {
    userid: string
    inventoryid: string
    role?: string | null
  }

  export type usersinvsUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersinvsUncheckedUpdateManyInput = {
    userid?: StringFieldUpdateOperationsInput | string
    inventoryid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    name: string
  }

  export type categoryUncheckedCreateInput = {
    name: string
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateManyInput = {
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type UsersinvsListRelationFilter = {
    every?: usersinvsWhereInput
    some?: usersinvsWhereInput
    none?: usersinvsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersinvsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    inventoryid?: SortOrder
    owner?: SortOrder
    createdat?: SortOrder
    public?: SortOrder
    description?: SortOrder
    field1?: SortOrder
    field2?: SortOrder
    field3?: SortOrder
    image?: SortOrder
    category?: SortOrder
    name?: SortOrder
    ownername?: SortOrder
    customid?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    inventoryid?: SortOrder
    owner?: SortOrder
    createdat?: SortOrder
    public?: SortOrder
    description?: SortOrder
    field1?: SortOrder
    field2?: SortOrder
    field3?: SortOrder
    image?: SortOrder
    category?: SortOrder
    name?: SortOrder
    ownername?: SortOrder
    customid?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    inventoryid?: SortOrder
    owner?: SortOrder
    createdat?: SortOrder
    public?: SortOrder
    description?: SortOrder
    field1?: SortOrder
    field2?: SortOrder
    field3?: SortOrder
    image?: SortOrder
    category?: SortOrder
    name?: SortOrder
    ownername?: SortOrder
    customid?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type itemsInventoryidCustomidCompoundUniqueInput = {
    inventoryid: string
    customid: string
  }

  export type itemsCountOrderByAggregateInput = {
    inventoryid?: SortOrder
    id?: SortOrder
    createdby?: SortOrder
    createdat?: SortOrder
    lasteditat?: SortOrder
    image?: SortOrder
    fieldvalue1?: SortOrder
    fieldvalue2?: SortOrder
    fieldvalue3?: SortOrder
    customid?: SortOrder
    ownername?: SortOrder
  }

  export type itemsMaxOrderByAggregateInput = {
    inventoryid?: SortOrder
    id?: SortOrder
    createdby?: SortOrder
    createdat?: SortOrder
    lasteditat?: SortOrder
    image?: SortOrder
    fieldvalue1?: SortOrder
    fieldvalue2?: SortOrder
    fieldvalue3?: SortOrder
    customid?: SortOrder
    ownername?: SortOrder
  }

  export type itemsMinOrderByAggregateInput = {
    inventoryid?: SortOrder
    id?: SortOrder
    createdby?: SortOrder
    createdat?: SortOrder
    lasteditat?: SortOrder
    image?: SortOrder
    fieldvalue1?: SortOrder
    fieldvalue2?: SortOrder
    fieldvalue3?: SortOrder
    customid?: SortOrder
    ownername?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput
    some?: inventoryWhereInput
    none?: inventoryWhereInput
  }

  export type ItemsListRelationFilter = {
    every?: itemsWhereInput
    some?: itemsWhereInput
    none?: itemsWhereInput
  }

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logedin?: SortOrder
    isadmin?: SortOrder
    picture?: SortOrder
    password?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logedin?: SortOrder
    isadmin?: SortOrder
    picture?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logedin?: SortOrder
    isadmin?: SortOrder
    picture?: SortOrder
    password?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InventoryScalarRelationFilter = {
    is?: inventoryWhereInput
    isNot?: inventoryWhereInput
  }

  export type usersinvsUseridInventoryidCompoundUniqueInput = {
    userid: string
    inventoryid: string
  }

  export type usersinvsCountOrderByAggregateInput = {
    userid?: SortOrder
    inventoryid?: SortOrder
    role?: SortOrder
  }

  export type usersinvsMaxOrderByAggregateInput = {
    userid?: SortOrder
    inventoryid?: SortOrder
    role?: SortOrder
  }

  export type usersinvsMinOrderByAggregateInput = {
    userid?: SortOrder
    inventoryid?: SortOrder
    role?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type usersCreateNestedOneWithoutInventoryInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    connect?: usersWhereUniqueInput
  }

  export type usersinvsCreateNestedManyWithoutInventoryInput = {
    create?: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput> | usersinvsCreateWithoutInventoryInput[] | usersinvsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutInventoryInput | usersinvsCreateOrConnectWithoutInventoryInput[]
    createMany?: usersinvsCreateManyInventoryInputEnvelope
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
  }

  export type usersinvsUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput> | usersinvsCreateWithoutInventoryInput[] | usersinvsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutInventoryInput | usersinvsCreateOrConnectWithoutInventoryInput[]
    createMany?: usersinvsCreateManyInventoryInputEnvelope
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    upsert?: usersUpsertWithoutInventoryInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInventoryInput, usersUpdateWithoutInventoryInput>, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type usersinvsUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput> | usersinvsCreateWithoutInventoryInput[] | usersinvsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutInventoryInput | usersinvsCreateOrConnectWithoutInventoryInput[]
    upsert?: usersinvsUpsertWithWhereUniqueWithoutInventoryInput | usersinvsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: usersinvsCreateManyInventoryInputEnvelope
    set?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    disconnect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    delete?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    update?: usersinvsUpdateWithWhereUniqueWithoutInventoryInput | usersinvsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: usersinvsUpdateManyWithWhereWithoutInventoryInput | usersinvsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
  }

  export type usersinvsUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput> | usersinvsCreateWithoutInventoryInput[] | usersinvsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutInventoryInput | usersinvsCreateOrConnectWithoutInventoryInput[]
    upsert?: usersinvsUpsertWithWhereUniqueWithoutInventoryInput | usersinvsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: usersinvsCreateManyInventoryInputEnvelope
    set?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    disconnect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    delete?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    update?: usersinvsUpdateWithWhereUniqueWithoutInventoryInput | usersinvsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: usersinvsUpdateManyWithWhereWithoutInventoryInput | usersinvsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutItemsInput = {
    create?: XOR<usersCreateWithoutItemsInput, usersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutItemsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<usersCreateWithoutItemsInput, usersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutItemsInput
    upsert?: usersUpsertWithoutItemsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutItemsInput, usersUpdateWithoutItemsInput>, usersUncheckedUpdateWithoutItemsInput>
  }

  export type inventoryCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type itemsCreateNestedManyWithoutUsersInput = {
    create?: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput> | itemsCreateWithoutUsersInput[] | itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsersInput | itemsCreateOrConnectWithoutUsersInput[]
    createMany?: itemsCreateManyUsersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type usersinvsCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput> | usersinvsCreateWithoutUsersInput[] | usersinvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutUsersInput | usersinvsCreateOrConnectWithoutUsersInput[]
    createMany?: usersinvsCreateManyUsersInputEnvelope
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
  }

  export type inventoryUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type itemsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput> | itemsCreateWithoutUsersInput[] | itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsersInput | itemsCreateOrConnectWithoutUsersInput[]
    createMany?: itemsCreateManyUsersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type usersinvsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput> | usersinvsCreateWithoutUsersInput[] | usersinvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutUsersInput | usersinvsCreateOrConnectWithoutUsersInput[]
    createMany?: usersinvsCreateManyUsersInputEnvelope
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type inventoryUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUsersInput | inventoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUsersInput | inventoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUsersInput | inventoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type itemsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput> | itemsCreateWithoutUsersInput[] | itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsersInput | itemsCreateOrConnectWithoutUsersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsersInput | itemsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: itemsCreateManyUsersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsersInput | itemsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsersInput | itemsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type usersinvsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput> | usersinvsCreateWithoutUsersInput[] | usersinvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutUsersInput | usersinvsCreateOrConnectWithoutUsersInput[]
    upsert?: usersinvsUpsertWithWhereUniqueWithoutUsersInput | usersinvsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersinvsCreateManyUsersInputEnvelope
    set?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    disconnect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    delete?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    update?: usersinvsUpdateWithWhereUniqueWithoutUsersInput | usersinvsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersinvsUpdateManyWithWhereWithoutUsersInput | usersinvsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
  }

  export type inventoryUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUsersInput | inventoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUsersInput | inventoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUsersInput | inventoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type itemsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput> | itemsCreateWithoutUsersInput[] | itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsersInput | itemsCreateOrConnectWithoutUsersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsersInput | itemsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: itemsCreateManyUsersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsersInput | itemsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsersInput | itemsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type usersinvsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput> | usersinvsCreateWithoutUsersInput[] | usersinvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersinvsCreateOrConnectWithoutUsersInput | usersinvsCreateOrConnectWithoutUsersInput[]
    upsert?: usersinvsUpsertWithWhereUniqueWithoutUsersInput | usersinvsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersinvsCreateManyUsersInputEnvelope
    set?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    disconnect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    delete?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    connect?: usersinvsWhereUniqueInput | usersinvsWhereUniqueInput[]
    update?: usersinvsUpdateWithWhereUniqueWithoutUsersInput | usersinvsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersinvsUpdateManyWithWhereWithoutUsersInput | usersinvsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutUsersinvsInput = {
    create?: XOR<inventoryCreateWithoutUsersinvsInput, inventoryUncheckedCreateWithoutUsersinvsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersinvsInput
    connect?: inventoryWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUsersinvsInput = {
    create?: XOR<usersCreateWithoutUsersinvsInput, usersUncheckedCreateWithoutUsersinvsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsersinvsInput
    connect?: usersWhereUniqueInput
  }

  export type inventoryUpdateOneRequiredWithoutUsersinvsNestedInput = {
    create?: XOR<inventoryCreateWithoutUsersinvsInput, inventoryUncheckedCreateWithoutUsersinvsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersinvsInput
    upsert?: inventoryUpsertWithoutUsersinvsInput
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutUsersinvsInput, inventoryUpdateWithoutUsersinvsInput>, inventoryUncheckedUpdateWithoutUsersinvsInput>
  }

  export type usersUpdateOneRequiredWithoutUsersinvsNestedInput = {
    create?: XOR<usersCreateWithoutUsersinvsInput, usersUncheckedCreateWithoutUsersinvsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsersinvsInput
    upsert?: usersUpsertWithoutUsersinvsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsersinvsInput, usersUpdateWithoutUsersinvsInput>, usersUncheckedUpdateWithoutUsersinvsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateWithoutInventoryInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    items?: itemsCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInventoryInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    items?: itemsUncheckedCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInventoryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
  }

  export type usersinvsCreateWithoutInventoryInput = {
    role?: string | null
    users: usersCreateNestedOneWithoutUsersinvsInput
  }

  export type usersinvsUncheckedCreateWithoutInventoryInput = {
    userid: string
    role?: string | null
  }

  export type usersinvsCreateOrConnectWithoutInventoryInput = {
    where: usersinvsWhereUniqueInput
    create: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput>
  }

  export type usersinvsCreateManyInventoryInputEnvelope = {
    data: usersinvsCreateManyInventoryInput | usersinvsCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutInventoryInput = {
    update: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInventoryInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type usersUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUncheckedUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersinvsUpsertWithWhereUniqueWithoutInventoryInput = {
    where: usersinvsWhereUniqueInput
    update: XOR<usersinvsUpdateWithoutInventoryInput, usersinvsUncheckedUpdateWithoutInventoryInput>
    create: XOR<usersinvsCreateWithoutInventoryInput, usersinvsUncheckedCreateWithoutInventoryInput>
  }

  export type usersinvsUpdateWithWhereUniqueWithoutInventoryInput = {
    where: usersinvsWhereUniqueInput
    data: XOR<usersinvsUpdateWithoutInventoryInput, usersinvsUncheckedUpdateWithoutInventoryInput>
  }

  export type usersinvsUpdateManyWithWhereWithoutInventoryInput = {
    where: usersinvsScalarWhereInput
    data: XOR<usersinvsUpdateManyMutationInput, usersinvsUncheckedUpdateManyWithoutInventoryInput>
  }

  export type usersinvsScalarWhereInput = {
    AND?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
    OR?: usersinvsScalarWhereInput[]
    NOT?: usersinvsScalarWhereInput | usersinvsScalarWhereInput[]
    userid?: UuidFilter<"usersinvs"> | string
    inventoryid?: UuidFilter<"usersinvs"> | string
    role?: StringNullableFilter<"usersinvs"> | string | null
  }

  export type usersCreateWithoutItemsInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutItemsInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
    usersinvs?: usersinvsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutItemsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutItemsInput, usersUncheckedCreateWithoutItemsInput>
  }

  export type usersUpsertWithoutItemsInput = {
    update: XOR<usersUpdateWithoutItemsInput, usersUncheckedUpdateWithoutItemsInput>
    create: XOR<usersCreateWithoutItemsInput, usersUncheckedCreateWithoutItemsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutItemsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutItemsInput, usersUncheckedUpdateWithoutItemsInput>
  }

  export type usersUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
    usersinvs?: usersinvsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type inventoryCreateWithoutUsersInput = {
    inventoryid?: string
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
    usersinvs?: usersinvsCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutUsersInput = {
    inventoryid?: string
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
    usersinvs?: usersinvsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput>
  }

  export type inventoryCreateManyUsersInputEnvelope = {
    data: inventoryCreateManyUsersInput | inventoryCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type itemsCreateWithoutUsersInput = {
    inventoryid: string
    id?: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
  }

  export type itemsUncheckedCreateWithoutUsersInput = {
    inventoryid: string
    id?: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
  }

  export type itemsCreateOrConnectWithoutUsersInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput>
  }

  export type itemsCreateManyUsersInputEnvelope = {
    data: itemsCreateManyUsersInput | itemsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type usersinvsCreateWithoutUsersInput = {
    role?: string | null
    inventory: inventoryCreateNestedOneWithoutUsersinvsInput
  }

  export type usersinvsUncheckedCreateWithoutUsersInput = {
    inventoryid: string
    role?: string | null
  }

  export type usersinvsCreateOrConnectWithoutUsersInput = {
    where: usersinvsWhereUniqueInput
    create: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput>
  }

  export type usersinvsCreateManyUsersInputEnvelope = {
    data: usersinvsCreateManyUsersInput | usersinvsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type inventoryUpsertWithWhereUniqueWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutUsersInput, inventoryUncheckedUpdateWithoutUsersInput>
    create: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutUsersInput, inventoryUncheckedUpdateWithoutUsersInput>
  }

  export type inventoryUpdateManyWithWhereWithoutUsersInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutUsersInput>
  }

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    OR?: inventoryScalarWhereInput[]
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    inventoryid?: UuidFilter<"inventory"> | string
    owner?: UuidNullableFilter<"inventory"> | string | null
    createdat?: DateTimeNullableFilter<"inventory"> | Date | string | null
    public?: BoolNullableFilter<"inventory"> | boolean | null
    description?: StringNullableFilter<"inventory"> | string | null
    field1?: StringFilter<"inventory"> | string
    field2?: StringFilter<"inventory"> | string
    field3?: StringFilter<"inventory"> | string
    image?: StringNullableFilter<"inventory"> | string | null
    category?: StringFilter<"inventory"> | string
    name?: StringNullableFilter<"inventory"> | string | null
    ownername?: StringNullableFilter<"inventory"> | string | null
    customid?: StringNullableFilter<"inventory"> | string | null
  }

  export type itemsUpsertWithWhereUniqueWithoutUsersInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutUsersInput, itemsUncheckedUpdateWithoutUsersInput>
    create: XOR<itemsCreateWithoutUsersInput, itemsUncheckedCreateWithoutUsersInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutUsersInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutUsersInput, itemsUncheckedUpdateWithoutUsersInput>
  }

  export type itemsUpdateManyWithWhereWithoutUsersInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutUsersInput>
  }

  export type itemsScalarWhereInput = {
    AND?: itemsScalarWhereInput | itemsScalarWhereInput[]
    OR?: itemsScalarWhereInput[]
    NOT?: itemsScalarWhereInput | itemsScalarWhereInput[]
    inventoryid?: UuidFilter<"items"> | string
    id?: UuidFilter<"items"> | string
    createdby?: UuidFilter<"items"> | string
    createdat?: DateTimeNullableFilter<"items"> | Date | string | null
    lasteditat?: DateTimeNullableFilter<"items"> | Date | string | null
    image?: StringNullableFilter<"items"> | string | null
    fieldvalue1?: StringFilter<"items"> | string
    fieldvalue2?: StringFilter<"items"> | string
    fieldvalue3?: StringFilter<"items"> | string
    customid?: StringNullableFilter<"items"> | string | null
    ownername?: StringFilter<"items"> | string
  }

  export type usersinvsUpsertWithWhereUniqueWithoutUsersInput = {
    where: usersinvsWhereUniqueInput
    update: XOR<usersinvsUpdateWithoutUsersInput, usersinvsUncheckedUpdateWithoutUsersInput>
    create: XOR<usersinvsCreateWithoutUsersInput, usersinvsUncheckedCreateWithoutUsersInput>
  }

  export type usersinvsUpdateWithWhereUniqueWithoutUsersInput = {
    where: usersinvsWhereUniqueInput
    data: XOR<usersinvsUpdateWithoutUsersInput, usersinvsUncheckedUpdateWithoutUsersInput>
  }

  export type usersinvsUpdateManyWithWhereWithoutUsersInput = {
    where: usersinvsScalarWhereInput
    data: XOR<usersinvsUpdateManyMutationInput, usersinvsUncheckedUpdateManyWithoutUsersInput>
  }

  export type inventoryCreateWithoutUsersinvsInput = {
    inventoryid?: string
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
    users?: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutUsersinvsInput = {
    inventoryid?: string
    owner?: string | null
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
  }

  export type inventoryCreateOrConnectWithoutUsersinvsInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutUsersinvsInput, inventoryUncheckedCreateWithoutUsersinvsInput>
  }

  export type usersCreateWithoutUsersinvsInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryCreateNestedManyWithoutUsersInput
    items?: itemsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUsersinvsInput = {
    id?: string
    email: string
    name: string
    logedin?: Date | string | null
    isadmin?: boolean
    picture?: string
    password?: string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
    items?: itemsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUsersinvsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsersinvsInput, usersUncheckedCreateWithoutUsersinvsInput>
  }

  export type inventoryUpsertWithoutUsersinvsInput = {
    update: XOR<inventoryUpdateWithoutUsersinvsInput, inventoryUncheckedUpdateWithoutUsersinvsInput>
    create: XOR<inventoryCreateWithoutUsersinvsInput, inventoryUncheckedCreateWithoutUsersinvsInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutUsersinvsInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutUsersinvsInput, inventoryUncheckedUpdateWithoutUsersinvsInput>
  }

  export type inventoryUpdateWithoutUsersinvsInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutUsersinvsInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutUsersinvsInput = {
    update: XOR<usersUpdateWithoutUsersinvsInput, usersUncheckedUpdateWithoutUsersinvsInput>
    create: XOR<usersCreateWithoutUsersinvsInput, usersUncheckedCreateWithoutUsersinvsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsersinvsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsersinvsInput, usersUncheckedUpdateWithoutUsersinvsInput>
  }

  export type usersUpdateWithoutUsersinvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
    items?: itemsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsersinvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logedin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
    items?: itemsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersinvsCreateManyInventoryInput = {
    userid: string
    role?: string | null
  }

  export type usersinvsUpdateWithoutInventoryInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUsersinvsNestedInput
  }

  export type usersinvsUncheckedUpdateWithoutInventoryInput = {
    userid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersinvsUncheckedUpdateManyWithoutInventoryInput = {
    userid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventoryCreateManyUsersInput = {
    inventoryid?: string
    createdat?: Date | string | null
    public?: boolean | null
    description?: string | null
    field1: string
    field2: string
    field3: string
    image?: string | null
    category: string
    name?: string | null
    ownername?: string | null
    customid?: string | null
  }

  export type itemsCreateManyUsersInput = {
    inventoryid: string
    id?: string
    createdat?: Date | string | null
    lasteditat?: Date | string | null
    image?: string | null
    fieldvalue1: string
    fieldvalue2: string
    fieldvalue3: string
    customid?: string | null
    ownername: string
  }

  export type usersinvsCreateManyUsersInput = {
    inventoryid: string
    role?: string | null
  }

  export type inventoryUpdateWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    usersinvs?: usersinvsUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    usersinvs?: usersinvsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateManyWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    field1?: StringFieldUpdateOperationsInput | string
    field2?: StringFieldUpdateOperationsInput | string
    field3?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: NullableStringFieldUpdateOperationsInput | string | null
    customid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemsUpdateWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type itemsUncheckedUpdateWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type itemsUncheckedUpdateManyWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasteditat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fieldvalue1?: StringFieldUpdateOperationsInput | string
    fieldvalue2?: StringFieldUpdateOperationsInput | string
    fieldvalue3?: StringFieldUpdateOperationsInput | string
    customid?: NullableStringFieldUpdateOperationsInput | string | null
    ownername?: StringFieldUpdateOperationsInput | string
  }

  export type usersinvsUpdateWithoutUsersInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: inventoryUpdateOneRequiredWithoutUsersinvsNestedInput
  }

  export type usersinvsUncheckedUpdateWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersinvsUncheckedUpdateManyWithoutUsersInput = {
    inventoryid?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}