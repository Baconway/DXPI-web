---
title: TourPartners
description: The reference page of the User resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/collection/member`

## Description

Get the user's current tour members.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://dxpi.bway.lol/collection/member?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field      | Type    | Description                  |
| ---------- | ------- | ---------------------------- |
| `portrait` | string  | URL to member portrait image |
| `level`    | number  | Member level                 |
| `leader`   | boolean | Whether member is a leader   |

### Example Response

```json
{
  {
        "portrait": "member_portrait",
        "level": 5000,
        "leader": false
    },
  ...
}
```
