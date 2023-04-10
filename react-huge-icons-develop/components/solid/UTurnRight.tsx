import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUTurnRight = (
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
            d='M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM9.75 16a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v1.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.293a.75.75 0 1 1 1.06-1.06l.72.72V11a2.25 2.25 0 0 0-4.5 0v5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUTurnRight);
export default ForwardRef;
