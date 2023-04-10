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
            fillRule='evenodd'
            d='M17.734 11.947a5.001 5.001 0 1 0-1.47-9.894 5.001 5.001 0 0 0 1.47 9.893ZM10 6c.212 0 .422.008.63.024-.006.03-.01.061-.015.091a6.5 6.5 0 0 0 7.37 7.387A8 8 0 1 1 10 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationCircle);
export default ForwardRef;
