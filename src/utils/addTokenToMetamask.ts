import { Token } from 'uniswap-xdai-sdk'
import tokenList from '@1hive/default-token-list'

export async function addTokenToMetamask(ethereum: any, token: Token) {
  const selectedToken = tokenList.tokens.find(t => {
    return t.address === token.address
  })
  const IMAGE_URL = selectedToken && selectedToken.logoURI
  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token.address,
          symbol: token.symbol ? token.symbol : '',
          decimals: token.decimals,
          image: IMAGE_URL
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}
