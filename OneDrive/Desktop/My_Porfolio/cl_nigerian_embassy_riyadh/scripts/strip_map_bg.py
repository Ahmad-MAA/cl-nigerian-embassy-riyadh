"""Strip the white background off public/images/map_nig.png.

Approach: BFS flood-fill from every edge pixel, treating near-white as the
background and near-white pixels that are reachable from the edge as the
region to remove. Internal near-white pixels inside Nigeria's outline (e.g.
river fills, label backgrounds) are preserved because they aren't reachable
from the edge through other near-white pixels.

Writes map_nig.png back in place with RGBA + transparent background.
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public" / "images" / "map_nig.png"
THRESHOLD = 235  # pixels with R,G,B all >= THRESHOLD count as "near-white"


def main() -> int:
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    px = img.load()

    near_white = bytearray(w * h)
    for y in range(h):
        row = y * w
        for x in range(w):
            r, g, b, _ = px[x, y]
            if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
                near_white[row + x] = 1

    visited = bytearray(w * h)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            if near_white[y * w + x] and not visited[y * w + x]:
                visited[y * w + x] = 1
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if near_white[y * w + x] and not visited[y * w + x]:
                visited[y * w + x] = 1
                q.append((x, y))

    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                idx = ny * w + nx
                if near_white[idx] and not visited[idx]:
                    visited[idx] = 1
                    q.append((nx, ny))

    cleared = 0
    for y in range(h):
        row = y * w
        for x in range(w):
            if visited[row + x]:
                px[x, y] = (255, 255, 255, 0)
                cleared += 1

    img.save(SRC, optimize=True)
    print(f"Cleared {cleared} background pixels out of {w * h} ({cleared * 100 / (w * h):.1f}%)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
