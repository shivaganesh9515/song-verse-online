
import { Play } from "lucide-react";

const FeaturedPlaylists = () => {
  const playlists = [
    {
      id: 1,
      title: "Today's Hits",
      description: "The hottest tracks right now",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
      songs: 50
    },
    {
      id: 2,
      title: "Chill Vibes",
      description: "Relax and unwind",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300",
      songs: 32
    },
    {
      id: 3,
      title: "Workout Mix",
      description: "High energy beats",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
      songs: 45
    },
    {
      id: 4,
      title: "Love Songs",
      description: "Romantic melodies",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300",
      songs: 28
    }
  ];

  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative mb-4">
                <img 
                  src={playlist.image} 
                  alt={playlist.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{playlist.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{playlist.description}</p>
              <p className="text-purple-400 text-sm">{playlist.songs} songs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaylists;
