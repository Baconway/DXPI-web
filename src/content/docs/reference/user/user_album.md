---
title: UserAlbum
description: The reference page of the UserAlbum resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/user/album`

## Description

Get all taken photos of the user.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://api.bway.lol/user/album?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field       | Type   | Description              |
| ----------- | ------ | ------------------------ |
| `.date`     | Date   | Date of the photo        |
| `.link`     | string | Image link               |
| `.location` | string | Location photo was saved |

### Example Response

```json
{
      {
        "date": "Date()",
        "link": "photo_link",
        "location": "photo_location"
    },
  ...
}
```
