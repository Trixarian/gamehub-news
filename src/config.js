// Configuration for news sources

export const NEWS_SOURCES = {
  rss: [
    {
      id: 'rps',
      url: 'https://www.rockpapershotgun.com/feed/news',
      title: 'Gaming News',
      subtitle: 'Rock Paper Shotgun'
    }
  ],
  youtube: [
    // Add YouTube channels here - RSS format: https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
    {
      id: 'etaprime',
      channelId: 'UC_0CVCfC_3iuHqmyClu59Uw',  // ETA PRIME
      title: 'Gaming & Emulation',
      subtitle: 'ETA PRIME'
    },
    {
      id: 'ryanretro',
      channelId: 'UCh9GxjM-FNuSWv7xqn3UKVw',  // Ryan Retro
      title: 'Retro Gaming',
      subtitle: 'Ryan Retro'
    }
  ],
  github: [
    // Emulation & Translation Layers
    {
      id: 'fex-emu',
      owner: 'FEX-Emu',
      repo: 'FEX',
      subtitle: 'FEX-Emu'
    },
    {
      id: 'box64',
      owner: 'ptitSeb',
      repo: 'box64',
      subtitle: 'Box64'
    },
    {
      id: 'box86',
      owner: 'ptitSeb',
      repo: 'box86',
      subtitle: 'Box86'
    },

    // Windows on Android Emulators
    {
      id: 'winlator',
      owner: 'brunodev85',
      repo: 'winlator',
      subtitle: 'Winlator'
    },
    {
      id: 'mobox',
      owner: 'olegos2',
      repo: 'mobox',
      subtitle: 'Mobox'
    },

    // Wine & Proton
    {
      id: 'wine-ge',
      owner: 'GloriousEggroll',
      repo: 'wine-ge-custom',
      subtitle: 'Wine-GE'
    },
    {
      id: 'proton-ge',
      owner: 'GloriousEggroll',
      repo: 'proton-ge-custom',
      subtitle: 'Proton-GE'
    },
    {
      id: 'proton',
      owner: 'ValveSoftware',
      repo: 'Proton',
      subtitle: 'Valve Proton'
    },

    // DirectX Translation (DXVK & VKD3D)
    {
      id: 'dxvk',
      owner: 'doitsujin',
      repo: 'dxvk',
      subtitle: 'DXVK'
    },
    {
      id: 'vkd3d-proton',
      owner: 'HansKristian-Work',
      repo: 'vkd3d-proton',
      subtitle: 'VKD3D-Proton'
    },

    // GPU Drivers (Turnip Mesa & Adreno)
    {
      id: 'mesa-turnip-builder',
      owner: 'v3kt0r-87',
      repo: 'Mesa-Turnip-Builder',
      subtitle: 'Mesa Turnip Builder'
    },
    {
      id: 'adreno-tools-drivers',
      owner: 'K11MCH1',
      repo: 'AdrenoToolsDrivers',
      subtitle: 'Adreno Tools Drivers'
    },
    {
      id: 'qualcomm-adreno-driver',
      owner: 'zoerakk',
      repo: 'qualcomm-adreno-driver',
      subtitle: 'Qualcomm Adreno (8 Elite)'
    },
    {
      id: 'freedreno-turnip-ci',
      owner: 'Weab-chan',
      repo: 'freedreno_turnip-CI',
      subtitle: 'Freedreno Turnip CI'
    }
  ]
};

// Cache settings
export const CACHE_TTL = 3600; // 1 hour in seconds
export const MAX_NEWS_ITEMS = 50; // Increased to accommodate more sources
export const DEFAULT_COVER_IMAGE = 'https://via.placeholder.com/800x450/1a1a1a/ffffff?text=GameHub+News';
