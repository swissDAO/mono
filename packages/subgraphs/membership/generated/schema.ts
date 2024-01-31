// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from '@graphprotocol/graph-ts';

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Token entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Token', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Token | null {
    return changetype<Token | null>(store.get_in_block('Token', id));
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get('Token', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get imageUri(): string {
    let value = this.get('imageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set imageUri(value: string) {
    this.set('imageUri', Value.fromString(value));
  }

  get name(): string {
    let value = this.get('name');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set('name', Value.fromString(value));
  }

  get description(): string {
    let value = this.get('description');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set('description', Value.fromString(value));
  }

  get attributes(): string {
    let value = this.get('attributes');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set attributes(value: string) {
    this.set('attributes', Value.fromString(value));
  }
}

export class Guild extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Guild entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Guild must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Guild', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Guild | null {
    return changetype<Guild | null>(store.get_in_block('Guild', id));
  }

  static load(id: string): Guild | null {
    return changetype<Guild | null>(store.get('Guild', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get imageUri(): string {
    let value = this.get('imageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set imageUri(value: string) {
    this.set('imageUri', Value.fromString(value));
  }

  get name(): string {
    let value = this.get('name');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set('name', Value.fromString(value));
  }

  get description(): string {
    let value = this.get('description');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set('description', Value.fromString(value));
  }

  get holders(): Array<string> {
    let value = this.get('holders');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set holders(value: Array<string>) {
    this.set('holders', Value.fromStringArray(value));
  }
}

export class Membership extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Membership entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Membership must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Membership', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Membership | null {
    return changetype<Membership | null>(store.get_in_block('Membership', id));
  }

  static load(id: string): Membership | null {
    return changetype<Membership | null>(store.get('Membership', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get holder(): Bytes {
    let value = this.get('holder');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set holder(value: Bytes) {
    this.set('holder', Value.fromBytes(value));
  }

  get profileImageUri(): string {
    let value = this.get('profileImageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set profileImageUri(value: string) {
    this.set('profileImageUri', Value.fromString(value));
  }

  get nickname(): string {
    let value = this.get('nickname');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set nickname(value: string) {
    this.set('nickname', Value.fromString(value));
  }

  get joined_At(): BigInt {
    let value = this.get('joined_At');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set joined_At(value: BigInt) {
    this.set('joined_At', Value.fromBigInt(value));
  }

  get minted_At(): BigInt {
    let value = this.get('minted_At');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set minted_At(value: BigInt) {
    this.set('minted_At', Value.fromBigInt(value));
  }

  get experiencePoints(): BigInt {
    let value = this.get('experiencePoints');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set experiencePoints(value: BigInt) {
    this.set('experiencePoints', Value.fromBigInt(value));
  }

  get activityPoints(): BigInt {
    let value = this.get('activityPoints');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set activityPoints(value: BigInt) {
    this.set('activityPoints', Value.fromBigInt(value));
  }

  get attendedEvents(): BigInt {
    let value = this.get('attendedEvents');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set attendedEvents(value: BigInt) {
    this.set('attendedEvents', Value.fromBigInt(value));
  }

  get guilds(): GuildLoader {
    return new GuildLoader('Membership', this.get('id')!.toString(), 'guilds');
  }
}

export class GuildLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Guild[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Guild[]>(value);
  }
}
