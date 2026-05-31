---
title: B50
description: The reference page of the B50 resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/song/b50`

## Description

Get the user best 50 songs (B50).

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://api.bway.lol/song/b50?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

Your B50 is split into 2 categories: `New` and `Others` (usally referred to as Old)

| Field        | Type   | Description                |
| ------------ | ------ | -------------------------- |
| `songTitle`  | string | Song title                 |
| `song_score` | string | Score achieved on the song |
| `trunc_lev`  | string | Truncated difficulty level |

### Example Response

```json
{
    "New": [
        {
            "songTitle": "M@GICAL☆CURE! LOVE ♥ SHOT!",
            "song_score": "100.0104%",
            "trunc_lev": "13+"
        },
        ...
    ],
        "Others": [
        {
            "songTitle": "ゆけむり魂温泉 II",
            "song_score": "100.5353%",
            "trunc_lev": "13+"
        },
        ...
        ]
}
```
