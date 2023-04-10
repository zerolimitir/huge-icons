import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailDelay = (
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
            d='M22 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4-2.25a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.75Zm0 7.75V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h7.875A5.502 5.502 0 0 0 18 11.5ZM5.4 12.55a.75.75 0 0 1 1.05-.15l2.2 1.65c.8.6 1.9.6 2.7 0l2.2-1.65a.75.75 0 0 1 .9 1.2l-2.2 1.65a3.75 3.75 0 0 1-4.5 0l-2.2-1.65a.75.75 0 0 1-.15-1.05Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailDelay);
export default ForwardRef;
