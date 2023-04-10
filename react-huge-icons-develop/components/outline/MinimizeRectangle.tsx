import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinimizeRectangle = (
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
            fill='currentColor'
            d='M10.75 8a.75.75 0 0 0-1.5 0h1.5ZM10 14h-.75c0 .414.336.75.75.75V14Zm6 .75a.75.75 0 0 0 0-1.5v1.5Zm5.53-11.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM9.25 8v6h1.5V8h-1.5Zm.75 6.75h6v-1.5h-6v1.5Zm.53-.22 11-11-1.06-1.06-11 11 1.06 1.06Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangle);
export default ForwardRef;
