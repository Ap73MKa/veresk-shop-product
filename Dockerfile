FROM oven/bun:1.2-alpine AS base

RUN apk update && apk add --no-cache libc6-compat

FROM base AS build

WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun --bun run build

FROM base AS run

WORKDIR /app

RUN addgroup --system --gid 1002 nodejs
RUN adduser --system --uid 1002 nuxtjs
USER nuxtjs

COPY --from=build --chown=nuxtjs:nodejs /app/.output ./

EXPOSE 3000

ENTRYPOINT [ "bun", "--bun", "run", "/app/server/index.mjs" ]
