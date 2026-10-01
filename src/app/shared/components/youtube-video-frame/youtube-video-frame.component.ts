import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface YouTubePlayer { setPlaybackQuality(quality: string): void; }
interface YouTubePlayerReadyEvent { target: YouTubePlayer; }
interface YouTubeNamespace {
  Player: new (
    elementId: string,
    options: { events: { onReady: (e: YouTubePlayerReadyEvent) => void } },
  ) => YouTubePlayer;
}

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let nextId = 0;

/**
 * Hero/showcase video embed styled like `app-screenshot-frame`, so a page can
 * use a real product video instead of a static screenshot.
 *
 * Autoplays muted and looped (the only way browsers allow autoplay), shows
 * the full native YouTube control bar, and asks the IFrame Player API for
 * 720p by default — YouTube no longer honours a `vq=` URL parameter, the API
 * is the only way left to suggest a starting quality.
 */
@Component({
  selector: 'app-youtube-video-frame',
  standalone: false,
  templateUrl: './youtube-video-frame.component.html',
  styleUrl: './youtube-video-frame.component.scss',
})
export class YoutubeVideoFrameComponent implements AfterViewInit {
  /** YouTube video ID, e.g. 'zvdlI5WFUjc' (from youtu.be/zvdlI5WFUjc). */
  @Input({ required: true }) videoId!: string;
  @Input() brand = 'ProMonitor';
  @Input() videoTitle = 'Product overview video';
  /** Default/suggested playback quality; YouTube may still adjust for bandwidth. */
  @Input() quality = 'hd720';

  readonly elementId = `yt-video-frame-${nextId++}`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sanitizer: DomSanitizer,
  ) {}

  get src(): SafeResourceUrl {
    const url = `https://www.youtube-nocookie.com/embed/${this.videoId}` +
      `?autoplay=1&mute=1&loop=1&playlist=${this.videoId}&controls=1&playsinline=1&rel=0&enablejsapi=1`;
    // Built entirely from a hardcoded host and the component's own `videoId`
    // input (never raw user input), so trusting it here is safe.
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const createPlayer = () => {
      new window.YT!.Player(this.elementId, {
        events: { onReady: (e) => e.target.setPlaybackQuality(this.quality) },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
      return;
    }

    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      createPlayer();
    };

    if (!document.getElementById('youtube-iframe-api')) {
      const script = document.createElement('script');
      script.id = 'youtube-iframe-api';
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }
  }
}
