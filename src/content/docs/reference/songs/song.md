---
title: Song
description: The reference page of the Song resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/song`

## Description

Get basic information about a song.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://api.bway.lol/song?name='SONG_NAME_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field         | Type   | Description                    |
| ------------- | ------ | ------------------------------ |
| `name`        | string | Song name                      |
| `artist`      | string | Song artist                    |
| `genre`       | string | Song genre                     |
| `bpm`         | string | Beats per minute               |
| `version`     | string | Game version                   |
| `const_level` | object | Constant levels for each mode  |
| `trunc_level` | object | Truncated levels for each mode |
| `jacket`      | string | URL to song jacket image       |

### Example Response

```json
{
  "name": "Ether Strike",
  "artist": "Akira Complex",
  "genre": "ゲーム＆バラエティ",
  "bpm": "156",
  "version": "Splash",
  "const_level": {
    "basic": 0,
    "advanced": 0,
    "expert": 0,
    "master": 0,
    "dx_basic": 4,
    "dx_adv": 7.7,
    "dx_exp": 10.8,
    "dx_mas": 13.9
  },
  "trunc_level": {
    "basic": 0,
    "advanced": 0,
    "expert": 0,
    "master": 0,
    "dx_basic": "4",
    "dx_adv": "7+",
    "dx_exp": "10+",
    "dx_mas": "13+"
  },
  "jacket": "https://otoge-db.net/maimai/jacket//e4d70ce31ee28a9c.png"
}
```
