import { ExpoRequest, ExpoResponse } from 'expo-router/server';

export async function GET(request: ExpoRequest) {
  // const response = await fetch(
  //   `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2024-01-01&interval=1d`
  // );

  // const res = await response.json();
  // return ExpoResponse.json(res.data);
  return ExpoResponse.json(data);
}

const data = [
  {"timestamp": "2024-01-01T00:00:00Z", "price": 326.08, "volume_24h": 12058361624, "market_cap": 839292148428},
  {"timestamp": "2024-01-02T00:00:00Z", "price": 296.66, "volume_24h": 26322994437, "market_cap": 887025221780},
  {"timestamp": "2024-01-03T00:00:00Z", "price": 302.37, "volume_24h": 29942388903, "market_cap": 861431009601},
  {"timestamp": "2024-01-04T00:00:00Z", "price": 325.90, "volume_24h": 29754873104, "market_cap": 852771850034},
  {"timestamp": "2024-01-05T00:00:00Z", "price": 319.87, "volume_24h": 24271454099, "market_cap": 858879240517},
  {"timestamp": "2024-01-06T00:00:00Z", "price": 313.64, "volume_24h": 18248808441, "market_cap": 860227941216},
  {"timestamp": "2024-01-07T00:00:00Z", "price": 325.99, "volume_24h": 11455711529, "market_cap": 864729684233},
  {"timestamp": "2024-01-08T00:00:00Z", "price": 311.21, "volume_24h": 21758384796, "market_cap": 879675185474},
  {"timestamp": "2024-01-09T00:00:00Z", "price": 324.78, "volume_24h": 34144879041, "market_cap": 914736088666},
  {"timestamp": "2024-01-10T00:00:00Z", "price": 283.87, "volume_24h": 31770588758, "market_cap": 898478024808},
  {"timestamp": "2024-01-21T00:00:00Z", "price": 308.17, "volume_24h": 6685208959, "market_cap": 818477388802},
    {"timestamp": "2024-01-22T00:00:00Z", "price": 276.05, "volume_24h": 12974348357, "market_cap": 799398998012},
    {"timestamp": "2024-01-23T00:00:00Z", "price": 302.70, "volume_24h": 22098758345, "market_cap": 773465605710},
    {"timestamp": "2024-01-24T00:00:00Z", "price": 307.42, "volume_24h": 21321888504, "market_cap": 783142014099},
    {"timestamp": "2024-01-25T00:00:00Z", "price": 310.91, "volume_24h": 16924638069, "market_cap": 783791225090},
    {"timestamp": "2024-01-26T00:00:00Z", "price": 274.44, "volume_24h": 18194723196, "market_cap": 803055378306},
    {"timestamp": "2024-01-27T00:00:00Z", "price": 293.62, "volume_24h": 17251853011, "market_cap": 820534883639},
    {"timestamp": "2024-01-28T00:00:00Z", "price": 293.21, "volume_24h": 12087864476, "market_cap": 828568727732},
    {"timestamp": "2024-01-29T00:00:00Z", "price": 303.87, "volume_24h": 14196966845, "market_cap": 833202137696},
    {"timestamp": "2024-01-30T00:00:00Z", "price": 297.20, "volume_24h": 19892943249, "market_cap": 851749640553},
    {"timestamp": "2024-01-31T00:00:00Z", "price": 320.34, "volume_24h": 20269377121, "market_cap": 842077065885},
    {"timestamp": "2024-02-01T00:00:00Z", "price": 272.63, "volume_24h": 21095877892, "market_cap": 832902642750},
    {"timestamp": "2024-02-02T00:00:00Z", "price": 274.45, "volume_24h": 17004038259, "market_cap": 844956366996},
    {"timestamp": "2024-02-03T00:00:00Z", "price": 295.83, "volume_24h": 11943154537, "market_cap": 845877384607},
    {"timestamp": "2024-02-04T00:00:00Z", "price": 296.67, "volume_24h": 7935435046, "market_cap": 842162939955},
    {"timestamp": "2024-02-05T00:00:00Z", "price": 327.88, "volume_24h": 13126499866, "market_cap": 839725812678},
    {"timestamp": "2024-02-06T00:00:00Z", "price": 308.47, "volume_24h": 15510434059, "market_cap": 842772455302},
    {"timestamp": "2024-02-07T00:00:00Z", "price": 291.46, "volume_24h": 15112954527, "market_cap": 848956449785},
    {"timestamp": "2024-02-08T00:00:00Z", "price": 290.37, "volume_24h": 22684941210, "market_cap": 880646467456},
    {"timestamp": "2024-02-09T00:00:00Z", "price": 312.72, "volume_24h": 28424692985, "market_cap": 917754539372},
      {"timestamp": "2024-02-10T00:00:00Z", "price": 291.61, "volume_24h": 25293454828, "market_cap": 929497130649},
      {"timestamp": "2024-02-11T00:00:00Z", "price": 280.00, "volume_24h": 16793665536, "market_cap": 944944706107},
      {"timestamp": "2024-02-12T00:00:00Z", "price": 276.65, "volume_24h": 21781976970, "market_cap": 957302696346},
      {"timestamp": "2024-02-13T00:00:00Z", "price": 288.56, "volume_24h": 30917159837, "market_cap": 974220708841},
      {"timestamp": "2024-02-14T00:00:00Z", "price": 292.80, "volume_24h": 28645209724, "market_cap": 998235637168},
      {"timestamp": "2024-02-15T00:00:00Z", "price": 329.58, "volume_24h": 31385312931, "market_cap": 1022575737668},
      {"timestamp": "2024-02-16T00:00:00Z", "price": 277.41, "volume_24h": 28292856358, "market_cap": 1021828804743},
      {"timestamp": "2024-02-17T00:00:00Z", "price": 323.88, "volume_24h": 18506511430, "market_cap": 1013501646162},
      {"timestamp": "2024-02-18T00:00:00Z", "price": 317.62, "volume_24h": 15933733925, "market_cap": 1016512308288},
      {"timestamp": "2024-02-19T00:00:00Z", "price": 294.55, "volume_24h": 17189537561, "market_cap": 1023917687978},
      
        {"timestamp": "2024-02-10T00:00:00Z", "price": 291.61, "volume_24h": 25293454828, "market_cap": 929497130649},
        {"timestamp": "2024-02-11T00:00:00Z", "price": 280.00, "volume_24h": 16793665536, "market_cap": 944944706107},
        {"timestamp": "2024-02-12T00:00:00Z", "price": 276.65, "volume_24h": 21781976970, "market_cap": 957302696346},
        {"timestamp": "2024-02-13T00:00:00Z", "price": 288.56, "volume_24h": 30917159837, "market_cap": 974220708841},
        {"timestamp": "2024-02-14T00:00:00Z", "price": 292.80, "volume_24h": 28645209724, "market_cap": 998235637168},
        {"timestamp": "2024-02-15T00:00:00Z", "price": 329.58, "volume_24h": 31385312931, "market_cap": 1022575737668},
        {"timestamp": "2024-02-16T00:00:00Z", "price": 277.41, "volume_24h": 28292856358, "market_cap": 1021828804743},
        {"timestamp": "2024-02-17T00:00:00Z", "price": 323.88, "volume_24h": 18506511430, "market_cap": 1013501646162},
        {"timestamp": "2024-02-18T00:00:00Z", "price": 317.62, "volume_24h": 15933733925, "market_cap": 1016512308288},
        {"timestamp": "2024-02-19T00:00:00Z", "price": 294.55, "volume_24h": 17189537561, "market_cap": 1023917687978},
        
          {"timestamp": "2024-02-20T00:00:00Z", "price": 272.59, "volume_24h": 23465686169, "market_cap": 1019308399023},
          {"timestamp": "2024-02-21T00:00:00Z", "price": 285.85, "volume_24h": 27704601251, "market_cap": 1011508294877},
          {"timestamp": "2024-02-22T00:00:00Z", "price": 329.82, "volume_24h": 25079609089, "market_cap": 1013272679613},
          {"timestamp": "2024-02-23T00:00:00Z", "price": 292.96, "volume_24h": 20956829269, "market_cap": 1003871577747},
          {"timestamp": "2024-02-24T00:00:00Z", "price": 317.39, "volume_24h": 15246612933, "market_cap": 1005580456875},
          {"timestamp": "2024-02-25T00:00:00Z", "price": 316.53, "volume_24h": 11667250313, "market_cap": 1015193405672},
          {"timestamp": "2024-02-26T00:00:00Z", "price": 295.47, "volume_24h": 17510163637, "market_cap": 1028270731889},
          {"timestamp": "2024-02-27T00:00:00Z", "price": 304.26, "volume_24h": 38475364003, "market_cap": 1109598908583},
          {"timestamp": "2024-02-28T00:00:00Z", "price": 313.96, "volume_24h": 40170552872, "market_cap": 1164697526078},
          {"timestamp": "2024-02-29T00:00:00Z", "price": 307.97, "volume_24h": 65757133115, "market_cap": 1219723680357},
          
            {"timestamp": "2024-03-01T00:00:00Z", "price": 300.84, "volume_24h": 41813422665, "market_cap": 1215917487798},
            {"timestamp": "2024-03-02T00:00:00Z", "price": 327.74, "volume_24h": 27540459281, "market_cap": 1218922657833},
            {"timestamp": "2024-03-03T00:00:00Z", "price": 328.92, "volume_24h": 16630916714, "market_cap": 1223367166324},
            {"timestamp": "2024-03-04T00:00:00Z", "price": 326.43, "volume_24h": 39816706055, "market_cap": 1284379118156},
            {"timestamp": "2024-03-05T00:00:00Z", "price": 302.45, "volume_24h": 71646839317, "market_cap": 1301136217279},
            {"timestamp": "2024-03-06T00:00:00Z", "price": 323.27, "volume_24h": 83579811918, "market_cap": 1295140803705},
            {"timestamp": "2024-03-07T00:00:00Z", "price": 317.46, "volume_24h": 49265715529, "market_cap": 1313675687104},
            {"timestamp": "2024-03-08T00:00:00Z", "price": 295.30, "volume_24h": 43090760490, "market_cap": 1331760711857},
            {"timestamp": "2024-03-09T00:00:00Z", "price": 289.78, "volume_24h": 44516079008, "market_cap": 1344280727872},
            {"timestamp": "2024-03-10T00:00:00Z", "price": 283.90, "volume_24h": 25786485181, "market_cap": 1364008786938}
        
        
      
      
    
    
  
  

];
