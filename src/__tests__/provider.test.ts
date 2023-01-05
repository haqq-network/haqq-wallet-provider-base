import {WalletMock} from '../__mocks__/wallet.mock';
import {Provider} from '../provider';

describe('provider', () => {
  const wallet = new WalletMock();

  test('should get eth address',() => {
    const provider = new Provider(wallet, {cosmosPrefix: 'haqq'});
    expect(provider.getEthAddress()).toBe('0x0188Fe95ae1c09300f4042448679Fbc030e7c2c8')
  })

  test('should get cosmos address',() => {
    const provider = new Provider(wallet, {cosmosPrefix: 'haqq'});
    expect(provider.getCosmosAddress()).toBe('haqq1qxy0a9dwrsynqr6qgfzgv70mcqcw0skgwwk5wl')
  })
})
