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
            fill='currentColor'
            d='M20.75 14H2v4h20.75v-2a2 2 0 0 0-2-2ZM22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16 3.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2 8.25a.75.75 0 0 1 .75.75v8.25H22a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-3.25H2.75V22a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 2 8.25Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalBed);
export default ForwardRef;
