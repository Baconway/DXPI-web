---
title: sid
description: The reference page of the /token/sid endpoint for DXPI
sidebar:
  badge:
    text: POST
    variant: note
---

## Endpoint

**POST** `/token/sid`

## Description

Get the desired SegaID's login cookie.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Body

| Field      | Type   | Required | Description     |
| ---------- | ------ | -------- | --------------- |
| `sid`      | string | Yes      | SegaID          |
| `password` | string | No       | SegaID Password |

### Example Request

```bash
curl -X POST https://api.bway.lol/token/sid \
  -H "Content-Type: application/json" \
  -d '{
    "sid": "bway",
    "password": "sigsigmasigma"
  }'
```

## Response

### Success (200 OK)

| Field    | Type   | Description       |
| -------- | ------ | ----------------- |
| `cookie` | string | Your login cookie |

### Example Response

```json
{
  "cookie": "YOUR_COOKIE_HERE"
}
```
