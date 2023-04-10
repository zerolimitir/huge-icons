import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalculator = (
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
            d='M8 22a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-8 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-8 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
