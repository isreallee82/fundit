import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { useWeb3React } from '@web3-react/core'

export const WalletConnect = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/764ef7db11084cccb954721ea3cffe5f" },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: 'Web3-react Demo',
  supportedChainIds: [1, 3, 4, 5, 42, 0x63564c40],
})

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 5001, 0x63564c40],
})

export const connectors = {
  Injected: Injected,
  WalletConnect: WalletConnect,
  CoinbaseWallet: CoinbaseWallet,
}
