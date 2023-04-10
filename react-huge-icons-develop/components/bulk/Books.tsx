import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBooks = (
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
        <path fill='currentColor' d='M4 3h11a3 3 0 1 1 0 6H4V3Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 3A.75.75 0 0 1 2 2.25h13a3.75 3.75 0 1 1 0 7.5H2a.75.75 0 0 1 0-1.5h13a2.25 2.25 0 0 0 0-4.5H2A.75.75 0 0 1 1.25 3Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M4 15h11a3 3 0 1 1 0 6H4v-6Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 15a.75.75 0 0 1 .75-.75h13a3.75 3.75 0 1 1 0 7.5H2a.75.75 0 0 1 0-1.5h13a2.25 2.25 0 0 0 0-4.5H2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M20 9H9a3 3 0 1 0 0 6h11V9Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.75 9a.75.75 0 0 0-.75-.75H9a3.75 3.75 0 1 0 0 7.5h13a.75.75 0 0 0 0-1.5H9a2.25 2.25 0 0 1 0-4.5h13a.75.75 0 0 0 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBooks);
export default ForwardRef;
