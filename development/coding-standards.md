---
title: Coding Standards
description: Code style and quality guidelines for the 1nga project
---

# Coding Standards

This document outlines the coding standards and best practices to be followed by all developers working on the 1nga e-commerce platform.

## General Principles

- **Readability**: Write code that is easy to read and understand
- **Consistency**: Follow established patterns throughout the codebase
- **Simplicity**: Keep solutions as simple as possible while meeting requirements
- **Documentation**: Document code thoroughly, especially complex logic
- **Testing**: Write tests for all new features and bug fixes

## File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── (shop)/             # Customer-facing routes
│   ├── seller/             # Seller dashboard routes
│   └── admin/              # Admin dashboard routes
├── components/             # Shared UI components
├── lib/                    # Shared utilities
├── hooks/                  # React hooks
└── types/                  # TypeScript types
```

## TypeScript

- Use TypeScript for all new code
- Define explicit types for function parameters and return values
- Avoid using `any` type; use generic types or proper interfaces instead
- Use interfaces for object shapes and types for unions or primitives
- Follow naming conventions:
  - Interfaces: `IPascalCase` or `PascalCase`
  - Types: `TPascalCase` or `PascalCase`
  - Enums: `EPascalCase`

## React & Next.js

- Use functional components with hooks instead of class components
- Separate UI components from data-fetching logic
- Prefer server components for SEO-critical and static content
- Follow the principles of React Server Components:
  - Keep client components lean
  - Move data fetching to server components where possible
  - Use the `"use client"` directive only when necessary

```tsx
// Good example of a server component
export default async function ProductList() {
  const products = await fetchProducts();
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## CSS / Styling

- Use Tailwind CSS for styling
- Follow mobile-first approach for responsive design
- Maintain consistent spacing and sizing using Tailwind's scale
- Avoid custom CSS unless absolutely necessary
- When custom styles are needed, use CSS modules or styled components

## State Management

- Use React Context for global state that changes infrequently
- Consider zustand for more complex state management
- Keep state as local as possible (component state with useState)
- Use React Query for server state management

## API Design

- Follow RESTful principles for API endpoints
- Use consistent naming conventions
- Handle errors properly with appropriate status codes
- Validate inputs with Zod schemas
- Document all API endpoints

## Commits & Pull Requests

- Follow conventional commits format:
  - feat: A new feature
  - fix: A bug fix
  - docs: Documentation changes
  - style: Changes that don't affect code functionality
  - refactor: Code change that neither fixes a bug nor adds a feature
  - perf: Code change that improves performance
  - test: Adding or updating tests
  - chore: Changes to the build process or auxiliary tools

- Keep commits small and focused on a single change
- Write descriptive PR titles and descriptions
- Include issue references in commit messages

## Testing

- Write unit tests for utility functions and hooks
- Write integration tests for components and pages
- Write E2E tests for critical user flows
- Aim for at least 80% code coverage

## Performance

- Optimize images with Next.js Image component
- Minimize client-side JavaScript
- Use code splitting for large components
- Implement proper caching strategies
- Monitor and analyze bundle sizes

## Accessibility

- Ensure all interactive elements are keyboard accessible
- Use semantic HTML elements
- Include appropriate ARIA attributes
- Ensure sufficient color contrast
- Test with screen readers

## Security

- Validate all user inputs
- Implement proper authentication and authorization
- Avoid direct use of raw SQL queries
- Keep dependencies updated
- Follow OWASP security best practices 