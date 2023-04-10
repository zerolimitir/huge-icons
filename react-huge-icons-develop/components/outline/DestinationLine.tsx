import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestinationLine = (
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
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M13.076 13H10a2 2 0 1 0 0 4h9a2 2 0 1 1 0 4H3'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17.267 6.342a1.317 1.317 0 1 1-2.634 0 1.317 1.317 0 0 1 2.634 0Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M19.9 6.342c0 2.181-2.633 5.267-3.95 5.267-1.316 0-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationLine);
export default ForwardRef;
