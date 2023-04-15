import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.811 1.278a.883.883 0 0 0-.481.374c-.059.108-.072.261-.083.992l-.012.865-.488.022c-1.017.047-1.907.458-2.627 1.214C3.334 5.57 3 6.453 3 7.705v.535h18v-.535c0-1.252-.334-2.135-1.12-2.96-.72-.756-1.61-1.167-2.627-1.214l-.488-.022-.012-.865c-.015-.981-.031-1.04-.344-1.26-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.313.22-.329.279-.344 1.266l-.013.87H8.766l-.013-.87c-.012-.791-.02-.883-.095-1.009a.807.807 0 0 0-.847-.363M3.01 14.21l.012 4.45.11.378c.44 1.506 1.585 2.572 3.094 2.879.399.081.505.083 5.774.083s5.375-.002 5.774-.083c1.517-.309 2.684-1.403 3.098-2.905l.108-.392.011-4.43.011-4.43H2.998l.012 4.45'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
