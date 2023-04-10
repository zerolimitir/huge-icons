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
            d='M20.53 14.53a.75.75 0 0 0 0-1.06L19.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06 0Zm-17.06 0a.75.75 0 0 1 0-1.06L4.94 12l-1.47-1.47a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M7 9V5h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Zm10 6v4H7v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPageSeparator);
export default ForwardRef;
