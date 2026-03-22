import type { Meta, StoryObj } from "@storybook/react-vite";
import { LyricIpsumPage } from "../components/LyricIpsumPage";
import type { LyricData } from "../types";

const mockData: LyricData = {
  title: "Midnight Reverie",
  artist: "The Placeholder Band",
  url: "https://genius.com/placeholder",
  description:
    "A dreamy track exploring themes of nostalgia and late-night introspection.",
  album: "Echoes of Tomorrow",
  release_date: "March 15, 2003",
  lyrics_state: "complete",
  annotation_count: 24,
  lyrics: [
    "## Verse 1",
    "",
    "Walking down the empty street at midnight",
    "Streetlamps casting shadows on the pavement",
    "Every window tells a different story",
    "Every door a path I haven't taken",
    "",
    "## Chorus",
    "",
    "And the city hums a melody",
    "That only lonely hearts can hear",
    "A midnight reverie, a waking dream",
    "Where everything is crystal clear",
    "",
    "## Verse 2",
    "",
    "Payphones ringing in the autumn evening",
    "Echoes bouncing off the brownstone buildings",
    "Somewhere someone plays a worn out record",
    "Spinning tales of love and second chances",
    "",
    "## Bridge",
    "",
    "Time moves slow when you're the only one awake",
    "The world is yours for just a moment's take",
    "Before the dawn comes rushing in",
    "And all these quiet hours begin again",
    "",
    "## Chorus",
    "",
    "And the city hums a melody",
    "That only lonely hearts can hear",
    "A midnight reverie, a waking dream",
    "Where everything is crystal clear",
  ].join("\n"),
};

const mockMinimal: LyricData = {
  title: "Summer Fade",
  artist: "Glass Horizon",
  url: "https://genius.com/placeholder-2",
  description: "No description available",
  album: "Unknown album",
  release_date: "June 2, 1998",
  lyrics_state: "incomplete",
  annotation_count: 3,
  lyrics: [
    "## Verse 1",
    "",
    "Sun-bleached memories on a windowsill",
    "Polaroids of faces I can almost place",
    "The summer fades like colors in the wash",
    "But I keep holding on to what remains",
  ].join("\n"),
};

const meta: Meta = {
  title: "Lyric Ipsum",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A minimal lyrics generator. Search for songs or shuffle to get random lyrics streamed from Genius. No API keys required.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Full page with pre-loaded lyrics. In production, streams live from Genius.",
      },
    },
  },
  render: () => <LyricIpsumPage initialData={mockData} />,
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      description: { story: "Initial state before any song is loaded." },
    },
  },
  render: () => <LyricIpsumPage initialData={null} />,
};

export const MinimalMetadata: Story = {
  parameters: {
    docs: {
      description: { story: "Song with sparse metadata — unknown album, short lyrics." },
    },
  },
  render: () => <LyricIpsumPage initialData={mockMinimal} />,
};

export const Live: Story = {
  parameters: {
    docs: {
      description: {
        story: "Connected to the live API. Click Shuffle or search to stream real lyrics.",
      },
    },
  },
  render: () => <LyricIpsumPage />,
};
