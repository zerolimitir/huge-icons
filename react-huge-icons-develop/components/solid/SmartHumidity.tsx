import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartHumidity = (
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
            d='M20 14c0-4.163-4.546-8.87-6.784-10.933a1.779 1.779 0 0 0-2.431 0C8.546 5.13 4 9.837 4 14c0 5.523 4.213 8 8 8s8-2.477 8-8Zm-8 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3.712-4.462A5.231 5.231 0 0 1 12 12.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.732 6.732 0 0 0 12 11.25a6.732 6.732 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 15.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 14.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartHumidity);
export default ForwardRef;
