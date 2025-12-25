# Mini GCash Clone — Full-stack Scaffold

This repository contains a scaffold for a Mini GCash Clone: microservices backend (Java Spring Boot + Python), a React Native mobile starter, Docker and Kubernetes manifests, and CI templates.

Overview
- User Service: Java Spring Boot + MongoDB (signup/login, JWT stub)
- Wallet Service: Java Spring Boot + MongoDB + Redis (balance, transactions)
- Payment Service: Java Spring Boot (QR endpoints)
- Credit Scoring Service: Python FastAPI + scikit-learn (score endpoint)
- API Gateway: Node.js Express proxy
- React Native: Expo starter app
- Docker Compose for local dev and Kubernetes manifests for AKS

Quick local (dev) run
1. Install Docker and docker-compose.
2. Build and start services:

```powershell
docker-compose build
docker-compose up
```

3. API Gateway will be on http://localhost:8080
4. Run mobile app (expo) in `mobile/`:

```bash
cd mobile
npm install
npx expo start
```

Notes
- This is a scaffold: implement security and production hardening before deploying.
