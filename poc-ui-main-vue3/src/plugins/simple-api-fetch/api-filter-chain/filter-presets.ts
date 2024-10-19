import {FilterChain} from 'src/plugins/simple-api-fetch/api-filter-chain/filter-chain';

export default {
  NONE: FilterChain.Create<Response>(),
  JSON: FilterChain.Create<Response>().then(async r => await r.json()),
  TEXT: FilterChain.Create<Response>().then(async r => await r.text()),
} as const
