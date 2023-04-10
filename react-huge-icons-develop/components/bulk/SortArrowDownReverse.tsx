import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortArrowDownReverse = (
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
            d='M11.25 17c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0-.75.75Zm0-6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75Zm0-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.146 17.736a.757.757 0 0 1-.292 0 2.736 2.736 0 0 1-1.91-.92L2.44 15.124a.75.75 0 0 1 1.122-.996l1.505 1.693c.057.064.118.12.184.17V5a.75.75 0 0 1 1.5 0v10.99a1.26 1.26 0 0 0 .184-.17l1.505-1.693a.75.75 0 0 1 1.122.996l-1.506 1.694a2.737 2.737 0 0 1-1.909.919Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowDownReverse);
export default ForwardRef;
