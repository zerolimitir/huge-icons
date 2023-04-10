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
            fillRule='evenodd'
            d='M15.225 8.607C16.055 7.56 17 6.123 17 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM14 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 22c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.75-6.5a.75.75 0 0 0-1.5 0v2A3.75 3.75 0 0 0 17 16.75h1a2.25 2.25 0 0 1 0 4.5h-8a.75.75 0 0 0 0 1.5h8a3.75 3.75 0 1 0 0-7.5h-1A2.25 2.25 0 0 1 14.75 13v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestination);
export default ForwardRef;
