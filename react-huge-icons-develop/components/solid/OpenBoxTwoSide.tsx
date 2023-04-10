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
        viewBox='0 0 24 25'
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
            d='M3.764 5.622 2.215 7.616a1 1 0 0 0 .79 1.613H8.5a1 1 0 0 0 .8-.4l2.698-3.594 2.796 3.607a1 1 0 0 0 .79.387h5.41a1 1 0 0 0 .79-1.613l-1.55-1.995a1 1 0 0 0-.79-.386H4.555a1 1 0 0 0-.79.387Zm4.36 5.375H4v5.909c0 1.774 1.343 3.213 3 3.213h10c1.657 0 3-1.439 3-3.213v-5.91h-4.11c-1.174 0-2.268-.629-2.917-1.675l-.966-1.56-.966 1.56c-.649 1.046-1.744 1.676-2.917 1.676Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxTwoSide);
export default ForwardRef;
