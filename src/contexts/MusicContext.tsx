
import { createContext, useContext, useState, ReactNode } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  duration: string;
  category: string;
}

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  favorites: number[];
  playTrack: (song: Song) => void;
  togglePlay: () => void;
  nextSong: () => void;
  previousSong: () => void;
  toggleFavorite: (songId: number) => void;
  isFavorite: (songId: number) => boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

const sampleSongs: Song[] = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    duration: "3:20",
    category: "Pop"
  },
  {
    id: 2,
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300",
    duration: "2:21",
    category: "Pop"
  },
  {
    id: 3,
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
    duration: "2:58",
    category: "Pop"
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300",
    duration: "3:23",
    category: "Pop"
  }
];

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const playTrack = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (!currentSong) return;
    const currentIndex = sampleSongs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % sampleSongs.length;
    setCurrentSong(sampleSongs[nextIndex]);
  };

  const previousSong = () => {
    if (!currentSong) return;
    const currentIndex = sampleSongs.findIndex(song => song.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? sampleSongs.length - 1 : currentIndex - 1;
    setCurrentSong(sampleSongs[prevIndex]);
  };

  const toggleFavorite = (songId: number) => {
    setFavorites(prev => 
      prev.includes(songId) 
        ? prev.filter(id => id !== songId)
        : [...prev, songId]
    );
  };

  const isFavorite = (songId: number) => {
    return favorites.includes(songId);
  };

  return (
    <MusicContext.Provider value={{
      currentSong,
      isPlaying,
      favorites,
      playTrack,
      togglePlay,
      nextSong,
      previousSong,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
};
