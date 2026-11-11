# mecp-app

Implementations and clients for the [Mesh Emergency Communication Protocol (MECP)](https://github.com/mecp-org/MECP).

| Path | What |
|------|------|
| Expo / React Native app (this repo root) | Meshtastic AIDL compose / inbox client |
| [`engine/`](engine/) | TypeScript encoder/decoder (`@mecp/engine`) |
| [`web/`](web/) | Offline PWA compose/decode tool ([live](https://mecp-org.github.io/mecp-app/)) |
| [`examples/`](examples/) | Python, Arduino, and shell references |
| [`docs/MECP_Design_Plan.md`](docs/MECP_Design_Plan.md) | Product / app design plan |

Protocol specification and language packs live in **[mecp-org/MECP](https://github.com/mecp-org/MECP)** and are pulled in via the `vendor/mecp` submodule (languages only).

## Clone

```bash
git clone --recurse-submodules https://github.com/mecp-org/mecp-app.git
cd mecp-app
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

Update language packs:

```bash
git submodule update --remote vendor/mecp
```

## Setup (Expo app)

```bash
git submodule update --init --recursive
npm install
npm start
```

## Engine

```bash
cd engine && npm ci && npm test
# or from repo root:
npm run test:engine
```

## Web tool

**Live:** [https://mecp-org.github.io/mecp-app/](https://mecp-org.github.io/mecp-app/)

Or open `web/index.html` locally in a browser (no build step). GitHub Pages deploys from `web/` on this repo.

## Examples

See `examples/python`, `examples/arduino`, and `examples/shell`.

## Licenses

| Component | License |
|-----------|---------|
| App, engine, web, examples | [GPLv3](LICENSE) |
| Protocol specification (MECP repo) | CC0 1.0 |
| Language files (MECP submodule) | CC BY 4.0 |
