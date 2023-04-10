import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWhistle = (
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
            d='M20 9H8a6 6 0 1 0 6 6h3.789a4 4 0 0 0 2.219-.672l1.101-.734A2 2 0 0 0 22 11.93V11a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <circle cx={8} cy={15} r={2} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.25 11V9h1.5v2a.75.75 0 0 1-1.5 0ZM14 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM8.47 4.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Zm11.06 0a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhistle);
export default ForwardRef;
