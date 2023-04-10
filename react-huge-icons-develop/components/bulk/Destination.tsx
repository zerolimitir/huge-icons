import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestination = (
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
            d='M10 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M7.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.225 8.607C16.055 7.56 17 6.123 17 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM14 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 5.25a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 0 17 15.25h1a3.75 3.75 0 1 1 0 7.5h-7a.75.75 0 0 1 0-1.5h7a2.25 2.25 0 0 0 0-4.5h-1A3.75 3.75 0 0 1 13.25 13v-1a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestination);
export default ForwardRef;
