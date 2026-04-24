// News Feed Configuration
const NEWS_FEEDS = {
    idx: [
        {
            url: 'https://finance.detik.com/finansial/rss',
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
            source: 'Liputan6 Saham'
        },
        {
            url: 'https://sindikasi.idxchannel.com/rss/market-news',
            source: 'IDX Channel'
        },
        {
            url: 'https://www.mikirduit.com/tag/investasi/rss/',
            source: 'Mikirduit Investasi'
        },
        {
            url: 'https://stockwatch.id/category/market/feed/',
            source: 'Stockwatch Market'
        },
        {
            url: 'https://www.antaranews.com/rss/ekonomi-bursa.xml',
            source: 'Antaranews Bursa'
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
            source: 'Defilama DeFi'
        }
    ],
    macro: [
        {
            url: 'https://www.cnbc.com/id/10000664/device/rss/rss.html',
            source: 'CNBC Economy'
        },
        {
            url: 'https://www.marketwatch.com/rss/topstories',
            source: 'MarketWatch'
        },
        {
            url: 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml',
            source: 'WSJ Markets'
        },
        {
            url: 'https://feeds.bloomberg.com/markets/news.rss',
            source: 'Bloomberg Markets'
        }
    ]
};

// Category display names
const CATEGORY_NAMES = {
    idx: 'IDX',
    crypto: 'Crypto',
    macro: 'Macro'
};

// Tag Keywords Configuration
const TAG_KEYWORDS = {
    'idx': {
        'bull': ['naik', 'reli', 'menguat', 'positif', 'tumbuh', 'profit', 'laba meningkat', 'ekspansi', 'pertumbuhan', 'rebound'],
        'bear': ['turun', 'melemah', 'jatuh', 'terkoreksi', 'negatif', 'rugi', 'penurunan', 'anjlok', 'susut', 'merosot'],
        'akuisisi': ['akuisisi', 'mengakuisisi', 'membeli', 'pembelian saham', 'take over', 'ambil alih'],
        'corp action': [ 'merger', 'stock split', 'rights issue','right issue', 'hmetd', 'penambahan modal', 'tambah modal', 'buyback', 'beli kembali', 'pembelian kembali', 'ipo', 'listing','waran','private placement','penerbitan saham baru'],
        'dividen': ['dividen','deviden'],
        'earning': ['laba', 'rugi', 'laporan keuangan', 'kinerja keuangan', 'pendapatan', 'profit', 'revenue']
    },
    'crypto': {
        'bull': ['bullish', 'rally', 'pump', 'surge', 'spike', 'breakout', 'inflow', 'gain', 'all-time high', 'ath', 'accumulating'],
        'bear': ['bearish', 'crash', 'dump', 'plunge', 'sell-off', 'correction', 'outflow', 'all-time low', 'liquidation', 'distribution'],
        'regulation': ['sec', 'etf', 'regulation', 'ban', 'lawsuit', 'approval'],
        'security': ['hack', 'exploit', 'rug pull', 'scam']
    },
    'macro': {
        'inflation': ['inflation', 'cpi', 'consumer price', 'price increase', 'deflation'],
        'interest-rate': ['interest rate', 'fed', 'federal reserve', 'rate hike', 'rate cut', 'central bank', 'fomc'],
        'gdp': ['gdp', 'economic growth', 'recession', 'expansion', 'contraction'],
        'employment': ['unemployment', 'jobs report', 'labor market', 'nonfarm payrolls', 'jobless'],
        'trade': ['trade war', 'tariff', 'export', 'import', 'trade deficit', 'trade surplus'],
        'policy': ['monetary policy', 'fiscal policy', 'stimulus', 'quantitative easing', 'qe']
    }
};
