import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;
const SPREADSHEET_ID = "1iKfikjcbzIp3TFhgmRJtvDbrkP0CTeIWyLM_W8sR9tA";
const SPREADSEET_NAME = "Sheet1"

export async function GET(request: ExpoRequest) {
//const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SPREADSEET_NAME}?key=${API_KEY}`);
  
  //const res = await response.json();
  //console.log(res.values);
  // const limit = request.expoUrl.searchParams.get('limit') || 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
  //   {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();
  // return ExpoResponse.json(res.data);
  return ExpoResponse.json(data);
}

const data = [
  {
    id: 1,
    name: 'Agroleasing OJSC',
    symbol: 'Agroleasing',
    slug: 'slug',
    quote: {
      EUR: {
        price: 270,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 2,
    name: 'Yelo Bank OJSC',
    symbol: 'Yelo',
    slug: 'slug',
    quote: {
      EUR: {
        price: 271,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 3,
    name: 'Bank BTB OJSC',
    symbol: 'Bank',
    slug: 'slug',
    quote: {
      EUR: {
        price: 272,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 4,
    name: 'Rabitabank OJSC',
    symbol: 'Rabitabank',
    slug: 'slug',
    quote: {
      EUR: {
        price: 273,
        percent_change_1h : 1.45
      },
    },
  },
  {
    id: 5,
    name: 'TuranBank OJSC',
    symbol: 'TuranBank',
    slug: 'slug',
    quote: {
      EUR: {
        price: 274,
        percent_change_1h : -0.75
      },
    },
  },
  {
    id: 6,
    name: 'Unibank CB OJSC',
    symbol: 'Unibank',
    slug: 'slug',
    quote: {
      EUR: {
        price: 275,
        percent_change_1h : -1.45
      },
    },
  },
  {
    id: 7,
    name: 'International Bank of Azerbaijan OJSC',
    symbol: 'International',
    slug: 'slug',
    quote: {
      EUR: {
        price: 276,
        percent_change_1h : -3.45
      },
    },
  },
  {
    id: 8,
    name: 'Bank of Baku OJSC',
    symbol: 'Baku',
    slug: 'slug',
    quote: {
      EUR: {
        price: 277,
        percent_change_1h : 2.45
      },
    },
  },
  {
    id: 9,
    name: 'Baku Insurance OJSC',
    symbol: 'BakuInsurance',
    slug: 'slug',
    quote: {
      EUR: {
        price: 278,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 10,
    name: 'Expressbank OJSC',
    symbol: 'Expressbank',
    slug: 'slug',
    quote: {
      EUR: {
        price: 279,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 11,
    name: 'Unicapital OJSC',
    symbol: 'Unicapital',
    slug: 'slug',
    quote: {
      EUR: {
        price: 280,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 12,
    name: 'Plato Capital & Co. Investment Company OJSC',
    symbol: 'Plato',
    slug: 'slug',
    quote: {
      EUR: {
        price: 281,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 13,
    name: 'Azer Turk Bank OJSC',
    symbol: 'AzerTurk',
    slug: 'slug',
    quote: {
      EUR: {
        price: 282,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 14,
    name: 'Zayam Technologies Park',
    symbol: 'Zayam',
    slug: 'slug',
    quote: {
      EUR: {
        price: 283,
        percent_change_1h : 0.25
      },
    },
  },
  {
    id: 15,
    name: 'CPM INVEST ASC',
    symbol: 'CPM',
    slug: 'slug',
    quote: {
      EUR: {
        price: 284,
        percent_change_1h : -0.95
      },
    },
  },
  {
    id: 16,
    name: 'Agrarian Innovation and Supply Company OJSC',
    symbol: 'Agrarian',
    slug: 'slug',
    quote: {
      EUR: {
        price: 285,
        percent_change_1h : 1.05
      },
    },
  },
  {
    id: 17,
    name: 'GL OJSC',
    symbol: 'GL',
    slug: 'slug',
    quote: {
      EUR: {
        price: 286,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 18,
    name: 'NBCO INTERNATIONAL OJSC',
    symbol: 'NBCO',
    slug: 'slug',
    quote: {
      EUR: {
        price: 287,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 19,
    name: 'A+CO OJSC',
    symbol: 'A+CO',
    slug: 'slug',
    quote: {
      EUR: {
        price: 288,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 20,
    name: 'FINOKO BOKT OJSC',
    symbol: 'FINOKO',
    slug: 'slug',
    quote: {
      EUR: {
        price: 289,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 21,
    name: 'Merano-Baku OJSC',
    symbol: 'Merano',
    slug: 'slug',
    quote: {
      EUR: {
        price: 290,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 22,
    name: 'Bank Respublika OJSC',
    symbol: 'Respublika',
    slug: 'slug',
    quote: {
      EUR: {
        price: 291,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 23,
    name: 'Konstromat OJSC',
    symbol: 'Konstromat',
    slug: 'slug',
    quote: {
      EUR: {
        price: 292,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 24,
    name: 'Kredit Evi OJSC',
    symbol: 'KreditEvi',
    slug: 'slug',
    quote: {
      EUR: {
        price: 293,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 25,
    name: 'Legion Financial OJSC',
    symbol: 'Legion',
    slug: 'slug',
    quote: {
      EUR: {
        price: 294,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 26,
    name: 'Assist Finance Investment OJSC',
    symbol: 'AssistFinance',
    slug: 'slug',
    quote: {
      EUR: {
        price: 295,
        percent_change_1h : -0.45
      },
    },
  },
  {
    id: 27,
    name: 'Boa Agency OJSC',
    symbol: 'Boa',
    slug: 'slug',
    quote: {
      EUR: {
        price: 296,
        percent_change_1h : -0.45
      },
    },
  },
];

