import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMatrix = (
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
            d='M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75Zm-6.5 0A.75.75 0 0 0 8 1.25H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h2a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V6A3.25 3.25 0 0 1 6 2.75h2A.75.75 0 0 0 8.75 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMatrix);
export default ForwardRef;
