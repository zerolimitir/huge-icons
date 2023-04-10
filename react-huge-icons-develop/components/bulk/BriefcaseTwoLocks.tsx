import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTwoLocks = (
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
            d='M6 22h12a4 4 0 0 0 4-4V9.873H2V18a4 4 0 0 0 4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11 2.75A2.25 2.25 0 0 0 8.75 5v1a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 6H6a4 4 0 0 0-4 4v3h4.105a.296.296 0 0 0 .297-.296 1.5 1.5 0 1 1 3 0c0 .163.132.296.296.296h4.61a.296.296 0 0 0 .296-.296 1.5 1.5 0 1 1 3 0c0 .163.133.296.297.296H22v-3a4 4 0 0 0-4-4Z'
        />
        <rect width={1.5} height={2.794} x={15.361} y={12} fill='currentColor' rx={0.75} />
        <rect width={1.5} height={2.794} x={7.161} y={12} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTwoLocks);
export default ForwardRef;
