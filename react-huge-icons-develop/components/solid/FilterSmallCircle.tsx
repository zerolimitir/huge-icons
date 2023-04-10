import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterSmallCircle = (
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
            d='M13.855 6.75a2 2 0 0 1-3.71 0H3a.75.75 0 0 1 0-1.5h7.145a2 2 0 0 1 3.71 0H21a.75.75 0 0 1 0 1.5h-7.145ZM2.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM17 10a2 2 0 0 1 1.855 1.25H21a.75.75 0 0 1 0 1.5h-2.145A2 2 0 1 1 17 10Zm-5 7.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8ZM2.25 18a.75.75 0 0 1 .75-.75h3.145a2 2 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterSmallCircle);
export default ForwardRef;
