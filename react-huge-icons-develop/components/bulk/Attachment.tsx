import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAttachment = (
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
            d='M10.803 4.136a4.521 4.521 0 0 1 6.394 6.394l-5.333 5.334a2.636 2.636 0 1 1-3.728-3.728l5.334-5.333a.75.75 0 0 1 1.06 1.06l-5.333 5.334a1.136 1.136 0 1 0 1.606 1.606l5.333-5.333a3.021 3.021 0 1 0-4.272-4.273L6.53 10.53a4.907 4.907 0 0 0 6.94 6.94l5.333-5.334a.75.75 0 1 1 1.06 1.06L14.53 18.53a6.407 6.407 0 1 1-9.06-9.06l5.333-5.334Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
