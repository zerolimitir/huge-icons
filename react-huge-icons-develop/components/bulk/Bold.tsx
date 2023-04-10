import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBold = (
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
            d='M6.25 5A.75.75 0 0 1 7 4.25h4.5a4.25 4.25 0 0 1 3.11 7.146 4.252 4.252 0 0 1-1.11 8.354H7a.75.75 0 0 1-.75-.75V5Zm1.5 7.75v5.5h5.75a2.75 2.75 0 1 0 0-5.5H7.75Zm0-1.5h3.75a2.75 2.75 0 1 0 0-5.5H7.75v5.5Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
