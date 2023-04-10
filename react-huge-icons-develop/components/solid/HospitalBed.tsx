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
            fillRule='evenodd'
            d='M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6-2.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.75 9a.75.75 0 0 0-1.5 0v13a.75.75 0 0 0 1.5 0v-3.25H20.5V22a.75.75 0 0 0 1.5 0v-6a2 2 0 0 0-2-2H10v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H2.75V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalBed);
export default ForwardRef;
