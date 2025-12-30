# Database Design (Initial)

## Entities
- User
- Profile
- Job
- Proposal
- Contract
- Message
- Review

## Relationships
- User → Profile (1:1)
- User → Job (1:many)
- Job → Proposal (1:many)
- Proposal → Contract (1:1)
- Contract → Message (1:many)
- Contract → Review (1:2)
