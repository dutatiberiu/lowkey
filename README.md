# lowkey.

**stream around the radar**

A personal digital media ecosystem for private music and video streaming. No tracking, no ads, no external dependencies — just your content, your way.

 [Live](https://dutatiberiu.github.io/lowkey/) |
 [Stream](https://dutatiberiu.github.io/lowKey-Stream/) | [Player](https://dutatiberiu.github.io/lowKey-Player/)

---

## What is lowkey?

lowkey is a suite of lightweight, self-hosted web apps designed for consuming media privately — bypassing corporate filters, restrictive networks, and the surveillance of mainstream platforms.

It consists of two core apps and a landing page that ties them together:

### lowkey stream

A video streaming app that serves local video files from your home PC to any device, anywhere.

- Python server running locally serves video files via HTTP
- Cloudflare Tunnel exposes it to the internet (free, no account needed)
- Frontend deployed on GitHub Pages streams through the tunnel
- HTTP Range request support (seeking works)
- Auto-converts MKV/AVI to MP4 in background (via ffmpeg)
- Auto-restart tunnel on failure, auto-rescan for new files
- Folder-based navigation and search filtering

```
[Home PC]                          [GitHub Pages]
D:\Filme → Python Server (HTTP) ←→ Frontend (HTML/JS)
              ↓
         Cloudflare Tunnel
         (random .trycloudflare.com URL)
              ↓
         GitHub API → updates config.json with tunnel URL
```

### lowkey player

A web-based music player optimized for GitHub Pages with real-time audio visualization.

- Real-time audio visualizer (Web Audio API + Canvas) with multiple styles
- Album/Artist/Songs organization with tabbed interface
- Interactive progress bar with seek and timestamp display
- Volume control with mute/unmute
- Real-time search/filter in playlist
- Keyboard shortcuts (Space for play/pause, arrows for next/prev)
- Multi-format support (MP3, FLAC)
- Fullscreen visualizer mode

---

## Design Philosophy

Both apps share a unified visual identity:

- **Dark theme** with glassmorphism aesthetic
- **Electric Lime** (`#c8ff00`) as the single accent color
- **Zero external dependencies** — vanilla HTML, CSS, JavaScript
- **Zero tracking** — no analytics, no CDNs, no third-party scripts
- **Privacy-first** — designed to pass through corporate firewalls and content filters

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| Void | `#0A0A0B` | Background |
| Surface | `#111113` | Cards, panels |
| Electric Lime | `#C8FF00` | Primary accent |
| Chalk | `#E8E8EC` | Primary text |
| Muted | `#6B6B76` | Secondary text |


### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6) |
| Fonts | Outfit, Space Mono, DM Sans (Google Fonts) |
| Player Visualizer | Web Audio API + Canvas API |
| Stream Backend | Python 3 (stdlib only) |
| Stream Tunnel | Cloudflare Tunnel (free) |
| Hosting | GitHub Pages |

---

## Project Structure

```
lowkey/                    ← this repo (landing page)
├── index.html
├── styles.css
├── app.js
├── logo_lowkey.png
├── logo_Player.png
├── logo_videoPlayer.png
└── README.md

lowkey-player/             ← private repo
├── index.html
├── styles.css
├── app.js
├── playlist.json
└── Images/

lowkey-stream/             ← private repo
├── docs/                  
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── config.json
└── server/                (backend — runs locally)
    ├── stream_server.py
    └── config.json
```

---

## License

Personal project 

---

*Build with an inner rage against the system • Passing Filters • Listen with no wories*
