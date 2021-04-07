export const setupNetwork = async () => {
  const provider = (window as Window).ethereum
  if (provider && provider.request) {
    const chainId = 100
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'xDai',
            nativeCurrency: {
              name: 'xDai',
              symbol: 'xDai',
              decimals: 18
            },
            rpcUrls: [process.env.REACT_APP_NETWORK_URL],
            blockExplorerUrls: ['https://blockscout.com/xdai/mainnet']
          }
        ]
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the xDai network on metamask because window.ethereum is undefined")
    return false
  }
}
