import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTickDouble = (
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
            d='M16.558 7.502a.75.75 0 0 0-1.115-1.004l-6.015 6.684-.96-.768a.75.75 0 1 0-.936 1.172l.89.712-.717.798a1.25 1.25 0 0 1-1.71.14l-3.526-2.822a.75.75 0 1 0-.937 1.172l3.526 2.82A2.75 2.75 0 0 0 8.82 16.1l.776-.862 1.462 1.17a2.75 2.75 0 0 0 3.762-.308l7.738-8.597a.75.75 0 0 0-1.115-1.004l-7.738 8.598a1.25 1.25 0 0 1-1.71.14l-1.394-1.116 5.957-6.618Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTickDouble);
export default ForwardRef;
