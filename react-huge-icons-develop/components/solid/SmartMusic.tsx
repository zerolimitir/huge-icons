import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartMusic = (
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
            d='M10.288 4.288A5.231 5.231 0 0 1 14 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 14 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 1 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 14 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 14 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Zm5.395 1.83A1 1 0 0 1 19 9.22V18a2 2 0 1 1-1.5-1.937V12.3l-7 1.4V20A2 2 0 1 1 9 18.063V10.82a1 1 0 0 1 .804-.98l8-1.6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartMusic);
export default ForwardRef;
