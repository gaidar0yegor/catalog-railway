# Catalog Management System

A comprehensive web application for managing, importing, and merging product catalogs from multiple sources.

## Project Structure

The project is split into two main components:

- `backend/`: FastAPI backend service
- `frontend/`: React frontend application

## Features

- Multiple catalog import methods (File Upload, FTP/SFTP, External APIs, Web Scraping, Email)
- Supplier management
- Field mapping and catalog merging
- Export functionality
- Background processing with Celery
- MinIO object storage integration

## Prerequisites

- Docker and Docker Compose
- Git
- Railway account for deployment

## Local Development Setup

1. Clone both repositories:
```bash
git clone https://github.com/yourusername/catalog-backend.git backend
git clone https://github.com/yourusername/catalog-frontend.git frontend
```

2. Start the development environment:
```bash
docker-compose up --build
```

This will start all required services:
- Backend API (http://localhost:8000)
- Frontend App (http://localhost:3000)
- PostgreSQL (port 5432)
- Redis (port 6379)
- MinIO (port 9000, console on 9001)

## Environment Variables

Create `.env` files in both backend and frontend directories. Example variables:

### Backend (.env)
```
DATABASE_URL=postgresql://postgres:postgres@db:5432/catalog_db
REDIS_URL=redis://redis:6379/0
MINIO_ROOT_USER=minioadmin
MINIO_ROOT_PASSWORD=minioadmin
MINIO_ENDPOINT=minio:9000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

## Deployment

The project is configured for deployment on Railway. Each repository has its own CI/CD pipeline configured through GitHub Actions.

## API Documentation

Once the backend is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT
