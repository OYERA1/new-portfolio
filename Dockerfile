# docker/dev.Dockerfile
FROM oven/bun:alpine AS base

ARG RESEND_API_KEY
ENV RESEND_API_KEY = ${RESEND_API_KEY}

FROM base AS deps
RUN apk add --no-cache libc6-compat
RUN apk update
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1


RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time

# for deploting the build version

# RUN bun next build
# and
# CMD bun next start

# OR for sart Next.js in development, comment above two lines and uncomment below line
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
# Note: Don't expose ports here, Compose will handle that for us