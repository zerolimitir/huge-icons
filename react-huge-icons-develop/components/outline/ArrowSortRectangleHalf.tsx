import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowSortRectangleHalf = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
        />
        <path
            fill='currentColor'
            d='M7.47 9.47a.75.75 0 1 0 1.06 1.06L7.47 9.47ZM10 8h.75a.75.75 0 0 0-1.28-.53L10 8Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5Zm-.72-5.47 2-2-1.06-1.06-2 2 1.06 1.06ZM9.25 8v8h1.5V8h-1.5Zm7.28 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM14 16h-.75a.75.75 0 0 0 1.28.53L14 16Zm.75-8a.75.75 0 0 0-1.5 0h1.5Zm.72 5.47-2 2 1.06 1.06 2-2-1.06-1.06ZM14.75 16V8h-1.5v8h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowSortRectangleHalf);
export default ForwardRef;
