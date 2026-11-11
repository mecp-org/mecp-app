# mecp-app

React Native / Expo client for the [Mesh Emergency Communication Protocol (MECP)](https://github.com/mecp-org/MECP).

Pairs with Meshtastic (Android AIDL) to compose, send, receive, and decode structured emergency messages across 20 languages.

## Clone

```bash
git clone --recurse-submodules https://github.com/mecp-org/mecp-app.git
cd mecp-app
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

The protocol engine and language packs live in the [`vendor/mecp`](https://github.com/mecp-org/MECP) submodule (not vendored copies). Update them with:

```bash
git submodule update --remote vendor/mecp
```

## Setup

```bash
# Submodule must be present before install (file: dependency on @mecp/engine)
git submodule update --init --recursive
npm install
npm start
```

## Licenses

| Component | License |
|-----------|---------|
| This app | [GPLv3](LICENSE) |
| Protocol specification (in submodule) | CC0 1.0 |
| Language files (in submodule) | CC BY 4.0 |

Protocol and translations are maintained in [mecp-org/MECP](https://github.com/mecp-org/MECP).
