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
            fill='currentColor'
            d='M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M3.866 11.5 10.5 7.67l3-1.732 2.132-1.23a1 1 0 0 1 .758-.1l2.732.731a1 1 0 0 1 .707 1.225l-.732 2.732a1 1 0 0 1-.466.607L13.5 12.866l-3 1.732-3.634 2.098A1 1 0 0 1 5.5 16.33l-2-3.464a1 1 0 0 1 .366-1.366Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostTop);
export default ForwardRef;
