import { Address, BigInt, Bytes, store } from '@graphprotocol/graph-ts';
import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Token, TokenBalance } from '../../generated/schema';
import { fetchHolder, fetchTransaction } from '../utils';

export const EXPERIENCE_POINT_TOKEN_ID = '1';
export const ACTIVITY_POINT_TOKEN_ID = '2';
export const ATTENDED_EVENTS_TOKEN_ID = '3';

export function fetchToken(id: string): Token {
  let token = Token.load(id);

  if (!token) {
    token = new Token(id);
    token.tokenID = BigInt.fromString(id);
    token.imageUri = '';
    token.name = '';
    token.description = '';
    token.attributes = '';
    token.totalAmount = BigInt.fromI32(0);
    token.transactions = [];
    token.balances = [];
    token.holders = [];
  }

  return token;
}

export function fetchTokenBalance(id: string): TokenBalance {
  let tokenBalance = TokenBalance.load(id);

  if (!tokenBalance) {
    tokenBalance = new TokenBalance(id);
    tokenBalance.holder = Bytes.fromI32(0);
    tokenBalance.balance = BigInt.fromI32(0);
  }

  return tokenBalance;
}

export function handleTokenTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;
  const from = event.params.from;
  const to = event.params.to;
  const value = event.params.value;

  let token = fetchToken(tokenId.toString());

  const tokenStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  token.imageUri = tokenStruct.imageUri;
  token.name = tokenStruct.name;
  token.description = tokenStruct.description;
  token.attributes = tokenStruct.attributes;

  const transactions = token.transactions;
  let balances = token.balances;
  let holders = token.holders;

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.amount = value;
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;

  transactions.push(transaction.id);

  token.transactions = transactions;

  if (event.params.from == Address.zero()) {
    transaction.type = 'TOKEN_MINT';
    transaction.to = fetchHolder(event.address, to).id;

    token.totalAmount = token.totalAmount.plus(value);

    let tokenBalance = fetchTokenBalance(
      `${to.toHexString()}-${tokenId.toString()}`
    );
    tokenBalance.holder = to;
    tokenBalance.balance = tokenBalance.balance.plus(value);

    balances.push(tokenBalance.id);
    holders.push(member.id);

    token.balances = balances;
    token.holders = holders;
    tokenBalance.save();

    if (token.id == '1') {
      member.experiencePoints = token.id;
    } else if (token.id == '2') {
      member.activityPoints = token.id;
    } else if (token.id == '3') {
      member.attendedEvents = token.id;
    }
    member.save();
  } else if (event.params.to == Address.zero()) {
    transaction.type = 'TOKEN_BURN';
    transaction.from = fetchHolder(event.address, from).id;

    token.totalAmount = token.totalAmount.minus(value);

    let tokenBalance = fetchTokenBalance(
      `${from.toHexString()}-${tokenId.toString()}`
    );
    tokenBalance.balance = tokenBalance.balance.minus(value);

    const indexOfBalance = balances.indexOf(tokenBalance.id);
    const indexOfHolder = holders.indexOf(member.id);

    balances.splice(indexOfBalance, 1);
    holders.splice(indexOfHolder, 1);

    token.balances = balances;
    token.holders = holders;
    tokenBalance.save();

    store.remove('Token', tokenId.toString());

    member.save();
  }

  transaction.save();
  token.save();
}
