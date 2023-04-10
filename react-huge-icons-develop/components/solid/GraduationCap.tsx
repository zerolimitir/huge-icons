import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGraduationCap = (
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
            d='M2.592 9.045 11.26 5.16a1.798 1.798 0 0 1 1.48 0l8.668 3.886c.395.177.592.566.592.955v6a.75.75 0 0 1-1.5 0v-4.638l-7.76 3.479a1.797 1.797 0 0 1-1.48 0l-8.668-3.886c-.79-.354-.79-1.556 0-1.91ZM6 16v-1.873l4.647 2.083a3.298 3.298 0 0 0 2.706 0L18 14.127V16a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGraduationCap);
export default ForwardRef;
