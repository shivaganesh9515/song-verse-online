
import { useState } from "react";
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import FeaturedPlaylists from "@/components/FeaturedPlaylists";
import TrendingSongs from "@/components/TrendingSongs";
import { MusicProvider } from "@/contexts/MusicContext";

const Index = () => {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
              Lovable Music
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Feel the Vibe, Live the Music
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                Start Listening
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-colors duration-200">
                Browse Music
              </button>
            </div>
          </div>
        </section>

        {/* Featured Playlists */}
        <FeaturedPlaylists />

        {/* Trending Songs */}
        <TrendingSongs />

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
};

export default Index;
