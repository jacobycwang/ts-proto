// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: remove-enum-prefix-unrecognized-enum-value.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "";

export enum Foo {
  UNSPECIFIED = 0,
  BAR = 1,
  BAZ = 2,
}

export function fooFromJSON(object: any): Foo {
  switch (object) {
    case 0:
    case "FOO_UNSPECIFIED":
      return Foo.UNSPECIFIED;
    case 1:
    case "FOO_BAR":
      return Foo.BAR;
    case 2:
    case "FOO_BAZ":
      return Foo.BAZ;
    default:
      return Foo.UNSPECIFIED;
  }
}

export function fooToJSON(object: Foo): string {
  switch (object) {
    case Foo.UNSPECIFIED:
      return "FOO_UNSPECIFIED";
    case Foo.BAR:
      return "FOO_BAR";
    case Foo.BAZ:
      return "FOO_BAZ";
    default:
      return "FOO_UNSPECIFIED";
  }
}

export enum Bar {
  UNSPECIFIED = 0,
  BAZ = 1,
  QUX = 2,
}

export function barFromJSON(object: any): Bar {
  switch (object) {
    case 0:
    case "BAR_UNSPECIFIED":
      return Bar.UNSPECIFIED;
    case 1:
    case "BAZ":
      return Bar.BAZ;
    case 2:
    case "QUX":
      return Bar.QUX;
    default:
      return Bar.UNSPECIFIED;
  }
}

export function barToJSON(object: Bar): string {
  switch (object) {
    case Bar.UNSPECIFIED:
      return "BAR_UNSPECIFIED";
    case Bar.BAZ:
      return "BAZ";
    case Bar.QUX:
      return "QUX";
    default:
      return "BAR_UNSPECIFIED";
  }
}

export interface WithNestedEnum {
  foo: Foo;
  Bar: Bar;
  baz: WithNestedEnum_Baz;
  qux: WithNestedEnum_Qux;
}

export enum WithNestedEnum_Baz {
  UNSPECIFIED = 0,
  ONE = 1,
  TWO = 2,
}

export function withNestedEnum_BazFromJSON(object: any): WithNestedEnum_Baz {
  switch (object) {
    case 0:
    case "BAZ_UNSPECIFIED":
      return WithNestedEnum_Baz.UNSPECIFIED;
    case 1:
    case "BAZ_ONE":
      return WithNestedEnum_Baz.ONE;
    case 2:
    case "BAZ_TWO":
      return WithNestedEnum_Baz.TWO;
    default:
      return WithNestedEnum_Baz.UNSPECIFIED;
  }
}

export function withNestedEnum_BazToJSON(object: WithNestedEnum_Baz): string {
  switch (object) {
    case WithNestedEnum_Baz.UNSPECIFIED:
      return "BAZ_UNSPECIFIED";
    case WithNestedEnum_Baz.ONE:
      return "BAZ_ONE";
    case WithNestedEnum_Baz.TWO:
      return "BAZ_TWO";
    default:
      return "BAZ_UNSPECIFIED";
  }
}

export enum WithNestedEnum_Qux {
  UNSPECIFIED = 0,
  ONE = 1,
  TWO = 2,
}

export function withNestedEnum_QuxFromJSON(object: any): WithNestedEnum_Qux {
  switch (object) {
    case 0:
    case "QUX_UNSPECIFIED":
      return WithNestedEnum_Qux.UNSPECIFIED;
    case 1:
    case "ONE":
      return WithNestedEnum_Qux.ONE;
    case 2:
    case "TWO":
      return WithNestedEnum_Qux.TWO;
    default:
      return WithNestedEnum_Qux.UNSPECIFIED;
  }
}

export function withNestedEnum_QuxToJSON(object: WithNestedEnum_Qux): string {
  switch (object) {
    case WithNestedEnum_Qux.UNSPECIFIED:
      return "QUX_UNSPECIFIED";
    case WithNestedEnum_Qux.ONE:
      return "ONE";
    case WithNestedEnum_Qux.TWO:
      return "TWO";
    default:
      return "QUX_UNSPECIFIED";
  }
}

function createBaseWithNestedEnum(): WithNestedEnum {
  return { foo: 0, Bar: 0, baz: 0, qux: 0 };
}

export const WithNestedEnum = {
  encode(message: WithNestedEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.foo !== 0) {
      writer.uint32(8).int32(message.foo);
    }
    if (message.Bar !== 0) {
      writer.uint32(16).int32(message.Bar);
    }
    if (message.baz !== 0) {
      writer.uint32(24).int32(message.baz);
    }
    if (message.qux !== 0) {
      writer.uint32(32).int32(message.qux);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WithNestedEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithNestedEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.foo = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Bar = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.baz = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.qux = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithNestedEnum {
    return {
      foo: isSet(object.foo) ? fooFromJSON(object.foo) : 0,
      Bar: isSet(object.Bar) ? barFromJSON(object.Bar) : 0,
      baz: isSet(object.baz) ? withNestedEnum_BazFromJSON(object.baz) : 0,
      qux: isSet(object.qux) ? withNestedEnum_QuxFromJSON(object.qux) : 0,
    };
  },

  toJSON(message: WithNestedEnum): unknown {
    const obj: any = {};
    if (message.foo !== 0) {
      obj.foo = fooToJSON(message.foo);
    }
    if (message.Bar !== 0) {
      obj.Bar = barToJSON(message.Bar);
    }
    if (message.baz !== 0) {
      obj.baz = withNestedEnum_BazToJSON(message.baz);
    }
    if (message.qux !== 0) {
      obj.qux = withNestedEnum_QuxToJSON(message.qux);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WithNestedEnum>, I>>(base?: I): WithNestedEnum {
    return WithNestedEnum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WithNestedEnum>, I>>(object: I): WithNestedEnum {
    const message = createBaseWithNestedEnum();
    message.foo = object.foo ?? 0;
    message.Bar = object.Bar ?? 0;
    message.baz = object.baz ?? 0;
    message.qux = object.qux ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
