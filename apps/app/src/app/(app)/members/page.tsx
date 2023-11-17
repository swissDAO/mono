'use client';

import { NOTION_CLIENT } from '@/api/client';
import { MembersTable } from '@/components/tables/members-table';
import { Button } from '@/components/ui/button';
import { CONTRACT } from '@/contracts/contracts';
import { MemberType } from '@/types/types';
import { Card, Text, Title } from '@tremor/react';
import Link from 'next/link';
import { useContractRead } from 'wagmi';

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  //return res.json()

  return await NOTION_CLIENT.users.list({ auth: undefined });
}

export default function MembersPage() {
  const {
    data: members,
    isError,
    isLoading,
  } = useContractRead({ ...CONTRACT, functionName: 'getAllMembers' });

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <Title>Members</Title>
          <Text>A list of all swissDAO Members</Text>
        </div>
        <Button>
          <Link href="/join">Get Membership</Link>
        </Button>
      </div>
      <Card className="mt-6">
        <MembersTable members={members as MemberType[]} />
      </Card>
    </main>
  );
}
