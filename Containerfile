FROM registry.access.redhat.com/hi/nodejs:26-builder AS build

WORKDIR /pnpm

ENV PATH="/pnpm/node_modules/.bin:$PATH"
RUN npm install --prefix /pnpm pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM registry.access.redhat.com/hi/nodejs:26

COPY --from=build /app/.output /app
EXPOSE 3000
CMD [ "node", "/app/server/index.mjs" ]
