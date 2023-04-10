import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHalfMoon = (
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
            d='M5.672 14.868A9.197 9.197 0 0 0 14.7 3.907c-.077-.392.286-.745.654-.59A9.2 9.2 0 0 1 11.803 21a9.2 9.2 0 0 1-8.486-5.646c-.155-.369.198-.73.59-.655.571.111 1.161.17 1.765.17Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoon);
export default ForwardRef;
