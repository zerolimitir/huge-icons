import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLockDash = (
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
            d='M8.75 6.75a3.25 3.25 0 0 1 6.5 0V8h-6.5V6.75Zm-1.5 1.32V6.75a4.75 4.75 0 0 1 9.5 0v1.32A4.001 4.001 0 0 1 20 12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6c0-1.953 1.4-3.579 3.25-3.93ZM12 13.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockDash);
export default ForwardRef;
