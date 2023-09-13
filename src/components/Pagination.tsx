import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '@/utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="flex justify-between text-sm">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>Prev</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="ml-auto text-right">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>Next</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
