import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterTwoLineVertical = (
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
            d='M7.25 5.095V3a.75.75 0 0 1 1.5 0v2.095A3.001 3.001 0 0 1 11 8v2a3 3 0 1 1-6 0V8a3 3 0 0 1 2.25-2.905Zm8 2.905a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-1.5 0v5Zm-8 13a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v5ZM13 14v2a3 3 0 0 0 2.25 2.905V21a.75.75 0 0 0 1.5 0v-2.095A3.001 3.001 0 0 0 19 16v-2a3 3 0 1 0-6 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineVertical);
export default ForwardRef;
