---
title: Cosmetics
description: The reference page of the User resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/collection`

## Description

Get the user's current cosmetics.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://api.bway.lol/collection?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field       | Type   | Description                          |
| ----------- | ------ | ------------------------------------ |
| `Icon`      | string | URL to user icon image               |
| `NamePlate` | string | URL to user nameplate image          |
| `Frame`     | string | URL to user frame image              |
| `title`     | object | Title with title name and background |
| `partner`   | object | Partner info with name and image     |

### Example Response

```json
{
  "Icon": "icon_image",
  "NamePlate": "nameplate_image",
  "Frame": "frame_image",
  "title": {
    "title": "antipathy world",
    "background": "title_bg_image"
  },
  "partner": {
    "partner": "parter_name",
    "img_src": "partner_portrait_img",
    "total_presents": 727
  }
}
```
