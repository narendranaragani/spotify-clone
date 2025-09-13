import Home from "./components/Home";
import LoginForm from "./components/LoginPopUp";
import PodcastDetails from "./components/podcasts";
import {BrowserRouter, Route,Routes } from "react-router";
import ProtectRoute from "./components/protectedRoute";
import PlaylistDetails from "./components/songs";
import CategoryDetails from "./components/categoriesPlayList/categorysongs";
import NewreleasesDetails from "./components/NewReaslesPlayList/newReleases";
import PodcastPage from "./components/podcasts/podcasts";
import RegisterForm from "./components/LoginPopUp/registerForm";
import SearchSongs from "./components/searchContext";
import FirstHome from "./components/firstHome.jsx"


const Details = [
  {
    id: 102,
    img_url: "https://i.scdn.co/image/ab6765630000ba8af1673ed0ad264b0914cf3f7d",
    name: "BhagavadGita",
    casts: "10 tracks",
    items: [
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/6ajT996g4UyKN3z8CWNgF5/clip_223410_283410.mp3",
        description: "The calm and wise teacher who spreads knowledge.",
        duration_ms: 833097,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/1CpFTibaArTtX1oTftQ9pi",
        },
        href: "https://api.spotify.com/v1/episodes/1CpFTibaArTtX1oTftQ9pi",
        html_description:
          "Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives.",
        id: "1CpFTibaArTtX1oTftQ9pi",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a7c21ac830dab1ed139678250",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f7c21ac830dab1ed139678250",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d7c21ac830dab1ed139678250",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-1 (EP-01)",
        release_date: "2023-11-10",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:1CpFTibaArTtX1oTftQ9pi",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/0hGPAVX8PFcOw2GJoptm50/clip_181741_241741.mp3",
        description: "The brave warrior who protects justice.",
        duration_ms: 887379,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/6AR2Cm1ZmrN89XzOJmHKMo",
        },
        href: "https://api.spotify.com/v1/episodes/6AR2Cm1ZmrN89XzOJmHKMo",
        html_description:
          "Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com",
        id: "6AR2Cm1ZmrN89XzOJmHKMo",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8ad9b6303936c72683ed9158b7",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1fd9b6303936c72683ed9158b7",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dd9b6303936c72683ed9158b7",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-1 (EP-02)",
        release_date: "2023-11-14",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:6AR2Cm1ZmrN89XzOJmHKMo",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/0WIthZAdpBBp23Bo1GY2D3/clip_573075_633075.mp3",
        description:
          "The hardworking trader and farmer who grows food and wealth.",
        duration_ms: 771239,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/2DGfm2JNVg7HG1bDPoEuf7",
        },
        href: "https://api.spotify.com/v1/episodes/2DGfm2JNVg7HG1bDPoEuf7",
        html_description: "#34;Bhagavad Gita",
        id: "2DGfm2JNVg7HG1bDPoEuf7",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-2 (EP-01)",
        release_date: "2023-11-17",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:2DGfm2JNVg7HG1bDPoEuf7",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2sv3NKRY8AuZPWgiKmkZL4/clip_588628_648628.mp3",
        description:
          "The hardworking trader and farmer who grows food and wealth.",
        duration_ms: 777142,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/0ZULSWEf3nZfwNBEfmKT8Z",
        },
        href: "https://api.spotify.com/v1/episodes/0ZULSWEf3nZfwNBEfmKT8Z",
        html_description:
          "<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p>",
        id: "0ZULSWEf3nZfwNBEfmKT8Z",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-2 (EP-02)",
        release_date: "2023-11-21",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:0ZULSWEf3nZfwNBEfmKT8Z",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/67azLtWJ6g466epMz61Bjj/clip_325179_385179.mp3",
        description: "The loyal helper who serves society with dedication.",
        duration_ms: 695301,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/2bqkVvlwouIxuCayR5c096",
        },
        href: "https://api.spotify.com/v1/episodes/2bqkVvlwouIxuCayR5c096",
        html_description:
          "<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p><p><br /></p>",
        id: "2bqkVvlwouIxuCayR5c096",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-2 ( EP-03 )",
        release_date: "2023-11-24",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:2bqkVvlwouIxuCayR5c096",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/4axZ6sWok8rMyKdijxvXcS/clip_253940_313940.mp3",
        description: "Fearless, kind, truthful, and devoted to goodness.",
        duration_ms: 715389,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/0nhVB0K78Lq0guZcdgzMce",
        },
        href: "https://api.spotify.com/v1/episodes/0nhVB0K78Lq0guZcdgzMce",
        html_description:
          "<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p><p><br /></p>",
        id: "0nhVB0K78Lq0guZcdgzMce",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-2 (EP-04)",
        release_date: "2023-11-28",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:0nhVB0K78Lq0guZcdgzMce",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2enYpKIKNMTv5EotBAKuoZ/clip_0_60000.mp3",
        description: "Arrogant, greedy, angry, and cruel.",
        duration_ms: 848378,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/6K0jJNmGfJOhz7xMHYCyGJ",
        },
        href: "https://api.spotify.com/v1/episodes/6K0jJNmGfJOhz7xMHYCyGJ",
        html_description:
          "<p>.Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p>",
        id: "6K0jJNmGfJOhz7xMHYCyGJ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-3 (EP-01 )",
        release_date: "2023-12-01",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:6K0jJNmGfJOhz7xMHYCyGJ",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/4AUtejPfMxynFKT0Z7eSrn/clip_0_60000.mp3",
        description: "The peaceful and pure soul who shines with wisdom.",
        duration_ms: 923898,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/3GEk0InWt6DmLisOYbBnD0",
        },
        href: "https://api.spotify.com/v1/episodes/3GEk0InWt6DmLisOYbBnD0",
        html_description:
          "<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p><p><br /></p>",
        id: "3GEk0InWt6DmLisOYbBnD0",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-3 (EP-02)",
        release_date: "2023-12-05",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:3GEk0InWt6DmLisOYbBnD0",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/09gKE67nn1Iw2ZUF0DpAA4/clip_177229_237229.mp3",
        description: "The restless doer, full of desires and ambitions.",
        duration_ms: 597890,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/0DE87wet3302IKwMDXZpEa",
        },
        href: "https://api.spotify.com/v1/episodes/0DE87wet3302IKwMDXZpEa",
        html_description:
          "<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at teluguonepodcasts&#64;gmail.com</p><p><br /></p>",
        id: "0DE87wet3302IKwMDXZpEa",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-4 (EP-01)",
        release_date: "2023-12-08",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:0DE87wet3302IKwMDXZpEa",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/3LOmsgj9YMVAkiY8umJikN/clip_583251_643251.mp3",
        description: "The lazy dreamer lost in darkness and confusion.",
        duration_ms: 673985,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/7LQWGTahwPYrtNRRBeR64P",
        },
        href: "https://api.spotify.com/v1/episodes/7LQWGTahwPYrtNRRBeR64P",
        html_description:
          '<p>Welcome to &#34;Bhagavad Gita,&#34; a podcast where we make the ancient wisdom of the Bhagavad Gita easy to understand. Join us as we explore this sacred text, learn life lessons, and find inspiration for our daily lives. Whether you&#39;re new to the Bhagavad Gita or a curious listener, our podcast is your guide to timeless wisdom, simplified just for you. Tune in for practical insights and spiritual growth.</p><p><br /></p><p>Every Tuesday and Friday.</p><p><br /></p><p>Produced and Edited by TeluguOne.</p><p><br /></p><p>For Sponsorships and Promotions reach out to us at <a href="mailto:teluguonepodcasts&#64;gmail.com" rel="nofollow">teluguonepodcasts&#64;gmail.com</a></p>',
        id: "7LQWGTahwPYrtNRRBeR64P",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8aacb25aff25666a4dd4e7a747",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1facb25aff25666a4dd4e7a747",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68dacb25aff25666a4dd4e7a747",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "Bhagavad Gita Chapter-4 (EP-02)",
        release_date: "2023-12-12",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:7LQWGTahwPYrtNRRBeR64P",
      },
    ],
  },
  {
    id: 101,
    img_url:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts114/v4/1b/13/c6/1b13c624-7584-4814-e0ee-860c4bc8ffe3/mza_12955823831825697714.jpg/250x250bb.jpg",
    name: "Purijaganth",
    casts: "20 tracks",
    items: [
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/3VIOYeUyUaAKOE4emzQfjL/clip_162922_222922.mp3",
        description: "MUSINGS",
        duration_ms: 275899,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/1HapRv5gHntoYGpKUm8wxP",
        },
        href: "https://api.spotify.com/v1/episodes/1HapRv5gHntoYGpKUm8wxP",
        html_description: "MUSINGS",
        id: "1HapRv5gHntoYGpKUm8wxP",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "MICRO HABITS",
        release_date: "2025-06-01",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:1HapRv5gHntoYGpKUm8wxP",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/02WNLq96Hvi1b7a3NrSieC/clip_142270_202270.mp3",
        description: "MUSINGS",
        duration_ms: 267215,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/5L0Up2AOPKYKDqGOVcqiwc",
        },
        href: "https://api.spotify.com/v1/episodes/5L0Up2AOPKYKDqGOVcqiwc",
        html_description: "<p>MUSINGS</p>",
        id: "5L0Up2AOPKYKDqGOVcqiwc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "PORTUGUESE",
        release_date: "2025-05-31",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:5L0Up2AOPKYKDqGOVcqiwc",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2ilHsZQpuUzPGD9YmQwPGK/clip_167524_227524.mp3",
        description: "MUSINGS",
        duration_ms: 304529,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/6ECEHZ9yUbaPNBkqna1oAP",
        },
        href: "https://api.spotify.com/v1/episodes/6ECEHZ9yUbaPNBkqna1oAP",
        html_description: "<p>MUSINGS</p>",
        id: "6ECEHZ9yUbaPNBkqna1oAP",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "MOST WANTED",
        release_date: "2025-05-30",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:6ECEHZ9yUbaPNBkqna1oAP",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/6Vrj0HVQslIQUIvdHLboh4/clip_7773_67773.mp3",
        description: "MUSINGS",
        duration_ms: 220961,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/3ANXlZIgOHduuRAVedgUxR",
        },
        href: "https://api.spotify.com/v1/episodes/3ANXlZIgOHduuRAVedgUxR",
        html_description: "<p>MUSINGS</p>",
        id: "3ANXlZIgOHduuRAVedgUxR",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "TINY LIVING THINGS",
        release_date: "2025-05-29",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:3ANXlZIgOHduuRAVedgUxR",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/27a3LHWM3rtzZvS8G8snra/clip_150148_210148.mp3",
        description: "MUSINGS",
        duration_ms: 345420,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/7nLZ8CYMzsOqLUmN63Ug86",
        },
        href: "https://api.spotify.com/v1/episodes/7nLZ8CYMzsOqLUmN63Ug86",
        html_description: "<p>MUSINGS</p>",
        id: "7nLZ8CYMzsOqLUmN63Ug86",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "MIGRATION",
        release_date: "2025-05-21",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:7nLZ8CYMzsOqLUmN63Ug86",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2ScgpQHBibQtSbUxuBGxlH/clip_76227_136227.mp3",
        description: "MUSINGS",
        duration_ms: 233894,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/0HQS7c7lzJ8VNBJLNOhxHT",
        },
        href: "https://api.spotify.com/v1/episodes/0HQS7c7lzJ8VNBJLNOhxHT",
        html_description: "<p>MUSINGS</p>",
        id: "0HQS7c7lzJ8VNBJLNOhxHT",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "HONEYBEES",
        release_date: "2025-05-20",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:0HQS7c7lzJ8VNBJLNOhxHT",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/0TaOtXigAvDmYGyW8IEGsv/clip_85924_145924.mp3",
        description: "MUSINGS",
        duration_ms: 204056,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/1WUA1a8ifcDfoNvh5HrSrM",
        },
        href: "https://api.spotify.com/v1/episodes/1WUA1a8ifcDfoNvh5HrSrM",
        html_description: "<p>MUSINGS</p>",
        id: "1WUA1a8ifcDfoNvh5HrSrM",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "QAWWALI ",
        release_date: "2025-05-19",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:1WUA1a8ifcDfoNvh5HrSrM",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/7x9pezVjDuDuhhkQbICtJX/clip_162151_222151.mp3",
        description: "MUSINGS",
        duration_ms: 247129,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/7IrsKDU9yYtwDBGWsWOTux",
        },
        href: "https://api.spotify.com/v1/episodes/7IrsKDU9yYtwDBGWsWOTux",
        html_description: "<p>MUSINGS</p>",
        id: "7IrsKDU9yYtwDBGWsWOTux",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "SLEEP DIVORCE",
        release_date: "2025-05-18",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:7IrsKDU9yYtwDBGWsWOTux",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/78u7t1yvU9Z1PFtgVDQlJK/clip_189230_249230.mp3",
        description: "MUSINGS",
        duration_ms: 250520,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/2x0TB8acVTQIz7R0CzvpEs",
        },
        href: "https://api.spotify.com/v1/episodes/2x0TB8acVTQIz7R0CzvpEs",
        html_description: "<p>MUSINGS</p>",
        id: "2x0TB8acVTQIz7R0CzvpEs",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "HUMAN LIBRARY",
        release_date: "2025-05-14",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:2x0TB8acVTQIz7R0CzvpEs",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/5tw9vCQ2489zDtTOudyGnC/clip_83138_143138.mp3",
        description: "MUSINGS",
        duration_ms: 211603,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/6bGwpvLVSodnqMgZ03bBaB",
        },
        href: "https://api.spotify.com/v1/episodes/6bGwpvLVSodnqMgZ03bBaB",
        html_description: "<p>MUSINGS</p>",
        id: "6bGwpvLVSodnqMgZ03bBaB",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "SAKE",
        release_date: "2025-05-12",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:6bGwpvLVSodnqMgZ03bBaB",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/1QZMuyMVTcAhol9gZ0tznh/clip_4699_64699.mp3",
        description: "Musings",
        duration_ms: 197810,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/5tZhngfOwOd3uHviX2ckqc",
        },
        href: "https://api.spotify.com/v1/episodes/5tZhngfOwOd3uHviX2ckqc",
        html_description: "<p>Musings</p>",
        id: "5tZhngfOwOd3uHviX2ckqc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "STRONG PEOPLE",
        release_date: "2025-05-11",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:5tZhngfOwOd3uHviX2ckqc",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/6HJGmPOM6VO030IjKyPl06/clip_63933_123933.mp3",
        description: "MUSINGS",
        duration_ms: 205101,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/2FmDXRui5q0mDXVdgYn7Fp",
        },
        href: "https://api.spotify.com/v1/episodes/2FmDXRui5q0mDXVdgYn7Fp",
        html_description: "<p>MUSINGS</p>",
        id: "2FmDXRui5q0mDXVdgYn7Fp",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "HOMO NOVUS",
        release_date: "2025-05-09",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:2FmDXRui5q0mDXVdgYn7Fp",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/53OciBKWOwWthfOEXrTOdB/clip_90051_150051.mp3",
        description: "MUSINGS",
        duration_ms: 222981,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/6i1gD7Y4BiP35xN3Ae8OQN",
        },
        href: "https://api.spotify.com/v1/episodes/6i1gD7Y4BiP35xN3Ae8OQN",
        html_description: "<p>MUSINGS</p>",
        id: "6i1gD7Y4BiP35xN3Ae8OQN",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "LONDON TO CALCUTTA",
        release_date: "2025-05-08",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:6i1gD7Y4BiP35xN3Ae8OQN",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/1ePtF5iQYkCtzZNlTL3L6L/clip_140744_200744.mp3",
        description: "MUSINGS",
        duration_ms: 215759,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/3qk3gkUp7vlE7RbtEUbDe6",
        },
        href: "https://api.spotify.com/v1/episodes/3qk3gkUp7vlE7RbtEUbDe6",
        html_description: "<p>MUSINGS</p>",
        id: "3qk3gkUp7vlE7RbtEUbDe6",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "LIECHTENSTEIN",
        release_date: "2025-05-07",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:3qk3gkUp7vlE7RbtEUbDe6",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/6z0BpUASUwfU499Sqhfc2V/clip_1818_61818.mp3",
        description: "MUSINGS",
        duration_ms: 236379,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/4hv4aGq9yKyvsOGWxH3L5q",
        },
        href: "https://api.spotify.com/v1/episodes/4hv4aGq9yKyvsOGWxH3L5q",
        html_description: "<p>MUSINGS</p>",
        id: "4hv4aGq9yKyvsOGWxH3L5q",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "LAT ",
        release_date: "2025-05-06",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:4hv4aGq9yKyvsOGWxH3L5q",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/3b0LcvJfto6LQrPhSaavkR/clip_667_60667.mp3",
        description: "MUSINGS",
        duration_ms: 193213,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/75vPF7VFwkzRjAtvRKxSX5",
        },
        href: "https://api.spotify.com/v1/episodes/75vPF7VFwkzRjAtvRKxSX5",
        html_description: "<p>MUSINGS</p>",
        id: "75vPF7VFwkzRjAtvRKxSX5",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "ARAMAIC",
        release_date: "2025-05-04",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:75vPF7VFwkzRjAtvRKxSX5",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/7nrPol3stZjFHODj4oiZhl/clip_53281_113281.mp3",
        description: "MUSINGS",
        duration_ms: 218546,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/14Qu1ZdZ8S34vwxQbZZbh3",
        },
        href: "https://api.spotify.com/v1/episodes/14Qu1ZdZ8S34vwxQbZZbh3",
        html_description: "<p>MUSINGS</p>",
        id: "14Qu1ZdZ8S34vwxQbZZbh3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "SILK ROAD",
        release_date: "2025-05-02",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:14Qu1ZdZ8S34vwxQbZZbh3",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/1ltfSX5oJEt0NIMPfznTPI/clip_147753_207753.mp3",
        description: "MUSINGS",
        duration_ms: 249057,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/2TvxMvaghwBHEPfa7JrrFc",
        },
        href: "https://api.spotify.com/v1/episodes/2TvxMvaghwBHEPfa7JrrFc",
        html_description: "<p>MUSINGS</p>",
        id: "2TvxMvaghwBHEPfa7JrrFc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "EGO",
        release_date: "2025-05-02",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:2TvxMvaghwBHEPfa7JrrFc",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/7CV8pXQeJweTiXckvWuL1S/clip_7868_67868.mp3",
        description: "MUSINGS",
        duration_ms: 227253,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/3ZInmLIjNNJNjA633OEJbx",
        },
        href: "https://api.spotify.com/v1/episodes/3ZInmLIjNNJNjA633OEJbx",
        html_description: "<p>MUSINGS</p>",
        id: "3ZInmLIjNNJNjA633OEJbx",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "UNSUCCESSFUL ",
        release_date: "2025-04-28",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:3ZInmLIjNNJNjA633OEJbx",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/51BknhiNZHV3KHFGuq4YhX/clip_120389_180389.mp3",
        description: "MUSINGS",
        duration_ms: 209722,
        explicit: false,
        external_urls: {
          spotify: "https://open.spotify.com/episode/0f7TpewyMLcx74BRIqe9LZ",
        },
        href: "https://api.spotify.com/v1/episodes/0f7TpewyMLcx74BRIqe9LZ",
        html_description: "<p>MUSINGS</p>",
        id: "0f7TpewyMLcx74BRIqe9LZ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a1b919fb4541f7789f8d53b12",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f1b919fb4541f7789f8d53b12",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d1b919fb4541f7789f8d53b12",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "te",
        languages: ["te"],
        name: "JOHUTSU",
        release_date: "2025-04-27",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:0f7TpewyMLcx74BRIqe9LZ",
      },
    ],
  },
  {
    id: 103,
    img_url: "/79a584097252a30afb87ec889046e3b30ef29d10.jpg",
    name: "Call her daddy",
    casts: "10 tracks",
    items: [
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/3maA0oBn9dSDj8qDVZKGlI/clip_808000_867840.mp3",
        description:
          "Join Alex in the studio for an interview with Ayesha Curry.",
        duration_ms: 3473449,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/5K4RZUkTOake3fRSHTkj7N",
        },
        href: "https://api.spotify.com/v1/episodes/5K4RZUkTOake3fRSHTkj7N",
        html_description:
          "Join Alex in the studio for an interview with Ayesha Curry. Ayesha opens up about navigating her early 20’s, how becoming a mother impacted her identity, and how to adapt when your timeline changes. She also discusses her relationship with Steph, how she’s handled public scrutiny, and finding her passion as a business owner. Enjoy!",
        id: "5K4RZUkTOake3fRSHTkj7N",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Ayesha Curry: Marriage, Motherhood & My Identity",
        release_date: "2025-08-20",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:5K4RZUkTOake3fRSHTkj7N",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/06iMTlb71CYehgnetYzuK8/clip_1513000_1578320.mp3",
        description: "This week, Father Cooper sits down with Demi Lovato.",
        duration_ms: 2666475,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/67g7uVO2azwPZclf60gJT6",
        },
        href: "https://api.spotify.com/v1/episodes/67g7uVO2azwPZclf60gJT6",
        html_description:
          "This week, Father Cooper sits down with Demi Lovato. Demi exposes the reality of what it was like to be one of the biggest stars on the Disney Channel. How much of Demi’s personal life did Disney have control over and what the fuck was up with the purity rings? Demi outlines how extreme management evolved into manipulation and brainwashing which led to drugs and alcohol. Now free of the control, Demi reflects back on problematic relationships and opens up about which relationship inspired the song &#34;29.&#34; Holy Fuck…Demi shares all about sex and dating and discusses a new relationship. This episode discusses adult subject matter, including descriptions of emotional and physical abuse, eating disorders, and substance abuse and is intended for adult consumption only. Listener discretion is advised. Resources: If you have been affected by domestic abuse, free, confidential support is available 24/7 through the National Domestic Violence Hotline at 800.799.7233 and online at www.thehotline.org. Text or call the NEDA helpline for support, resources, and treatment options for yourself or a loved one who is struggling with an eating disorder at 800.931.2237 and online at www.nationaleatingdisorders.org The National Drug Helpline is open to any individual dealing with addiction issues, including family members and other loved ones. Resources are available for those struggling with any addictive substance, including alcohol, and professionals are available to help 24/7/365 at 1-844-289-0879",
        id: "67g7uVO2azwPZclf60gJT6",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Demi Lovato (FBF)",
        release_date: "2025-08-15",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:67g7uVO2azwPZclf60gJT6",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/484RQ5ZUgIAQTMLrGBc0Ib/clip_573000_633360.mp3",
        description:
          "This week, Alex sits down with Kid Cudi for a raw conversation.",
        duration_ms: 5205211,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/5PPCezLTHYOCT2Oe2gONxY",
        },
        href: "https://api.spotify.com/v1/episodes/5PPCezLTHYOCT2Oe2gONxY",
        html_description:
          "<p>This week, Alex sits down with Kid Cudi for a raw conversation about the dark side of fame and his path to self-love. He opens up about navigating grief and addiction as his career skyrocketed, and how rehab ultimately helped him survive. He tells the story of meeting his wife and shares the best moments from their wedding, plus what to expect from his upcoming album.This episode includes discussion about addiction, depression, and suicidal ideation. Please keep this in mind when deciding if, how, and when you’ll listen.</p>",
        id: "5PPCezLTHYOCT2Oe2gONxY",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Kid Cudi: The Pursuit Paid Off",
        release_date: "2025-08-13",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:5PPCezLTHYOCT2Oe2gONxY",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/3BwJp6t4Vv1wN7waLFf0yH/clip_214000_279920.mp3",
        description: "This week, Alex breaks down how to handle texting.",
        duration_ms: 2945071,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/1IqwPZfGUJxmREyGgmY52W",
        },
        href: "https://api.spotify.com/v1/episodes/1IqwPZfGUJxmREyGgmY52W",
        html_description:
          "This week, Alex breaks down how to handle texting in the early stages of a relationship. She talks about why texting can create a false sense of closeness, and how to avoid slipping into pen-pal mode. She also shares when it’s okay to tell a partner about your past relationship mistakes, and how to avoid dumping your emotional baggage onto them. Finally, she discusses staying level-headed when you’re angry at a friend, and how to navigate a breakup when your partner did nothing wrong. Enjoy!</p>",
        id: "1IqwPZfGUJxmREyGgmY52W",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "He’s Not “Just a Bad Texter”",
        release_date: "2025-08-10",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:1IqwPZfGUJxmREyGgmY52W",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/6Xn2fn3k19D8iGLPNirpPm/clip_501000_562040.mp3",
        description:
          "Join Alex in the studio for a conversation with Reneé Rapp. ",
        duration_ms: 2859781,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/3JqaFNoOaCDpT8ZB8SqjkI",
        },
        href: "https://api.spotify.com/v1/episodes/3JqaFNoOaCDpT8ZB8SqjkI",
        html_description:
          "<p>Join Alex in the studio for a conversation with Reneé Rapp. Reneé gushes about her girlfriend, shits on straight men and sends some wild texts to celebrities. Enjoy!</p>",
        id: "3JqaFNoOaCDpT8ZB8SqjkI",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Reneé Rapp: At Least I'm Hot",
        release_date: "2025-08-06",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:3JqaFNoOaCDpT8ZB8SqjkI",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/4kKb69AdtG8X2RU7q3mZvw/clip_567000_627720.mp3",
        description: "Gwyneth Paltrow joins Call Her Daddy to reflect.",
        duration_ms: 3236832,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/61NkuUiRHLPIQjZj7ze5A2",
        },
        href: "https://api.spotify.com/v1/episodes/61NkuUiRHLPIQjZj7ze5A2",
        html_description:
          "<p>Gwyneth Paltrow joins Call Her Daddy to reflect on past relationships and give the life advice we all need to hear. Gwyenth opens up about her engagement to Brad Pitt and discusses how she came to the decision that she wasn’t yet ready for marriage. Speaking of her exes, Gwyneth plays a little game called “Brad or Ben” where she determines whether Brad Pitt or Ben Affleck was the better boyfriend. Who was more romantic? Who was better in bed? Gwyneth reminisces on her love story with Chris Martin and how she ultimately knew when it was time to end the marriage. Gwynth shares the wildest place she’s had sex, why she loves vibrators and chimes in on the nepo baby debate.</p>",
        id: "61NkuUiRHLPIQjZj7ze5A2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Gwyneth Paltrow: The Ultimate Dating Roster (FBF)",
        release_date: "2025-08-01",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:61NkuUiRHLPIQjZj7ze5A2",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/5Uff3L7SRgClL0wpPP6IGe/clip_775000_836880.mp3",
        description:
          "Join Alex in the studio for a hilarious interview with Dave Franco.",
        duration_ms: 4369162,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/771IEklYa31hzwLSDrmnDE",
        },
        href: "https://api.spotify.com/v1/episodes/771IEklYa31hzwLSDrmnDE",
        html_description:
          "<p>Join Alex in the studio for a hilarious interview with Dave Franco. Dave discusses some of his most chaotic moments such as doing Molly the night he met his wife, waking up with dicks drawn all over his face, throwing candy at his middle school crush, and the time Zac Efron dislocated his thumb grabbing his crotch. Dave also reveals some spicy secrets (like the time he hooked up at Disneyland) and sends some crazy texts to his friends and coworkers. Enjoy!</p>",
        id: "771IEklYa31hzwLSDrmnDE",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Dave Franco: Blunt Rotations, Body Counts, & Bad Meat",
        release_date: "2025-07-30",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:771IEklYa31hzwLSDrmnDE",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2INCXMTApVgGQ1Ag5wMnA6/clip_578066_638066.mp3",
        description:
          "Join Alex as she gives the single girls a guide to navigating wedding season and embracing romantic chaos.",
        duration_ms: 3150785,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/1a0J4hIZcfS1JE9cnariTv",
        },
        href: "https://api.spotify.com/v1/episodes/1a0J4hIZcfS1JE9cnariTv",
        html_description:
          "<p>Join Alex as she gives the single girls a guide to navigating wedding season and embracing romantic chaos. She shares who you need to make friends with, how to handle slow dances, and why you shouldn’t bring a situationship as your date. Plus, Alex dives into complicated friendship dynamics and what to do when a friend sets unrealistic boundaries. Finally, some advice on meeting men in the wild and finding balance in your 20’s. Enjoy!</p>",
        id: "1a0J4hIZcfS1JE9cnariTv",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "How To Survive Wedding Season",
        release_date: "2025-07-27",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:1a0J4hIZcfS1JE9cnariTv",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/2g42CaZ8Qfmf7i3VqrCWj0/clip_30000_90000.mp3",
        description:
          "Join Alex in the studio for an interview with Kathy Hilton.",
        duration_ms: 3537214,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/4qgRDraVptemdrH7bNYESh",
        },
        href: "https://api.spotify.com/v1/episodes/4qgRDraVptemdrH7bNYESh",
        html_description:
          "<p>Join Alex in the studio for an interview with Kathy Hilton. She shares the secrets to a happy marriage, the chaos of tracking down Paris and Nicky when they were younger, and how she avoids all the Real Housewives drama. Plus, she reveals how to expertly slide into someone’s DMs, what to get at the Cheesecake Factory, and who tops her list for a celebrity hall pass. Enjoy!</p>",
        id: "4qgRDraVptemdrH7bNYESh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Kathy Hilton: Don’t Push Little Hunky Dory",
        release_date: "2025-07-23",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:4qgRDraVptemdrH7bNYESh",
      },
      {
        audio_preview_url:
          "https://podz-content.spotifycdn.com/audio/clips/280RVyZAopElJ8f33Hv68m/clip_667000_727880.mp3",
        description:
          "Harry Jowsey makes his return to Call Her Daddy and he doesn't hold back.",
        duration_ms: 3989342,
        explicit: true,
        external_urls: {
          spotify: "https://open.spotify.com/episode/14s28RNfHcgQOtcv0Ezjrp",
        },
        href: "https://api.spotify.com/v1/episodes/14s28RNfHcgQOtcv0Ezjrp",
        html_description:
          "<p>Harry Jowsey makes his return to Call Her Daddy and he doesn&#39;t hold back. He spills the tea on his dating life and reveals that his previous relationship ended due to cheating. He shares his new approach to dating aka Harry is hunting for a wife. Harry proudly declares that he&#39;s currently in his &#34;dad era,&#34; which includes eating ass, sucking toes and many other wild sexual adventures. Alex and Harry answer questions from the Daddy Gang, providing advice on decoding mixed signals, navigating hookups with friends, dealing with bad texters, maintaining friendships with exes, and much more. Prepare for a wild ride because this episode is filled with hilarious stories, dating wisdom and plenty of laughter.</p>",
        id: "14s28RNfHcgQOtcv0Ezjrp",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6765630000ba8a9cb565e7ee0bd8f534c6a60e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67656300005f1f9cb565e7ee0bd8f534c6a60e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab6765630000f68d9cb565e7ee0bd8f534c6a60e",
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: "en",
        languages: ["en"],
        name: "Harry Jowsey: From Fuckboy to Marriage Material (FBF)",
        release_date: "2025-07-18",
        release_date_precision: "day",
        type: "episode",
        uri: "spotify:episode:14s28RNfHcgQOtcv0Ezjrp",
      },
    ],
  },
];
      
function App() {
  return (
    <>
      <SearchSongs>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route
              path="/"
              element={
                <ProtectRoute>
                  <FirstHome />
                </ProtectRoute>
              }
            ></Route>
            <Route
              path="/home"
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            ></Route>
            <Route
              path="/podcasts"
              element={
                <ProtectRoute>
                  <PodcastDetails Details={Details} />
                </ProtectRoute>
              }
            ></Route>
            <Route
              path="/podcast"
              element={
                <ProtectRoute>
                  <PodcastPage />
                </ProtectRoute>
              }
            ></Route>
            <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
            <Route />
            <Route
              path="/categorylist/:CategoryplaylistId"
              element={<CategoryDetails />}
            />
            <Route />
            <Route
              path="/newreleases/:NewReleaseplaylistId"
              element={<NewreleasesDetails />}
            />
          </Routes>
        </BrowserRouter>
      </SearchSongs>
    </>
  );
}

export default App;
