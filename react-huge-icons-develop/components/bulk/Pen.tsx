import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPen = (
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
            d='M15.32 6.545a.75.75 0 0 1 1.06 0l2.844 2.844a2.924 2.924 0 0 1 0 4.135l-1.538 1.538a.75.75 0 0 1-1.06-1.06l1.537-1.538a1.425 1.425 0 0 0 0-2.015L15.32 7.606a.75.75 0 0 1 0-1.061Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M15.96 4.538a2.476 2.476 0 0 1 3.503 3.502L8.43 19.072a4.35 4.35 0 0 1-2.101 1.163l-2.55.586a.5.5 0 0 1-.6-.599l.586-2.55a4.35 4.35 0 0 1 1.163-2.102L15.961 4.538Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21.53 2.47a.75.75 0 0 1 0 1.06l-2.537 2.538-1.06-1.06L20.47 2.47a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m3.778 20.821 2.55-.586a4.349 4.349 0 0 0 2.102-1.163l.165-.165-3.502-3.502-.165.165a4.349 4.349 0 0 0-1.163 2.101l-.586 2.55a.5.5 0 0 0 .599.6ZM19.462 8.04a2.476 2.476 0 0 0-3.501-3.502l-1.325 1.324 3.502 3.502 1.324-1.324Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPen);
export default ForwardRef;
