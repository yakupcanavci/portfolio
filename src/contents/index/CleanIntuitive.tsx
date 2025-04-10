import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'Visual Hierarchy',
    shows: ['Visual Hierarchy'],
    title: 'Visual Hierarchy',
    description: 'Guide attention with smart typography.',
  },
  {
    state: 'Layout & Structure',
    shows: ['Visual Hierarchy', 'Layout & Structure'],
    title: 'Layout & Structure',
    description: 'Organize elements for intuitive flow.',
  },
  {
    state: 'Accessible Color Systems',
    shows: ['Visual Hierarchy', 'Layout & Structure', 'Accessible Color Systems'],
    title: 'Accessible Color Systems',
    description: 'Enhance clarity with consistent contrast.',
  },
  {
    state: 'Design Enhancements',
    shows: ['Visual Hierarchy', 'Layout & Structure', 'Accessible Color Systems', 'Design Enhancements'],
    title: 'Design Enhancements',
    description: 'Add Design Enhancements like borders, shadows, rounded corners, etc.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Designs that Feel Right, and Work Even Better."
          caption="User Experience & Acceptance"
          description="Modern, intuitive, and purpose-driven—crafted for real users and real impact.

"
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['Visual Hierarchy', 'Layout & Structure', 'Accessible Color Systems', 'Design Enhancements']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['Visual Hierarchy', 'Layout & Structure', 'Accessible Color Systems', 'Design Enhancements']
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
