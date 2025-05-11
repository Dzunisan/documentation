---
title: Development Setup
description: Instructions for setting up the 1nga development environment
---

# Development Setup Guide

This guide will help you set up your development environment for working on the 1nga e-commerce platform.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16.x or higher)
- **pnpm** (v7.x or higher) as the package manager
- **Git** for version control
- **Docker** and **Docker Compose** for local services

## Getting the Code

Clone the repository:

```bash
git clone https://github.com/microsedev/monorepo.git
cd platform
```

## Environment Setup

1. Create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local
```

2. Update the environment variables in `.env.local` with your local settings.

## Installing Dependencies

Install project dependencies:

```bash
pnpm install
```

## Database Setup

Start the local PostgreSQL database:

```bash
docker-compose up -d db
```

Run database migrations:

```bash
pnpm db:migrate
```

Seed the database with test data (optional):

```bash
pnpm db:seed
```

## Running the Development Server

Start the Next.js development server:

```bash
pnpm dev
```

The application will be available at http://localhost:3000.

## Additional Services

### Email Service

For testing email functionality locally:

```bash
docker-compose up -d mailhog
```

The MailHog interface will be available at http://localhost:8025.

### Redis

For testing caching and session management:

```bash
docker-compose up -d redis
```

## Running Tests

Run unit tests:

```bash
pnpm test
```

Run end-to-end tests with Playwright:

```bash
pnpm test:e2e
```

## Code Linting and Formatting

Lint the code:

```bash
pnpm lint
```

Format the code:

```bash
pnpm format
```

## Building for Production

Build the application:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm start
```

## Troubleshooting

If you encounter any issues with the setup process, please refer to the [Troubleshooting](./troubleshooting.md) guide or open an issue on GitHub. 