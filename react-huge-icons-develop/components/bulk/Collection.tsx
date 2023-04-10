import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCollection = (
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
            d='M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4V9Z' />
        <path fill='currentColor' d='M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H6V5Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;
