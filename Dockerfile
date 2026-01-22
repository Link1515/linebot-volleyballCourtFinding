FROM oven/bun:1.3.6-slim AS deps

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile --production

FROM deps AS data

WORKDIR /app

RUN mkdir -p data scripts
COPY tsconfig.json ./
COPY data/types.ts ./data/
COPY scripts/fetchCourts.ts ./scripts/
COPY utils/fetchCourts.ts ./utils/
RUN bun fetchCourts

FROM oven/bun:1.3.6-slim AS runtime

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY --from=data /app/data/courts.json ./data/courts.json

EXPOSE 3000

CMD ["bun", "index.ts"]
