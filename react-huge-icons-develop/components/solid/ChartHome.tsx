import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartHome = (
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
            d='M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM9.75 13.5a.75.75 0 0 1 1.5 0v3a2.25 2.25 0 0 0 4.5 0V16a.25.25 0 0 1 .25-.25h1a.75.75 0 0 0 0-1.5h-1A1.75 1.75 0 0 0 14.25 16v.5a.75.75 0 0 1-1.5 0v-3a2.25 2.25 0 0 0-4.5 0v.5a.25.25 0 0 1-.25.25H7a.75.75 0 0 0 0 1.5h1A1.75 1.75 0 0 0 9.75 14v-.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartHome);
export default ForwardRef;
