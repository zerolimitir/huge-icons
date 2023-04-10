import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAutoRotation = (
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
            d='M11.47 2.984a.75.75 0 0 1 1.06 0l7.071 7.071a2.75 2.75 0 0 1 0 3.89l-2.962 2.962h1.018a.75.75 0 0 1 0 1.5h-1.829a1.75 1.75 0 0 1-1.75-1.75v-1.829a.75.75 0 0 1 1.5 0v1.018l2.963-2.962a1.25 1.25 0 0 0 0-1.768l-7.072-7.071a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.593 6.343a.75.75 0 0 1 .75-.75h1.829c.966 0 1.75.784 1.75 1.75v1.829a.75.75 0 0 1-1.5 0V8.154l-2.963 2.962a1.25 1.25 0 0 0 0 1.768l7.071 7.071a.75.75 0 1 1-1.06 1.06l-7.072-7.07a2.75 2.75 0 0 1 0-3.89l2.963-2.962H6.343a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAutoRotation);
export default ForwardRef;
