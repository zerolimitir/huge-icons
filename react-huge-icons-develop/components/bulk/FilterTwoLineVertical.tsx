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
            d='M7 21.75a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75Zm0-15A.75.75 0 0 1 6.25 6V3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Zm10 2a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75Zm0 13a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M4 8v2a3 3 0 1 0 6 0V8a3 3 0 0 0-6 0Zm10 6v2a3 3 0 1 0 6 0v-2a3 3 0 1 0-6 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineVertical);
export default ForwardRef;
