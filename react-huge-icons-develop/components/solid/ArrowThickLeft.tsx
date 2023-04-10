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
            d='M20 9h-9V7.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506l5.48 4.796c.647.566 1.659.106 1.659-.753V15h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickLeft);
export default ForwardRef;
