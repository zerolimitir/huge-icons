import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProfit = (
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
            d='M20.114 15.281a.75.75 0 0 0-1.39-.562l1.39.562ZM3.886 8.72a.75.75 0 0 0 1.39.562l-1.39-.562ZM20.75 12A8.75 8.75 0 0 0 12 3.25v1.5A7.25 7.25 0 0 1 19.25 12h1.5Zm-17.5 0A8.75 8.75 0 0 0 12 20.75v-1.5A7.25 7.25 0 0 1 4.75 12h-1.5ZM12 20.75a8.753 8.753 0 0 0 8.114-5.469l-1.39-.562A7.253 7.253 0 0 1 12 19.25v1.5Zm0-17.5a8.753 8.753 0 0 0-8.114 5.469l1.39.562A7.253 7.253 0 0 1 12 4.75v-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M14 10a2 2 0 1 0-2 2m0 0a2 2 0 1 1-2 2'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 6.5V8m0 8v1.5m6-6.5.894.447a2 2 0 0 0 2.095-.189L22 10.5M2 13l.894-.447a2 2 0 0 1 2.095.189L6 13.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfit);
export default ForwardRef;
