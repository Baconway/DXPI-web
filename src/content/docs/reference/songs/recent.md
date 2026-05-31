---
title: Recent
description: The reference page of the User resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/song/recent`

## Description

Get the user's recent credit (3/4 songs).

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://dxpi.bway.lol/song/recent?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field       | Type   | Description               |
| ----------- | ------ | ------------------------- |
| `track`     | number | Track number in queue     |
| `timestamp` | string | When the track was played |
| `name`      | string | Song name                 |

### Example Response

```json
{
  {
        "track": 3,
        "timestamp": "2026/05/30 20:41",
        "name": "宙天"
    },
    {
        "track": 2,
        "timestamp": "2026/05/30 20:38",
        "name": "DANGEROOOOUS JUNGLE"
    },
    {
        "track": 1,
        "timestamp": "2026/05/30 20:34",
        "name": "無間嫉妬劇場『666』"
    }
}
```
