'use client';

import { MembersTable } from '@/components/tables/members-table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { MembershipType } from '@/types/types';
import { Title, Text } from '@tremor/react';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import Link from 'next/link';
import { useContext } from 'react';

export default function MembersPage({
  members
}: {
  members: MembershipType[];
}) {
  const { membership } = useContext(MembershipContext);

  const onAttend = async (holder: string) => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'attended',
      args: [holder]
    });

    const { hash } = await writeContract(config);
  };

  const onIncrease = async (holder: string) => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'increasePoints',
      args: [holder, 1]
    });

    const { hash } = await writeContract(config);
  };

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <Title>Members</Title>
          <Text>A list of all swissDAO Members</Text>
        </div>
        {(membership?.tokenID || 0) === 0 && (
          <Button>
            <Link href="/join">Get Membership</Link>
          </Button>
        )}
      </div>
      <Card className="mt-6 p-6">
        <MembersTable
          members={members}
          onAttend={onAttend}
          onIncrease={onIncrease}
        />
      </Card>
    </main>
  );
}
