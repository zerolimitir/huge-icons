import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationCircle = (
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
            d='M10 22a8 8 0 0 0 7.734-10.053 5 5 0 0 1-5.68-5.68A8 8 0 1 0 10 22Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M22 7a5.001 5.001 0 1 1-10.002 0A5.001 5.001 0 0 1 22 7Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationCircle);
export default ForwardRef;
