import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyEuro = (
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
            d='M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.84 11.25a3.173 3.173 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.322c.604.615 1.455 1 2.405 1 .938 0 1.782-.377 2.387-.981a.75.75 0 1 1 1.06 1.06 4.863 4.863 0 0 1-3.447 1.421 4.85 4.85 0 0 1-4.258-2.5H8a.75.75 0 0 1 0-1.5h.31a4.715 4.715 0 0 1 0-1.5H8a.75.75 0 0 1 0-1.5h.825a4.85 4.85 0 0 1 4.258-2.5c1.348 0 2.57.543 3.447 1.42a.75.75 0 1 1-1.06 1.061 3.363 3.363 0 0 0-2.387-.981c-.95 0-1.8.385-2.405 1H13a.75.75 0 0 1 0 1.5H9.84Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyEuro);
export default ForwardRef;
