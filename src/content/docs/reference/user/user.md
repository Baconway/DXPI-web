---
title: User
description: The reference page of the User resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/user`

## Description

Get basic information about the user.

## Request

### Headers

| Header         | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| `Content-Type` | string | No       | `application/json` (default) |

### Example Request

```bash
curl -X POST https://api.bway.lol/user?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: application/json" \

```

## Response

### Success (201 CREATED)

| Field              | Type   | Description         |
| ------------------ | ------ | ------------------- |
| `name`             | string | Your display name   |
| `rating`           | string | Your current rating |
| `rating_wrapper`   | string | The rating frame    |
| `stars`            | string | Your star count     |
| `icon`             | string | Your user icon      |
| `course_dan`       | string | Course completed    |
| `otomodachi_class` | string | Otomodachi class    |

### Example Response

```json
{
  "name": "Ｂｗａｙ♪♪♪♪",
  "rating": 14500,
  "rating_wrapper": "rating_block_image",
  "stars": 200,
  "icon": "user_icon",
  "course_dan": "course_level",
  "otomodachi_class": "match_class"
}
```
