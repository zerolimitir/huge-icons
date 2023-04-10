import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeMinus = (
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
            d='M21.25 13.111a.75.75 0 0 0 1.5 0h-1.5Zm-8.139 9.639a.75.75 0 0 0 0-1.5v1.5ZM6 2.75h12v-1.5H6v1.5ZM2.75 18V6h-1.5v12h1.5Zm18.5-12v7.111h1.5V6h-1.5Zm-8.139 15.25H6v1.5h7.111v-1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 18h-6M12 6v4m-1.5 3.5L9 15'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeMinus);
export default ForwardRef;
