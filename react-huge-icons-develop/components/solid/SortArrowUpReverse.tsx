import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortArrowUpReverse = (
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
            d='M6 5.25c.05 0 .099.005.146.014a2.737 2.737 0 0 1 1.91.92L9.56 7.876a.75.75 0 1 1-1.122.996L6.934 7.18a1.26 1.26 0 0 0-.184-.17V18a.75.75 0 0 1-1.5 0V7.01a1.26 1.26 0 0 0-.184.17L3.56 8.873a.75.75 0 1 1-1.122-.996l1.506-1.694a2.737 2.737 0 0 1 1.909-.919A.754.754 0 0 1 6 5.25Zm5.25.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5h-6Zm0 6a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5h-9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowUpReverse);
export default ForwardRef;
