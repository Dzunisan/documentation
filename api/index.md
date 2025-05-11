---
title: API Reference
description: Complete API documentation for the 1nga platform
---

# API Reference

This section contains comprehensive documentation for the 1nga e-commerce platform APIs.

## Overview

The 1nga API is organized around REST principles. All requests and responses use JSON format. The API uses standard HTTP response codes, authentication, and verbs.

## Base URL

```
https://api.1nga.com/v1
```

## Authentication

The 1nga API uses JWT tokens for authentication. To authenticate, you need to:

1. Obtain an API key from the developer portal
2. Request a JWT token using your API key
3. Include the JWT token in the `Authorization` header of your requests

## API Endpoints

- [Products API](/api/products) - Manage product listings and inventory
- [Orders API](/api/orders) - Create and manage orders
- [Users API](/api/users) - User management operations
- [Sellers API](/api/sellers) - Seller-specific operations

## Rate Limiting

The API implements rate limiting to ensure fair usage. Current limits are:

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## Error Handling

The API uses standard HTTP status codes to indicate success or failure:

- 2xx: Success
- 4xx: Client error
- 5xx: Server error

All error responses include a JSON body with error details. 