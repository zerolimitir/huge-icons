import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiCrooked = (
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
        <path fill='currentColor' d='M8 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' />
        <g fill='currentColor' fillRule='evenodd' clipRule='evenodd' opacity={0.4}>
            <path d='M2.25 11a.75.75 0 0 1 .75-.75h1A9.75 9.75 0 0 1 13.75 20v1a.75.75 0 0 1-1.5 0v-1A8.25 8.25 0 0 0 4 11.75H3a.75.75 0 0 1-.75-.75Z' />
            <path d='M2.25 7A.75.75 0 0 1 3 6.25h1c7.594 0 13.75 6.156 13.75 13.75v1a.75.75 0 0 1-1.5 0v-1c0-6.765-5.485-12.25-12.25-12.25H3A.75.75 0 0 1 2.25 7Z' />
            <path d='M2.25 3A.75.75 0 0 1 3 2.25h1c9.803 0 17.75 7.947 17.75 17.75v1a.75.75 0 0 1-1.5 0v-1c0-8.975-7.275-16.25-16.25-16.25H3A.75.75 0 0 1 2.25 3Z' />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgWifiCrooked);
export default ForwardRef;
