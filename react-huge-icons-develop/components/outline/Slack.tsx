import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSlack = (
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
            strokeWidth={1.5}
            d='M12 5.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5Z'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M20 10.5a1.5 1.5 0 0 1-1.5 1.5H17v-1.5a1.5 1.5 0 0 1 3 0Zm-3 10a1.5 1.5 0 0 0-1.5-1.5H14v1.5a1.5 1.5 0 0 0 3 0ZM7 5.5A1.5 1.5 0 0 0 8.5 7H10V5.5a1.5 1.5 0 1 0-3 0Zm-3 10A1.5 1.5 0 0 1 5.5 14H7v1.5a1.5 1.5 0 0 1-3 0Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M9 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 9a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3h5Zm12 5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3h5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSlack);
export default ForwardRef;
