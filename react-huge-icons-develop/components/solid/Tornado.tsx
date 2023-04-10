import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTornado = (
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
            d='M2 3.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H2ZM7.25 8A.75.75 0 0 1 8 7.25h14a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8ZM5 11.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H5ZM7.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm3 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTornado);
export default ForwardRef;
