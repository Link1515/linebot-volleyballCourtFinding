FROM oven/bun:1.3.6-slim AS deps

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile --production

FROM deps AS fetchdata

WORKDIR /app

RUN mkdir -p data scripts
COPY tsconfig.json ./
COPY data/types.ts ./data/
COPY scripts/fetchPlaceInfoList.ts ./scripts/
RUN bun fetchData

FROM oven/bun:1.3.6-slim AS runtime

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY --from=fetchdata /app/data/placeInfoList.json ./data/placeInfoList.json

EXPOSE 3000

CMD ["bun", "index.ts"]
