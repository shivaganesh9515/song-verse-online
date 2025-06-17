
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { useMusicContext } from "@/contexts/MusicContext";

const MusicPlayer = () => {
  const { 
    currentSong, 
    isPlaying, 
    togglePlay, 
    nextSong, 
    previousSong,
    toggleFavorite,
    isFavorite 
  } = useMusicContext();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-purple-500/20 p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center gap-4 flex-1">
          <img 
            src={currentSong.image} 
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h4 className="text-white font-semibold">{currentSong.title}</h4>
            <p className="text-gray-400 text-sm">{currentSong.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={previousSong}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
          
          <button 
            onClick={nextSong}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Favorite */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={() => toggleFavorite(currentSong.id)}
            className={`p-2 transition-colors duration-200 ${
              isFavorite(currentSong.id) 
                ? "text-red-500" 
                : "text-gray-400 hover:text-red-500"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite(currentSong.id) ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
