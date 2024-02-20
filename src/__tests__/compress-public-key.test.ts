import {compressPublicKey} from '../compress-public-key';

describe('compressPublicKet', () => {
  test('even', () => {
    expect(
      compressPublicKey(
        '0x04125c96f2869219cf4f6456ded4ea9528b7d5e7f6ceac2de5a1246de423544e54407acda77ca8d4244b3fdfa442a773ca2764c64f0a76d8b4dfbad43d5af72910',
      ),
    ).toBe(
      '02125c96f2869219cf4f6456ded4ea9528b7d5e7f6ceac2de5a1246de423544e54',
    );
  });

  test('odd', () => {
    expect(
      compressPublicKey(
        '0x0425e81c35ca075d3e496e23c9713cace6e0df8e8b1b1e010b433c41bbfc38d9eabbc646a699e0fbc26a90bd0a1ac28e4908d0129088329a16d7fc6bb0d25e0209',
      ),
    ).toBe(
      '0325e81c35ca075d3e496e23c9713cace6e0df8e8b1b1e010b433c41bbfc38d9ea',
    );
  });
});
