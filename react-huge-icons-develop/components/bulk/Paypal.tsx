import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaypal = (
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
            d='M6.7 18H7l2-5h4a5 5 0 0 0 4.703-6.703A5.002 5.002 0 0 1 16 16h-4l-2 5H5.5l1.2-3Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M13 3H8.5L3 18h4l2-5h4a5 5 0 0 0 0-10Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgPaypal);
export default ForwardRef;
