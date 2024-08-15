// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: simple.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "simple";

/**
 * Adding a comment to the syntax will become the first
 * comment in the output source file.
 */

/** Example comment on the Simple message */
export interface Simple {
  $type?: "simple.Simple";
  /**
   * Name field
   *
   * @deprecated
   */
  name: string;
  /**
   * Age field
   *
   * @deprecated
   */
  age: number;
  /**
   * This comment will also attach;
   *
   * @deprecated
   */
  child:
    | Child
    | undefined;
  /** @deprecated */
  testField: string;
  testNotDeprecated: string;
}

export interface Child {
  $type?: "simple.Child";
  name: string;
}

function createBaseSimple(): Simple {
  return { $type: "simple.Simple", name: "", age: 0, child: undefined, testField: "", testNotDeprecated: "" };
}

export const Simple = {
  $type: "simple.Simple" as const,

  encode(message: Simple, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(16).int32(message.age);
    }
    if (message.child !== undefined) {
      Child.encode(message.child, writer.uint32(26).fork()).join();
    }
    if (message.testField !== "") {
      writer.uint32(34).string(message.testField);
    }
    if (message.testNotDeprecated !== "") {
      writer.uint32(42).string(message.testNotDeprecated);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Simple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.child = Child.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.testField = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.testNotDeprecated = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Simple {
    return {
      $type: Simple.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
      child: isSet(object.child) ? Child.fromJSON(object.child) : undefined,
      testField: isSet(object.testField) ? globalThis.String(object.testField) : "",
      testNotDeprecated: isSet(object.testNotDeprecated) ? globalThis.String(object.testNotDeprecated) : "",
    };
  },

  toJSON(message: Simple): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.child !== undefined) {
      obj.child = Child.toJSON(message.child);
    }
    if (message.testField !== "") {
      obj.testField = message.testField;
    }
    if (message.testNotDeprecated !== "") {
      obj.testNotDeprecated = message.testNotDeprecated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Simple>, I>>(base?: I): Simple {
    return Simple.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Simple>, I>>(object: I): Simple {
    const message = createBaseSimple();
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    message.child = (object.child !== undefined && object.child !== null) ? Child.fromPartial(object.child) : undefined;
    message.testField = object.testField ?? "";
    message.testNotDeprecated = object.testNotDeprecated ?? "";
    return message;
  },
};

function createBaseChild(): Child {
  return { $type: "simple.Child", name: "" };
}

export const Child = {
  $type: "simple.Child" as const,

  encode(message: Child, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Child {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Child {
    return { $type: Child.$type, name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: Child): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Child>, I>>(base?: I): Child {
    return Child.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Child>, I>>(object: I): Child {
    const message = createBaseChild();
    message.name = object.name ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
