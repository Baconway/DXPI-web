---
title: Getting your login cookie
description: How to obtain your login cookie from the washing machine website
---

You can access this API using your login cookie. Follow these steps to retrieve it and use it with the API. <br>
Alternatively, you can have the API get the token for you using `/token/sid` endpoint, but this page will cover the Developer tools method.

## Prerequisites

- Active account on the `myaime.net` website
- Browser with cookie access

## Steps

### 1. Open the login page

Visit `https://lng-tgk-aime-gw.am-all.net/common_auth/login`. <br>
Make sure you are logged into `https://my-aime.net/en/` before visiting.

### 2. Retrieve your cookie

Once logged in, open your browser's Developer Tools:

- **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I`
- **Firefox**: Press `F12` or `Ctrl+Shift+I`

Navigate to the **Application** or **Storage** tab, then select **Cookies** and find your authentication website. Look for your account cookie (named `clal`).

### 3. Copy the token value

Right-click the `clal` cookie and select **Copy value** (or manually select and copy the entire value).

### 4. Use the token with DXPI API

Include your token in API requests as a cookie header:

```bash
curl https://dxpi.bway.lol/endpoint?cookie=$YOUR_COOKIE_HERE
```

## Troubleshooting

- **Cookie not visible**: Ensure you're logged in to the authentication website and the session is active
- **Token expired**: Log out and log back in to refresh your token
