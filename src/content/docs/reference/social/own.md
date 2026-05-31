---
title: CurrentCircle
description: The reference page of the B50 resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/social/circle`

## Description

Get information about your current circle.

## Request

### Headers

| Header         | Type   | Required | Description        |
| -------------- | ------ | -------- | ------------------ |
| `Content-Type` | string | No       | `application/json` |

### Example Request

```bash
curl -X POST https://dxpi.bway.lol/social/circle?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field    | Type   | Description    |
| -------- | ------ | -------------- |
| `name`   | string | Circle name    |
| `points` | number | Circle points  |
| `code`   | string | Circle code    |
| `rank`   | number | Circle ranking |

### Example Response

```json
{
  "name": "name_here",
  "points": 2000,
  "code": "code_here",
  "rank": 400
}
```
