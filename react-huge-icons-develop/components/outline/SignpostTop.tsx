import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostTop = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 5.938V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.67m3-1.732 2.132-1.23a1 1 0 0 1 .758-.1l2.732.731a1 1 0 0 1 .707 1.225l-.732 2.732a1 1 0 0 1-.466.607L13.5 12.866m0-6.928-3 1.732m0 0L3.866 11.5a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l3.634-2.098m0 0V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8.134m-3 1.732 3-1.732'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostTop);
export default ForwardRef;
