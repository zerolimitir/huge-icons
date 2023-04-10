import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularTwoLocks = (
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
            d='M11 2.75A2.25 2.25 0 0 0 8.75 5v1a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18 6H6a4 4 0 0 0-4 4s1.196 1.03 4.054 1.787c.265.07.528-.1.677-.33a1.499 1.499 0 0 1 2.758.817c0 .075.056.137.13.145.732.074 1.523.125 2.376.145.832.02 1.605 0 2.322-.049a.199.199 0 0 0 .184-.198v-.043a1.5 1.5 0 0 1 2.808-.735c.144.255.42.454.703.378C20.82 11.155 22 10 22 10a4 4 0 0 0-4-4Z'
        />
        <rect width={1.5} height={2.794} x={7.239} y={11.573} fill='currentColor' rx={0.75} />
        <rect width={1.5} height={2.794} x={15.251} y={11.573} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularTwoLocks);
export default ForwardRef;
