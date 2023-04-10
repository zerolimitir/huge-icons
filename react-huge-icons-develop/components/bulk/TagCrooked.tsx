import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTagCrooked = (
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
            d='M9.411 4.69a4.078 4.078 0 0 1 3.165-1.19l3.964.278a3.96 3.96 0 0 1 3.682 3.682l.278 3.964a4.077 4.077 0 0 1-1.19 3.165l-6.564 6.565c-1.584 1.583-4.134 1.6-5.696.038L2.808 16.95c-1.562-1.562-1.545-4.112.038-5.695l6.565-6.566Z'
            opacity={0.4}
        />
        <circle
            cx={14.828}
            cy={9.172}
            r={2}
            fill='currentColor'
            transform='rotate(45 14.828 9.172)'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTagCrooked);
export default ForwardRef;
