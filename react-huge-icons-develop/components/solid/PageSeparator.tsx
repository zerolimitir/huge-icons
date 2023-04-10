import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPageSeparator = (
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
            d='M7 4.25a.75.75 0 0 1 .75.75v3c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25V5a.75.75 0 0 1 1.5 0v3A1.75 1.75 0 0 1 16 9.75H8A1.75 1.75 0 0 1 6.25 8V5A.75.75 0 0 1 7 4.25Zm-3.53 9.22a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 1.06L4.94 12l-1.47 1.47Zm17.06 0a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06L19.06 12l1.47 1.47ZM16.25 19a.75.75 0 0 0 1.5 0v-3A1.75 1.75 0 0 0 16 14.25H8A1.75 1.75 0 0 0 6.25 16v3a.75.75 0 0 0 1.5 0v-3a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25v3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPageSeparator);
export default ForwardRef;
