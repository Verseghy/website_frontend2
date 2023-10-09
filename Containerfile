FROM node:18-bookworm AS base
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

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 3000

RUN addgroup --system app && \
    adduser --system --disabled-password --no-create-home --shell /bin/false --ingroup app app && \
    chown -R app:app /app
USER app
CMD [ "node", "/app/dist/server.js" ]
