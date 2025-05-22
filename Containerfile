FROM docker.io/library/node:22-bookworm AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app



FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile



FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build



FROM registry.access.redhat.com/ubi9/nodejs-22-minimal
COPY --from=build /app/.output /app
EXPOSE 3000
CMD [ "node", "/app/server/index.mjs" ]
