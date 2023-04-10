import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSendFast = (
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
            d='m9.454 4.26 11.23 5.612c1.755.877 1.755 3.38 0 4.256L9.454 19.74c-1.998.998-4.147-1.055-3.24-3.094l1.636-3.68c.032-.07.06-.143.084-.216H12a.75.75 0 0 0 0-1.5H7.934a2.387 2.387 0 0 0-.084-.216l-1.636-3.68c-.907-2.04 1.242-4.092 3.24-3.094ZM1.25 10A.75.75 0 0 1 2 9.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM2 13.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSendFast);
export default ForwardRef;
