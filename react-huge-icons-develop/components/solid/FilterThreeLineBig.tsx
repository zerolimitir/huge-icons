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
            d='M4.75 8.354V3a.75.75 0 0 0-1.5 0v5.354a2.751 2.751 0 0 0-2 2.646v2a2.75 2.75 0 0 0 2 2.646V21a.75.75 0 0 0 1.5 0v-5.354a2.751 2.751 0 0 0 2-2.646v-2a2.75 2.75 0 0 0-2-2.646Zm8-4V3a.75.75 0 0 0-1.5 0v1.354A2.751 2.751 0 0 0 9.25 7v2a2.75 2.75 0 1 0 5.5 0V7a2.75 2.75 0 0 0-2-2.646ZM12 21.75a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm8-11a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Zm0 1.5A2.75 2.75 0 0 0 17.25 15v2a2.75 2.75 0 0 0 2 2.646V21a.75.75 0 0 0 1.5 0v-1.354a2.751 2.751 0 0 0 2-2.646v-2A2.75 2.75 0 0 0 20 12.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineBig);
export default ForwardRef;
