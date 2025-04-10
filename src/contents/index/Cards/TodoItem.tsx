import clsx from 'clsx';
import { CalendarIcon } from '@/components/Icons';

export type TodoItemState =
  | 'Layout & Structure'
  | 'Visual Hierarchy'
  | 'Accessible Color Systems'
  | 'Design Enhancements';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
}

const contentByState: Record<TodoItemState, {
  title: string;
  description: string;
  date: string;
  tag1: string;
  tag2: string;
}> = {
  'Layout & Structure': {
    title: 'Optimize Page Layout',
    description: 'Ensure content is organized in a clear and consistent layout.',
    date: '2:00 PM · Today',
    tag1: 'UX',
    tag2: 'Structure',
  },
  'Visual Hierarchy': {
    title: 'Improve Visual Flow',
    description: 'Adjust font sizes and spacing to guide user attention effectively.',
    date: '11:30 AM · Tomorrow',
    tag1: 'Design',
    tag2: 'Hierarchy',
  },
  'Accessible Color Systems': {
    title: 'Enhance Color Contrast',
    description: 'Ensure all text and elements meet accessibility contrast ratios.',
    date: '9:00 AM · Next Week',
    tag1: 'A11y',
    tag2: 'Color',
  },
  'Design Enhancements': {
    title: 'Refine UI Components',
    description: 'Polish component styles and animations for better interaction.',
    date: '4:00 PM · Friday',
    tag1: 'UI',
    tag2: 'Enhancements',
  },
};

function CleanIntuitive({ state, title, description, date, tag1, tag2 }: TodoItemProps) {
  const activeState = state.find((s) => contentByState[s]);
  const content = activeState ? contentByState[activeState] : contentByState['Layout & Structure'];

  const finalTitle = title || content.title;
  const finalDescription = description || content.description;
  const finalDate = date || content.date;
  const finalTag1 = tag1 || content.tag1;
  const finalTag2 = tag2 || content.tag2;

  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        state.includes('Design Enhancements') && ['rounded-xl'],
        state.includes('Layout & Structure') && [''],
        state.includes('Visual Hierarchy') ? ['text-sm'] : ['font-serif'],
        state.includes('Accessible Color Systems')
          ? [
              'border-divider-light bg-white',
              'dark:border-divider-dark dark:bg-slate-900',
            ]
          : ['border-black bg-white', 'dark:border-white dark:bg-[#050914]']
      )}
      role="presentation"
    >
      <div
        className={clsx(
          'flex items-center',
          state.includes('Layout & Structure') && ['mb-4 justify-between']
        )}
      >
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              state.includes('Design Enhancements') && ['rounded-full'],
              state.includes('Layout & Structure') && [''],
              state.includes('Visual Hierarchy') && ['font-bold'],
              state.includes('Accessible Color Systems')
                ? ['border-white bg-sky-400 text-white']
                : [
                    'border-white bg-[#050914] text-white',
                    'dark:bg-white dark:text-black',
                  ]
            )}
          >
            E
          </div>
        </div>
        <div
          className={clsx(
            state.includes('Design Enhancements') && ['rounded-full'],
            state.includes('Layout & Structure') && ['px-2 py-0.5'],
            state.includes('Visual Hierarchy') && ['text-xs font-bold'],
            state.includes('Accessible Color Systems')
              ? [
                  'bg-red-100 text-red-800',
                  'dark:bg-red-500/20 dark:text-red-300',
                ]
              : ['bg-[#ff0000] text-white']
          )}
        >
          High
        </div>
      </div>
      <div
        className={clsx(
          state.includes('Layout & Structure') && ['mb-1'],
          state.includes('Visual Hierarchy') && ['text-lg font-bold'],
          state.includes('Accessible Color Systems')
            ? ['text-slate-700', 'dark:text-slate-300']
            : ['text-black', 'dark:text-white']
        )}
      >
        {finalTitle}
      </div>
      <div
        className={clsx(
          state.includes('Layout & Structure') && ['mb-4'],
          state.includes('Visual Hierarchy') && [''],
          state.includes('Accessible Color Systems')
            ? ['text-slate-600', 'dark:text-slate-400']
            : ['text-black', 'dark:text-white']
        )}
      >
        {finalDescription}
      </div>
      <div
        className={clsx(
          'flex',
          state.includes('Layout & Structure') && ['mb-6 gap-2'],
          state.includes('Visual Hierarchy') && ['text-xs font-bold'],
          state.includes('Accessible Color Systems') && ['']
        )}
      >
        <div
          className={clsx(
            state.includes('Design Enhancements') && ['rounded-full'],
            state.includes('Layout & Structure') && ['px-2 py-0.5'],
            state.includes('Visual Hierarchy') && [''],
            state.includes('Accessible Color Systems')
              ? [
                  'bg-blue-100 text-blue-700',
                  'dark:bg-blue-500/20 dark:text-blue-300',
                ]
              : ['bg-[#0000ff] text-white']
          )}
        >
          {finalTag1}
        </div>
        <div
          className={clsx(
            state.includes('Design Enhancements') && ['rounded-full'],
            state.includes('Layout & Structure') && ['px-2 py-0.5'],
            state.includes('Visual Hierarchy') && [''],
            state.includes('Accessible Color Systems')
              ? [
                  'bg-yellow-100 text-yellow-700',
                  'dark:bg-yellow-500/20 dark:text-yellow-300',
                ]
              : ['bg-[#ffff00] text-black']
          )}
        >
          {finalTag2}
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('Layout & Structure') && ['gap-1'],
          state.includes('Visual Hierarchy') && ['text-xs font-medium'],
          state.includes('Accessible Color Systems') && ['']
        )}
      >
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('Layout & Structure') && ['-mt-1'],
            state.includes('Visual Hierarchy') && [''],
            state.includes('Accessible Color Systems')
              ? ['text-slate-400', 'dark:text-slate-600']
              : ['h-4 w-4 text-black', 'dark:text-white']
          )}
        />
        <div
          className={clsx(
            state.includes('Layout & Structure') && [''],
            state.includes('Visual Hierarchy') && [''],
            state.includes('Accessible Color Systems')
              ? ['text-slate-600', 'dark:text-slate-400']
              : ['text-black', 'dark:text-white']
          )}
        >
          {finalDate}
        </div>
      </div>
    </div>
  );
}

export default CleanIntuitive;
