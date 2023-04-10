import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxTwoSide = (
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
            d='M20 17V8l-5-4H9L4 8v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 4h7.263c.343 0 .661.184.838.486l1.758 3C22.25 8.152 21.781 9 21.021 9h-4.984a1.945 1.945 0 0 1-1.675-.971L12 4Zm0 0H4.737a.973.973 0 0 0-.838.486l-1.758 3C1.75 8.152 2.219 9 2.979 9h4.984c.686 0 1.322-.369 1.675-.971L12 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxTwoSide);
export default ForwardRef;
