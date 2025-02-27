/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * Arguments used to create {@link Totem}
 * @category Accounts
 * @category generated
 */
export type TotemArgs = {
    dao: web3.PublicKey;
    slotsPerChallengePeriod: beet.bignum;
    admin: web3.PublicKey;
    statements: beet.bignum;
    requests: beet.bignum;
    totalDisputes: beet.bignum;
};
export declare const totemDiscriminator: number[];
/**
 * Holds the data for the {@link Totem} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class Totem implements TotemArgs {
    readonly dao: web3.PublicKey;
    readonly slotsPerChallengePeriod: beet.bignum;
    readonly admin: web3.PublicKey;
    readonly statements: beet.bignum;
    readonly requests: beet.bignum;
    readonly totalDisputes: beet.bignum;
    private constructor();
    /**
     * Creates a {@link Totem} instance from the provided args.
     */
    static fromArgs(args: TotemArgs): Totem;
    /**
     * Deserializes the {@link Totem} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [Totem, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link Totem} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<Totem>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        accountDiscriminator: any;
        dao: any;
        slotsPerChallengePeriod: any;
        admin: any;
        statements: any;
        requests: any;
        totalDisputes: any;
    }>;
    /**
     * Deserializes the {@link Totem} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [Totem, number];
    /**
     * Serializes the {@link Totem} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link Totem}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link Totem} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link Totem} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link Totem} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        dao: string;
        slotsPerChallengePeriod: number | {
            toNumber: () => number;
        };
        admin: string;
        statements: number | {
            toNumber: () => number;
        };
        requests: number | {
            toNumber: () => number;
        };
        totalDisputes: number | {
            toNumber: () => number;
        };
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const totemBeet: beet.BeetStruct<Totem, TotemArgs & {
    accountDiscriminator: number[];
}>;
