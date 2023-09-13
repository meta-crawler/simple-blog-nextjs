import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }

        .content :global(p) {
          @apply my-6;
        }

        .content :global(ul) {
          @apply my-6;
        }

        .content :global(h2) {
          @apply my-4 text-2xl font-semibold text-gray-700;
        }

        .content :global(h3) {
          @apply my-4 text-xl font-semibold text-gray-700;
        }
      `}
    </style>
  </div>
);

export { Content };
