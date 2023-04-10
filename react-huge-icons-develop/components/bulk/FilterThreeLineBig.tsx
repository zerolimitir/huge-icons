import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLineBig = (
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
            d='M4 21.75a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm8 0a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm0-15a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Zm-8 4a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm16 0a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm0 11a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10 7v2a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0Zm-8 4v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0Zm16 4v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineBig);
export default ForwardRef;
