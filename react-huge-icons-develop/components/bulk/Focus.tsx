import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFocus = (
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
            fillRule='evenodd'
            d='M1.25 6A4.75 4.75 0 0 1 6 1.25h1.556a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 6v1.556a.75.75 0 0 1-1.5 0V6Zm14.444-4a.75.75 0 0 1 .75-.75H18A4.75 4.75 0 0 1 22.75 6v1.556a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-1.556a.75.75 0 0 1-.75-.75ZM2 15.694a.75.75 0 0 1 .75.75V18A3.25 3.25 0 0 0 6 21.25h1.556a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-1.556a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75V18A4.75 4.75 0 0 1 18 22.75h-1.556a.75.75 0 0 1 0-1.5H18A3.25 3.25 0 0 0 21.25 18v-1.556a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <circle cx={12} cy={12} r={5} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;
