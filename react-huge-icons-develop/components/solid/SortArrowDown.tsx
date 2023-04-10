import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortArrowDown = (
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
            d='M6 18.75c.05 0 .099-.005.146-.014a2.737 2.737 0 0 0 1.91-.92l1.505-1.693a.75.75 0 1 0-1.122-.996L6.934 16.82a1.26 1.26 0 0 1-.184.17V6a.75.75 0 0 0-1.5 0v10.99a1.26 1.26 0 0 1-.184-.17L3.56 15.127a.75.75 0 0 0-1.122.996l1.506 1.694a2.736 2.736 0 0 0 1.909.919.75.75 0 0 0 .146.014Zm6-13.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM11.25 18a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowDown);
export default ForwardRef;
