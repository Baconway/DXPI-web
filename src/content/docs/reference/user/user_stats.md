---
title: UserStats
description: The reference page of the userStats resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/user/stats`

## Description

Get more advanced statistics information about the user.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://dxpi.bway.lol/user/stats?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field    | Type   | Description                           |
| -------- | ------ | ------------------------------------- |
| `[key]`  | object | Category object (e.g., `sssp`, `app`) |
| `.icon`  | string | Icon identifier for the category      |
| `.count` | string | Count value for the category          |

### Example Response

```json
{
  "sssp": {
    "icon": "sssp_icon",
    "count": "72/772727"
  },
  "app": {
    "icon": "app_icon",
    "count": "6/68"
  },
  ...
}
```
