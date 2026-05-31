---
title: Link
description: The API link for DXPI
---

## Base URL

```txt
https://dxpi.bway.lol/endpoint?cookie=$cookie
```

## Available Methods

| Method | Endpoint    | Description                                       |
| ------ | ----------- | ------------------------------------------------- |
| POST   | /token      | Get your cookie (token) needed to access this API |
| GET    | /user       | API calls for your profile                        |
| GET    | /song       | Get songs, your B50 or your recent credit         |
| GET    | /collection | Get information about your collection (cosmetics) |

## Common Query Parameters

- `cookie` - Your login cookie needed to access the website
- `name` - The song name you want to look for

## Response Format

Most responses return JSON with the following structure:

```json
{"some_data_here"}
```

## Rate Limiting

You can send 50 requests/10 minutes, after that your requests will start being slowed down.

## Headers

- `Content-Type: application/json`

## Example

Getting some basic user info:

```typescript
const request = await fetch(`https://api.bway.lol/user?cookie=${cookie}`);
const userData = await response.json();

console.log(userData.name); // "Ｂｗａｙ♪♪♪♪"
console.log(userData.rating); // 14610
console.log(userData.rating_wrapper); // Background rating block
console.log(userData.stars); // 214
console.log(userData.icon); // Current icon used
console.log(userData.course_dan); // Current dan course
console.log(userData.otomodachi_class); // Current Friend Matching rank
```
