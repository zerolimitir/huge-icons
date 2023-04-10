import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAppsCircle = (
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
            d='M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsCircle);
export default ForwardRef;
