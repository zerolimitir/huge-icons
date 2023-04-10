import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShieldWarning = (
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
            d='M10.37 2.364 5.333 4.711a4.037 4.037 0 0 0-2.326 3.867C3.37 15.1 5.191 17.97 9.928 21.33a3.575 3.575 0 0 0 4.162.001c4.75-3.378 6.508-6.29 6.902-12.732A4.046 4.046 0 0 0 18.665 4.7l-5.019-2.337a3.864 3.864 0 0 0-3.275 0ZM11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.25-3a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0v7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldWarning);
export default ForwardRef;
