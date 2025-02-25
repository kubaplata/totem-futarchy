/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { UpdateTotemArgs, updateTotemArgsBeet } from '../types/UpdateTotemArgs'

/**
 * @category Instructions
 * @category UpdateTotem
 * @category generated
 */
export type UpdateTotemInstructionArgs = {
  args: UpdateTotemArgs
}
/**
 * @category Instructions
 * @category UpdateTotem
 * @category generated
 */
export const updateTotemStruct = new beet.FixableBeetArgsStruct<
  UpdateTotemInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', updateTotemArgsBeet],
  ],
  'UpdateTotemInstructionArgs'
)
/**
 * Accounts required by the _updateTotem_ instruction
 *
 * @property [**signer**] signer
 * @property [] totem
 * @property [_writable_] totemDao
 * @property [] treasury
 * @property [] autocratProgram
 * @category Instructions
 * @category UpdateTotem
 * @category generated
 */
export type UpdateTotemInstructionAccounts = {
  signer: web3.PublicKey
  totem: web3.PublicKey
  totemDao: web3.PublicKey
  treasury: web3.PublicKey
  autocratProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const updateTotemInstructionDiscriminator = [
  166, 131, 156, 151, 211, 78, 172, 105,
]

/**
 * Creates a _UpdateTotem_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateTotem
 * @category generated
 */
export function createUpdateTotemInstruction(
  accounts: UpdateTotemInstructionAccounts,
  args: UpdateTotemInstructionArgs,
  programId = new web3.PublicKey('totoRorVC1BCmAMFvxM55t9RjPMsGeTTVdUgGC9AF8g')
) {
  const [data] = updateTotemStruct.serialize({
    instructionDiscriminator: updateTotemInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.totem,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.totemDao,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasury,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.autocratProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
