import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaintBoard = (
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
            d='M2 12c0 4.842 3.442 8.88 8.013 9.802C11.095 22.021 12 21.105 12 20v-3.556a2.222 2.222 0 1 1 4.444 0v1.29c0 1.484 1.56 2.4 2.611 1.353A9.969 9.969 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm7.5 2.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-9 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBoard);
export default ForwardRef;
