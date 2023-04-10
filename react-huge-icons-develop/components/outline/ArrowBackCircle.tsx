import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowBackCircle = (
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
        <circle cx={12} cy={12} r={10} stroke='currentColor' strokeWidth={1.5} />
        <path
            fill='currentColor'
            d='M9.47 6.47a.75.75 0 1 1 1.06 1.06L9.47 6.47ZM8 9l-.53.53a.75.75 0 0 1 0-1.06L8 9Zm2.53 1.47a.75.75 0 1 1-1.06 1.06l1.06-1.06ZM8 15.75a.75.75 0 0 1 0-1.5v1.5Zm2.53-8.22-2 2-1.06-1.06 2-2 1.06 1.06Zm-2 .94 2 2-1.06 1.06-2-2 1.06-1.06ZM8 8.25h5v1.5H8v-1.5Zm5 7.5H8v-1.5h5v1.5ZM16.75 12A3.75 3.75 0 0 1 13 15.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5ZM13 8.25A3.75 3.75 0 0 1 16.75 12h-1.5A2.25 2.25 0 0 0 13 9.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBackCircle);
export default ForwardRef;
