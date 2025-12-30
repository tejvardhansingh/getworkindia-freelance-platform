# System Architecture

## Overview
getWorkIndia follows a client-server architecture with role-based access.

Frontend (React)
→ Backend APIs (Express)
→ Database (MongoDB)

## Authentication Flow
1. User logs in
2. Backend validates credentials
3. JWT is issued
4. JWT is used to access protected routes

## Role-Based Access
- Freelancer: Browse jobs, send proposals
- Client: Post jobs, hire freelancers
- Admin: Moderate users and jobs
