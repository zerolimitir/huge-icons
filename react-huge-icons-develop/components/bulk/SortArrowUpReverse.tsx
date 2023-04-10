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
            d='M11.25 18c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0-.75.75Zm0-6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75Zm0-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.146 5.264a.754.754 0 0 0-.292 0 2.737 2.737 0 0 0-1.91.92L2.44 7.876a.75.75 0 1 0 1.122.996L5.066 7.18a1.26 1.26 0 0 1 .184-.17V18a.75.75 0 0 0 1.5 0V7.01c.066.05.127.106.184.17L8.44 8.873a.75.75 0 1 0 1.122-.996L8.055 6.183a2.737 2.737 0 0 0-1.909-.919Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowUpReverse);
export default ForwardRef;
