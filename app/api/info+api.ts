import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  // const ids = request.expoUrl.searchParams.get('ids');

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
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

const data = {
  '1': {
    id: 1,
    name: 'Agroleasing OJSC',
    symbol: 'Agroleasing',
    category: 'leasing',
    description:
      'Agroleasing OJSC provides leasing services in the agricultural sector in Azerbaijan. The company is involved in various projects aimed at modernizing and developing agricultural infrastructure.',
    slug: 'agroleasing',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '2': {
    id: 2,
    name: 'Yelo Bank OJSC',
    symbol: 'Yelo',
    category: 'bank',
    description:
      'Yelo Bank OJSC is a major commercial bank in Azerbaijan offering a range of financial services including loans, savings accounts, and investment opportunities.',
    slug: 'yelo',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '3': {
    id: 3,
    name: 'Bank BTB OJSC',
    symbol: 'Bank',
    category: 'bank',
    description:
      'Bank BTB OJSC is a financial institution providing banking services to individuals and businesses in Azerbaijan, focusing on innovative banking solutions.',
    slug: 'bank-btb',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '4': {
    id: 4,
    name: 'Rabitabank OJSC',
    symbol: 'Rabitabank',
    category: 'bank',
    description:
      'Rabitabank OJSC offers a variety of banking products and services, including personal banking, business banking, and online banking solutions in Azerbaijan.',
    slug: 'rabitabank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '5': {
    id: 5,
    name: 'TuranBank OJSC',
    symbol: 'TuranBank',
    category: 'bank',
    description:
      'TuranBank OJSC is a prominent bank in Azerbaijan providing a variety of banking services, including loans, deposits, and payment services.',
    slug: 'turanbank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '6': {
    id: 6,
    name: 'Unibank CB OJSC',
    symbol: 'Unibank',
    category: 'bank',
    description:
      'Unibank CB OJSC is one of Azerbaijan\'s leading banks, offering comprehensive financial services including retail and corporate banking.',
    slug: 'unibank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '7': {
    id: 7,
    name: 'International Bank of Azerbaijan OJSC',
    symbol: 'International',
    category: 'bank',
    description:
      'International Bank of Azerbaijan OJSC is the largest bank in Azerbaijan, offering a wide range of financial services to both individuals and corporations.',
    slug: 'international-bank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '8': {
    id: 8,
    name: 'Bank of Baku OJSC',
    symbol: 'Baku',
    category: 'bank',
    description:
      'Bank of Baku OJSC is a leading financial institution in Azerbaijan, known for its retail banking services, including credit cards and consumer loans.',
    slug: 'bank-of-baku',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '9': {
    id: 9,
    name: 'Baku Insurance OJSC',
    symbol: 'BakuInsurance',
    category: 'insurance',
    description:
      'Baku Insurance OJSC provides a wide range of insurance products, including life, health, and property insurance, to individuals and businesses in Azerbaijan.',
    slug: 'baku-insurance',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '10': {
    id: 10,
    name: 'Expressbank OJSC',
    symbol: 'Expressbank',
    category: 'bank',
    description:
      'Expressbank OJSC is a dynamic bank in Azerbaijan offering innovative banking services such as online banking, loans, and deposits.',
    slug: 'expressbank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '11': {
    id: 11,
    name: 'Unicapital OJSC',
    symbol: 'Unicapital',
    category: 'investment',
    description:
      'Unicapital OJSC is an investment company in Azerbaijan that provides financial services, including investment management and advisory services.',
    slug: 'unicapital',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '12': {
    id: 12,
    name: 'Plato Capital & Co. Investment Company OJSC',
    symbol: 'Plato',
    category: 'investment',
    description:
      'Plato Capital & Co. Investment Company OJSC offers investment management services, focusing on creating value through strategic investments in Azerbaijan.',
    slug: 'plato-capital',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '13': {
    id: 13,
    name: 'Azer Turk Bank OJSC',
    symbol: 'AzerTurk',
    category: 'bank',
    description:
      'Azer Turk Bank OJSC is a state-owned bank in Azerbaijan that offers a wide range of financial services, including retail and corporate banking.',
    slug: 'azer-turk-bank',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '14': {
    id: 14,
    name: 'Zayam Technologies Park',
    symbol: 'Zayam',
    category: 'technology',
    description:
      'Zayam Technologies Park is a technology park in Azerbaijan that supports innovation and development in the tech sector, offering services to startups and established companies.',
    slug: 'zayam-tech',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '15': {
    id: 15,
    name: 'CPM INVEST ASC',
    symbol: 'CPM',
    category: 'investment',
    description:
      'CPM INVEST ASC is an investment company providing comprehensive investment solutions and advisory services in Azerbaijan.',
    slug: 'cpm-invest',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '16': {
    id: 16,
    name: 'Agrarian Innovation and Supply Company OJSC',
    symbol: 'Agrarian',
    category: 'agriculture',
    description:
      'Agrarian Innovation and Supply Company OJSC is involved in the supply of innovative agricultural products and technologies in Azerbaijan, aiming to modernize the agricultural sector.',
    slug: 'agrarian-innovation',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '17': {
    id: 17,
    name: 'GL OJSC',
    symbol: 'GL',
    category: 'construction',
    description:
      'GL OJSC is a construction company in Azerbaijan involved in major infrastructure and residential projects across the country.',
    slug: 'gl-ojsc',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '18': {
    id: 18,
    name: 'NBCO INTERNATIONAL OJSC',
    symbol: 'NBCO',
    category: 'finance',
    description:
      'NBCO INTERNATIONAL OJSC provides non-banking credit services in Azerbaijan, focusing on microfinance and small business loans.',
    slug: 'nbco-international',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '19': {
    id: 19,
    name: 'A+CO OJSC',
    symbol: 'A+CO',
    category: 'manufacturing',
    description:
      'A+CO OJSC is a manufacturing company in Azerbaijan, producing a wide range of consumer goods and industrial products.',
    slug: 'a-co-ojsc',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '20': {
    id: 20,
    name: 'FINOKO BOKT OJSC',
    symbol: 'FINOKO',
    category: 'finance',
    description:
      'FINOKO BOKT OJSC offers non-banking credit services and microfinance solutions to individuals and small businesses in Azerbaijan.',
    slug: 'finoko-bokt',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '21': {
    id: 21,
    name: 'Merano-Baku OJSC',
    symbol: 'Merano',
    category: 'real estate',
    description:
      'Merano-Baku OJSC is a real estate development company in Azerbaijan, involved in high-end residential and commercial projects.',
    slug: 'merano-baku',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '22': {
    id: 22,
    name: 'Bank Respublika OJSC',
    symbol: 'Respublika',
    category: 'bank',
    description:
      'Bank Respublika OJSC is a leading bank in Azerbaijan offering a wide range of financial services, including loans, deposits, and payment solutions.',
    slug: 'bank-respublika',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '23': {
    id: 23,
    name: 'Konstromat OJSC',
    symbol: 'Konstromat',
    category: 'construction',
    description:
      'Konstromat OJSC is a construction and engineering company in Azerbaijan, specializing in large-scale infrastructure projects.',
    slug: 'konstromat',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '24': {
    id: 24,
    name: 'Kredit Evi OJSC',
    symbol: 'KreditEvi',
    category: 'finance',
    description:
      'Kredit Evi OJSC provides microfinance services in Azerbaijan, focusing on personal and small business loans.',
    slug: 'kredit-evi',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '25': {
    id: 25,
    name: 'Legion Financial OJSC',
    symbol: 'Legion',
    category: 'finance',
    description:
      'Legion Financial OJSC is a financial services company in Azerbaijan offering a range of investment and credit solutions.',
    slug: 'legion-financial',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '26': {
    id: 26,
    name: 'Assist Finance Investment OJSC',
    symbol: 'AssistFinance',
    category: 'finance',
    description:
      'Assist Finance Investment OJSC offers investment and financial advisory services in Azerbaijan, catering to both individuals and corporations.',
    slug: 'assist-finance',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
  '27': {
    id: 27,
    name: 'Boa Agency OJSC',
    symbol: 'Boa',
    category: 'advertising',
    description:
      'Boa Agency OJSC is an advertising and marketing agency in Azerbaijan, providing a range of services including digital marketing, branding, and public relations.',
    slug: 'boa-agency',
    logo: 'https://w7.pngwing.com/pngs/554/850/png-transparent-azerbaijan-grand-prix-emoji-flag-of-azerbaijan-emoji-flag-rectangle-logo-thumbnail.png',
  },
};

