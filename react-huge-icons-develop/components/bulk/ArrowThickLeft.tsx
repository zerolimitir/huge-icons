import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickLeft = (
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
            d='M19 9h-8V7.204a1 1 0 0 0-1.659-.753l-4.62 4.044a2 2 0 0 0 0 3.01l4.62 4.044c.647.565 1.659.106 1.659-.753V15h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickLeft);
export default ForwardRef;
