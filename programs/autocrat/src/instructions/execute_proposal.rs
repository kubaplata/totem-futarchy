use super::*;

#[derive(Accounts)]
pub struct ExecuteProposal<'info> {
    #[account(mut)]
    pub proposal: Account<'info, Proposal>,
    pub dao: Box<Account<'info, DAO>>,
}

impl ExecuteProposal<'_> {
    pub fn validate(&self) -> Result<()> {
        require!(self.proposal.state == ProposalState::Passed, AutocratError::ProposalNotPassed);

        Ok(())
    }

    pub fn handle(ctx: Context<Self>) -> Result<()> {
        let ExecuteProposal {
            proposal,
            dao
        } = ctx.accounts;

        proposal.state = ProposalState::Executed;

        let dao_key = dao.key();
        let treasury_seeds = &[dao_key.as_ref(), &[dao.treasury_pda_bump]];
        let signer = &[&treasury_seeds[..]];

        let mut svm_instruction: Instruction = proposal.instruction.borrow().into();
        for acc in svm_instruction.accounts.iter_mut() {
            if acc.pubkey == dao.treasury.key() {
                acc.is_signer = true;
            }
        }

        solana_program::program::invoke_signed(&svm_instruction, ctx.remaining_accounts, signer)?;

        Ok(())
    }
}
