import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeNotification = (
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
            d='M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z'
            opacity={0.4}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M11 19h2' />
        <path
            fill='currentColor'
            d='M8.667 12.333a3.333 3.333 0 1 1 6.667 0v1.234c0 .595.246 1.164.68 1.571.712.668.24 1.862-.736 1.862H8.721c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeNotification);
export default ForwardRef;
