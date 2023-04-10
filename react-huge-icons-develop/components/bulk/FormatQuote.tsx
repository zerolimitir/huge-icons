import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatQuote = (
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
            d='M8.5 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l-1.03 2.058a1.342 1.342 0 0 0 2.4 1.2l1.419-2.836a2 2 0 0 0 .211-.894V9a2 2 0 0 0-2-2Z'
        />
        <path
            fill='currentColor'
            d='M17.5 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l-1.03 2.058a1.342 1.342 0 0 0 2.4 1.2l1.419-2.836a2 2 0 0 0 .211-.894V9a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatQuote);
export default ForwardRef;
