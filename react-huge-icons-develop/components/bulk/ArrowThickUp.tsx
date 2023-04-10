import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickUp = (
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
            d='M9 19v-8H7.204a1 1 0 0 1-.753-1.659l4.044-4.62a2 2 0 0 1 3.01 0l4.044 4.62c.566.647.106 1.659-.753 1.659H15v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickUp);
export default ForwardRef;
