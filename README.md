# Rift Chat

An open source application built using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com), [Lucia](https://lucia-auth.com)

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@pixelactstudios](https://twitter.com/pixelactstudios).
> See the roadmap below.

## About this project

This project as an experiment to see how a modern app
(with features like authentication, API routes, static pages for chat-based application)
would work in Next.js 14 and server components.

**This is not a starter template.**

## Note on Performance

## Features

- `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **Lucia**
- ORM using **Drizzle**
- UI Components built using **Shadcn UI**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Roadmap

- [x] Environment Setup
- [x] Folder Structure
- [ ] Authentication
- [ ] Dark Mode
- [ ] Drizzle Setup
- [ ] Initial Modal UI
- [ ] Upload Thing Setup
- [ ] Server Creation API
- [ ] Navigation Sidebar
- [ ] Create Server Modal
- [ ] Server Sidebar
- [ ] Invitation
- [ ] Server Settings
- [ ] Manage Members
- [ ] Chat Creation
- [ ] Delete and Server Modal
- [ ] Search Server Modal
- [ ] Server Channel List
- [ ] Edit Channels
- [ ] Channel ID Page
- [ ] Chat Header
- [ ] Drizzle Schema Completion
- [ ] Conversations Setup
- [ ] Socket IO Setup
- [ ] Chat Input Component
- [ ] Messages API
- [ ] Messages Attachment
- [ ] Emoji Bar
- [ ] Create Message Component
- [ ] Chat Item Component
- [ ] Delete Message
- [ ] Chat Socket Hook
- [ ] Chat Scroll Hook
- [ ] Direct Messages
- [ ] Video Calls

## Running Locally

1. Install dependencies using pnpm:

```sh
bun install
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
cp .env.example .env
```

3. Start the development server:

```sh
bun dev
```

## License

Licensed under the [MIT license](https://github.com/devchaudhary24k/riftchat/blob/main/LICENCE.md).
