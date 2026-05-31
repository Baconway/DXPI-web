---
title: circleRanking
description: The reference page of the B50 resource for DXPI
sidebar:
  badge:
    text: GET
    variant: caution
---

## Endpoint

**GET** `/social/circleRank`

## Description

Get current circle ranking for the day.

## Request

### Headers

| Header         | Type   | Required | Description |
| -------------- | ------ | -------- | ----------- |
| `Content-Type` | string | No       | `text/csv`  |

### Example Request

```bash
curl -X POST https://dxpi.bway.lol/social/circleRank?cookie=YOUR_COOKIE_HERE \
  -H "Content-Type: text/csv" \

```

## Response

### Success (201 CREATED)

| Field           | Type   | Description           |
| --------------- | ------ | --------------------- |
| `circle_name`   | string | Name of the circle    |
| `circle_points` | number | Circle ranking points |

### Example Response

```csv
circle_name,circle_points
okbro, 100575
sigma??, 74696
idk, 70972
```
