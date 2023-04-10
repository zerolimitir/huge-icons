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
            fillRule='evenodd'
            d='M6.5 7h2a2 2 0 0 1 2 2v3.528a2 2 0 0 1-.211.894L8.87 16.258a1.342 1.342 0 0 1-2.4-1.2L7.5 13h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm9 0h2a2 2 0 0 1 2 2v3.528a2 2 0 0 1-.211.894l-1.418 2.836a1.342 1.342 0 1 1-2.4-1.2L16.5 13h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatQuote);
export default ForwardRef;
