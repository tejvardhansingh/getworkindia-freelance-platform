# API List (MVP)

## Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

## Freelancer
- GET /api/jobs
- POST /api/proposals
- GET /api/contracts

## Client
- POST /api/jobs
- GET /api/proposals/:jobId
- POST /api/contracts

## Messaging
- GET /api/messages/:contractId
- POST /api/messages

## Admin
- GET /api/admin/users
- PATCH /api/admin/block-user
