import { TokenStruct } from '@/contracts/contracts';
import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { ImageResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: number } }
) {
  await ETHERS_CONTRACT.ownerOf(tokenId);

  const { profileImageUri, holder } = (await ETHERS_CONTRACT.getTokenStructById(
    tokenId
  )) as TokenStruct;
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'black',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            background: 'black',
            height: 213,
            width: 349,
            border: '1px solid #868686',
            borderRadius: 16,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImageUri || 'https://picsum.photos/500'}
            alt=""
            height={100}
            width={100}
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              borderRadius: 50,
            }}
          />

          <p
            style={{
              position: 'absolute',
              top: 120,
              left: 20,
              color: 'white',
              fontSize: 24,
            }}
          >
            {'John Doe'}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 160,
              left: 260,
              color: 'white',
              fontSize: 16,
            }}
          >
            {'01/01/23'}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 160,
              left: 20,
              color: 'white',
              fontSize: 16,
            }}
          >
            {holder}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 110,
              left: 60,
              color: 'white',
              fontSize: 8,
            }}
          >
            {'150'}
          </p>
        </div>
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}
