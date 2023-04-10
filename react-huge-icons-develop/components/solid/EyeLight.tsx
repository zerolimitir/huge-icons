import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeLight = (
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
            d='M12.75 2.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM3.53 5.22a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Zm18 1.06a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5Zm-.653 6.041c1.497 1.433 1.497 3.925 0 5.358C18.813 19.655 15.604 22 12 22c-3.604 0-6.813-2.346-8.877-4.321-1.497-1.433-1.497-3.925 0-5.358C5.187 10.345 8.396 8 12 8c3.604 0 6.813 2.345 8.877 4.321ZM15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeLight);
export default ForwardRef;
