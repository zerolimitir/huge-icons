import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLine = (
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
            d='M2.25 12a2.75 2.75 0 0 1 2-2.646V3a.75.75 0 0 1 1.5 0v6.354a2.751 2.751 0 0 1 0 5.293V21a.75.75 0 0 1-1.5 0v-6.354a2.751 2.751 0 0 1-2-2.646Zm10.5-7.646V3a.75.75 0 0 0-1.5 0v1.354a2.751 2.751 0 1 0 1.5 0ZM12 21.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75Zm7-9a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75Zm0 9a.75.75 0 0 1-.75-.75v-1.354a2.751 2.751 0 1 1 1.5 0V21a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLine);
export default ForwardRef;
