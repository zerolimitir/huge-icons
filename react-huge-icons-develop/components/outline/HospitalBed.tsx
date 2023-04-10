import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHospitalBed = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M19 4.5v4m-3-4v4m3-2h-3M2 9v9m0 4v-4m0 0h20v4m-2-8H2v4h20v-2a2 2 0 0 0-2-2ZM5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalBed);
export default ForwardRef;
