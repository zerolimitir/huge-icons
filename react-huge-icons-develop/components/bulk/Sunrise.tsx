import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSunrise = (
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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 10a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z'
            opacity={0.4}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m19.778 8.222-1.414 1.414M4.222 8.222l1.414 1.414'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9.47 3.47a.75.75 0 0 0 1.06 1.06L9.47 3.47Zm4 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 7a.75.75 0 0 0 1.5 0h-1.5Zm1.5-4a.75.75 0 0 0-1.5 0h1.5Zm-1.987-.823L9.47 3.47l1.06 1.06 1.293-1.293-1.06-1.06Zm1.414 1.06L13.47 4.53l1.06-1.06-1.293-1.293-1.06 1.06ZM12.75 7V3h-1.5v4h1.5Zm-.927-3.763a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M4 16h16'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M6 19h12'
            opacity={0.4}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M9 22h6' />
    </svg>
);
const ForwardRef = forwardRef(SvgSunrise);
export default ForwardRef;
