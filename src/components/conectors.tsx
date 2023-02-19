import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'

// interface WalletConnect {
//   chainId: string
//   blockExplorerUrls?: string[]
//   chainName?: string
//   iconUrls?: string[]
//   nativeCurrency?: {
//     name: string
//     symbol: string
//     decimals: number
//   }
//   rpcUrls?: string[]
// }

export const WalletConnect = new WalletConnectConnector({
  rpc: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 5001],
})
