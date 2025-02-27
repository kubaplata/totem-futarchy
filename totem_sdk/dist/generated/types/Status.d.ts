/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
/**
 * This type is used to derive the {@link Status} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link Status} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type StatusRecord = {
    Proposed: void;
    Disputed: void;
    Settled: {
        fields: [boolean];
    };
};
/**
 * Union type respresenting the Status data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isStatus*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type Status = beet.DataEnumKeyAsKind<StatusRecord>;
export declare const isStatusProposed: (x: Status) => x is Status & {
    __kind: "Proposed";
};
export declare const isStatusDisputed: (x: Status) => x is Status & {
    __kind: "Disputed";
};
export declare const isStatusSettled: (x: Status) => x is Status & {
    __kind: "Settled";
};
/**
 * @category userTypes
 * @category generated
 */
export declare const statusBeet: beet.FixableBeet<Status, Status>;
