// News Feed Configuration
const NEWS_FEEDS = {
    idx: [
        {
            url: 'https://finance.detik.com/rss',
            source: 'Detik Finance'
        },
        {
            url: 'https://investasi.kontan.co.id/rss',
            source: 'Kontan Investasi'
        },
        {
            url: 'https://www.cnbcindonesia.com/market/rss',
            source: 'CNBC Indonesia'
        },
        {
            url: 'https://feed.liputan6.com/rss/saham',
            source: 'Liputan6'
        },
        {
            url: 'https://sindikasi.idxchannel.com/rss/market-news',
            source: 'IDXchanel'
        },
        {
            url: 'https://stockwatch.id/category/market/feed/',
            source: 'Stockwatch.id'
        },
        {
            url: 'https://www.antaranews.com/rss/ekonomi-bursa.xml',
            source: 'Antaranews'
        }
    ],
    crypto: [
        {
            url: 'https://cointelegraph.com/rss',
            source: 'Cointelegraph'
        },
        {
            url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
            source: 'CoinDesk'
        },
        {
            url: 'https://cryptoslate.com/feed/',
            source: 'CryptoSlate'
        },
        {
            url: 'https://www.dlnews.com/arc/outboundfeeds/rss/category/articles/defi/',
            source: 'Defilama (DeFi)'
        }
    ]
};

// Category display names
const CATEGORY_NAMES = {
    idx: 'IDX',
    crypto: 'Crypto'
};

// Tag Keywords Configuration
const TAG_KEYWORDS = {
    'idx': {
        'bull': ['naik', 'reli', 'menguat', 'positif', 'tumbuh', 'profit', 'laba meningkat', 'ekspansi', 'pertumbuhan', 'rebound'],
        'bear': ['turun', 'melemah', 'jatuh', 'terkoreksi', 'negatif', 'rugi', 'penurunan', 'anjlok', 'susut', 'merosot'],
        'akuisisi': ['akuisisi', 'mengakuisisi', 'membeli', 'pembelian saham', 'take over', 'ambil alih'],
        'penting': ['right issue', 'hmetd', 'penambahan modal', 'tambah modal', 'buyback', 'beli kembali', 'pembelian kembali saham', 'dividen', 'ipo', 'listing'],
        'merger': ['merger', 'penggabungan', 'konsolidasi', 'bergabung'],
        'earning': ['laba', 'rugi', 'laporan keuangan', 'kinerja keuangan', 'pendapatan', 'profit', 'revenue']
    },
    'crypto': {
        'bull': ['bullish', 'rally', 'pump', 'surge', 'spike', 'breakout', 'inflow', 'gain', 'all-time high', 'ath', 'accumulating'],
        'bear': ['bearish', 'crash', 'dump', 'plunge', 'sell-off', 'correction', 'outflow', 'all-time low', 'liquidation', 'distribution'],
        'regulation': ['sec', 'etf', 'regulation', 'ban', 'lawsuit', 'approval'],
        'security': ['hack', 'exploit', 'rug pull', 'scam']
    }
};
