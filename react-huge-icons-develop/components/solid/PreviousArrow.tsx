import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPreviousArrow = (
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
            d='M21.03 14.333v1.185c0 1.543-1.674 2.505-3.007 1.727l-4.992-2.912v1.185c0 1.543-1.675 2.505-3.008 1.727l-6.03-3.518c-1.324-.771-1.324-2.683 0-3.455l6.03-3.518c1.333-.777 3.008.184 3.008 1.728v1.185l4.992-2.913c1.333-.777 3.008.184 3.008 1.728v5.851Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPreviousArrow);
export default ForwardRef;
