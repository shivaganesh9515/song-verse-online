
import { Play, Heart } from "lucide-react";
import { useMusicContext } from "@/contexts/MusicContext";

const TrendingSongs = () => {
  const { playTrack, toggleFavorite, isFavorite, currentSong, isPlaying } = useMusicContext();

  const trendingSongs = [
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

  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingSongs.map((song) => (
            <div 
              key={song.id}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={song.image} 
                  alt={song.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => playTrack(song)}
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold">{song.title}</h3>
                <p className="text-gray-400 text-sm">{song.artist}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                    {song.category}
                  </span>
                  <span className="text-gray-400 text-xs">{song.duration}</span>
                </div>
              </div>

              <button 
                onClick={() => toggleFavorite(song.id)}
                className={`p-2 transition-colors duration-200 ${
                  isFavorite(song.id) 
                    ? "text-red-500" 
                    : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite(song.id) ? "fill-current" : ""}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSongs;
