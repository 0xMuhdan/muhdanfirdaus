'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Shuffle, Repeat, Music, X, Maximize2, Minimize2 } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // 'off', 'all', 'one'
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Playlist - Tambahkan lagu-lagu lainnya di sini
  const playlist = [
    {
      title: 'Sedia Aku Sebelum Hujan',
      artist: 'Idgitaf',
      src: '/music/SpotiDown.App - Sedia Aku Sebelum Hujan - Idgitaf.mp3',
      cover: '/music/covers/SpotiDown.App - Sedia Aku Sebelum Hujan - Idgitaf.jpeg'
    },
    {
      title: '33x',
      artist: 'Perunggu',
      src: '/music/SpotiDown.App - 33x - Perunggu.mp3',
      cover: '/music/covers/SpotiDown.App - 33x - Perunggu.jpeg'
    },
    {
      title: 'A Thousand Years',
      artist: 'James Arthur',
      src: '/music/SpotiDown.App - A Thousand Years - James Arthur.mp3',
      cover: '/music/covers/SpotiDown.App - A Thousand Years - James Arthur.jpeg'
    },
    {
      title: 'Ini Abadi',
      artist: 'Perunggu',
      src: '/music/SpotiDown.App - Ini Abadi - Perunggu.mp3',
      cover: '/music/covers/SpotiDown.App - Ini Abadi - Perunggu.jpeg'
    },
    {
      title: 'Kalibata: 2012',
      artist: 'Perunggu',
      src: '/music/SpotiDown.App - Kalibata_ 2012 - Perunggu.mp3',
      cover: '/music/covers/SpotiDown.App - Kalibata_ 2012 - Perunggu.jpeg'
    },
    {
      title: 'Kita usahakan rumah itu',
      artist: 'Sal Priadi',
      src: '/music/SpotiDown.App - Kita usahakan rumah itu - Sal Priadi.mp3',
      cover: '/music/covers/SpotiDown.App - Kita usahakan rumah itu - Sal Priadi.jpeg'
    },
    {
      title: 'Pastikan Riuh Akhiri Malammu',
      artist: 'Perunggu',
      src: '/music/SpotiDown.App - Pastikan Riuh Akhiri Malammu - Perunggu.mp3',
      cover: '/music/covers/SpotiDown.App - Pastikan Riuh Akhiri Malammu - Perunggu.jpeg'
    },
    {
      title: 'Pikiran Yang Matang',
      artist: 'Perunggu',
      src: '/music/SpotiDown.App - Pikiran Yang Matang - Perunggu.mp3',
      cover: '/music/covers/SpotiDown.App - Pikiran Yang Matang - Perunggu.jpeg'
    },
    {
      title: 'everything u are',
      artist: 'Hindia',
      src: '/music/SpotiDown.App - everything u are - Hindia.mp3',
      cover: '/music/covers/SpotiDown.App - everything u are - Hindia.jpeg'
    },
    {
      title: 'Sadrah',
      artist: 'For Revenge',
      src: '/music/SpotiDown.App - Sadrah - For Revenge.mp3',
      cover: '/music/covers/SpotiDown.App - Sadrah - For Revenge.jpeg'
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isNaN(audio.currentTime)) {
        setCurrentTime(audio.currentTime);
      }
    };
    
    const updateDuration = () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    
    const handleLoadedData = () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNext();
      }
    };

    const handleCanPlay = () => {
      if (isPlaying) {
        audio.play().catch(err => console.log('Play error:', err));
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);

    // Initial duration check
    if (!isNaN(audio.duration) && audio.duration > 0) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [repeatMode, currentTrack, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrack(randomIndex);
    } else {
      setCurrentTrack((prev) => {
        if (repeatMode === 'all' && prev === playlist.length - 1) {
          return 0;
        }
        return prev < playlist.length - 1 ? prev + 1 : prev;
      });
    }
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      setCurrentTrack((prev) => (prev > 0 ? prev - 1 : playlist.length - 1));
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    
    if (audio && !isNaN(newTime) && !isNaN(audio.duration)) {
      // Ensure newTime is within valid range
      const validTime = Math.max(0, Math.min(newTime, audio.duration));
      audio.currentTime = validTime;
      setCurrentTime(validTime);
    }
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setRepeatMode(modes[nextIndex]);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
    setCurrentTime(0);
    setIsPlaying(true);
    
    // Force play after track change
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log('Play error:', err));
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentTrack]?.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className={`fixed ${isMinimized ? 'bottom-4 right-4' : 'bottom-4 right-4'} z-50 transition-all duration-300`}>
        {isMinimized ? (
          // Minimized Player - Modern Spotify Style
          <div className="bg-gradient-to-br from-zinc-900/95 via-zinc-800/95 to-zinc-900/95 backdrop-blur-xl text-white p-3 rounded-2xl shadow-2xl border border-white/10 w-80">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                {playlist[currentTrack]?.cover ? (
                  <img 
                    src={playlist[currentTrack].cover} 
                    alt={`${playlist[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                    <Music size={20} className="text-zinc-400" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate text-white">{playlist[currentTrack]?.title}</p>
                <p className="text-xs text-zinc-400 truncate">{playlist[currentTrack]?.artist}</p>
              </div>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <Maximize2 size={16} className="text-zinc-400 hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <X size={16} className="text-zinc-400 hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrevious} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <SkipBack size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={togglePlay}
                className="p-2.5 bg-white hover:bg-zinc-100 text-black rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
              </button>
              <button 
                onClick={handleNext} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <SkipForward size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>

              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime || 0}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-zinc-700 rounded-full appearance-none cursor-pointer hover:h-1.5 transition-all duration-200"
                  style={{
                    background: `linear-gradient(to right, #1db954 ${duration ? (currentTime / duration) * 100 : 0}%, #3f3f46 ${duration ? (currentTime / duration) * 100 : 0}%)`
                  }}
                />
                <span className="text-xs text-zinc-400 font-medium min-w-[35px] text-right">{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>
        ) : (
          // Expanded Player - Modern Spotify Style with better scroll handling
          <div className="bg-gradient-to-br from-zinc-900/98 via-zinc-800/98 to-zinc-900/98 backdrop-blur-2xl text-white p-6 rounded-3xl shadow-2xl border border-white/10 w-96 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-gradient-to-br from-zinc-900/98 via-zinc-800/98 to-zinc-900/98 backdrop-blur-2xl z-10 pb-4 -mt-6 -mx-6 px-6 pt-6 mb-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                  <Music size={24} className="text-emerald-500" />
                  Music Player
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                    title="Minimize"
                  >
                    <Minimize2 size={18} className="text-zinc-400 hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                    title="Close"
                  >
                    <X size={18} className="text-zinc-400 hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Current Track Info */}
            <div className="mb-6 text-center">
              <div className="w-56 h-56 mx-auto mb-4 rounded-2xl overflow-hidden shadow-2xl group">
                {playlist[currentTrack]?.cover ? (
                  <img 
                    src={playlist[currentTrack].cover} 
                    alt={`${playlist[currentTrack].title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                    <Music size={64} className="text-zinc-400" />
                  </div>
                )}
              </div>
              <h4 className="font-bold text-xl mb-1 text-white">{playlist[currentTrack]?.title}</h4>
              <p className="text-sm text-zinc-400">{playlist[currentTrack]?.artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime || 0}
                onChange={handleProgressChange}
                className="w-full h-1.5 bg-zinc-700 rounded-full appearance-none cursor-pointer hover:h-2 transition-all duration-200"
                style={{
                  background: `linear-gradient(to right, #1db954 ${duration ? (currentTime / duration) * 100 : 0}%, #3f3f46 ${duration ? (currentTime / duration) * 100 : 0}%)`
                }}
              />
              <div className="flex justify-between text-xs mt-2 text-zinc-400 font-medium">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={toggleShuffle}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isShuffling 
                    ? 'bg-emerald-500/20 text-emerald-500' 
                    : 'hover:bg-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                <Shuffle size={20} />
              </button>
              <button 
                onClick={handlePrevious} 
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <SkipBack size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={togglePlay}
                className="p-4 bg-white hover:bg-zinc-100 text-black rounded-full transition-all duration-200 hover:scale-105 shadow-xl"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              <button 
                onClick={handleNext} 
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <SkipForward size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={toggleRepeat}
                className={`p-2 rounded-lg transition-all duration-200 relative ${
                  repeatMode !== 'off' 
                    ? 'bg-emerald-500/20 text-emerald-500' 
                    : 'hover:bg-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                <Repeat size={20} />
                {repeatMode === 'one' && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    1
                  </span>
                )}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 mb-6 px-2">
              <button 
                onClick={toggleMute} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                ) : (
                  <Volume2 size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-zinc-700 rounded-full appearance-none cursor-pointer hover:h-1.5 transition-all duration-200"
                style={{
                  background: `linear-gradient(to right, #1db954 ${(isMuted ? 0 : volume) * 100}%, #3f3f46 ${(isMuted ? 0 : volume) * 100}%)`
                }}
              />
            </div>

            {/* Playlist - Remove nested scroll */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-zinc-400 uppercase tracking-wider px-2">
                Playlist ({playlist.length} songs)
              </h4>
              <div className="space-y-1 pb-4">
                {playlist.map((track, index) => (
                  <button
                    key={index}
                    onClick={() => selectTrack(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 group ${
                      currentTrack === index
                        ? 'bg-emerald-500/20 border border-emerald-500/30'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <p className={`text-sm font-medium truncate transition-colors ${
                      currentTrack === index ? 'text-emerald-500' : 'text-white group-hover:text-emerald-500'
                    }`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-zinc-400 truncate mt-0.5">{track.artist}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #1db954;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        input[type="range"]:hover::-webkit-slider-thumb {
          opacity: 1;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #1db954;
          cursor: pointer;
          border: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        input[type="range"]:hover::-moz-range-thumb {
          opacity: 1;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb {
          background-color: #3f3f46;
          border-radius: 3px;
        }
        
        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb:hover {
          background-color: #52525b;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </>
  );
}