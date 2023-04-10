import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKeyDotted = (
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
            d='M14 2h-4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3ZM12.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKeyDotted);
export default ForwardRef;
