import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostRight = (
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
            d='M13.5 4.51V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2.314m3-.804 2.218-.595a1 1 0 0 1 .852.16l1.547 1.14a1 1 0 0 1 .323 1.206l-.77 1.76a1 1 0 0 1-.658.564l-3.512.941m0-5.176-3 .804m0 0L5.557 6.638a1 1 0 0 0-.707 1.225l.777 2.898a1 1 0 0 0 1.224.707l3.649-.978m3-.804-3 .804m3-.804V14m-3-3.51V14m3 0h3.02a1 1 0 0 1 .78.375l1.2 1.5a1 1 0 0 1 0 1.25l-1.2 1.5a1 1 0 0 1-.78.375H13.5m0-5h-3m0 0H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4.5m3 0v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2m3 0h-3'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostRight);
export default ForwardRef;
