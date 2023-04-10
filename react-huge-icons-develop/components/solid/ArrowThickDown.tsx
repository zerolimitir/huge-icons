import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickDown = (
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
            d='M15 4v9h1.796a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0l-4.796-5.48A1 1 0 0 1 7.204 13H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickDown);
export default ForwardRef;
