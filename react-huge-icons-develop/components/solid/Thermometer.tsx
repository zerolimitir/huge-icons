import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgThermometer = (
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
            d='M16.006 3.857 9.69 10.174a1.95 1.95 0 0 0-.551 1.103l-.161 1.126a1.95 1.95 0 0 1-.552 1.103l-1.93 1.93.035.034 2 2a.728.728 0 0 1 .033.035l1.93-1.93a1.95 1.95 0 0 1 1.104-.552l1.126-.16a1.95 1.95 0 0 0 1.103-.553l6.317-6.316a2.925 2.925 0 1 0-4.137-4.137ZM7.505 18.564a.764.764 0 0 1-.035-.034l-2-2a.728.728 0 0 1-.033-.035l-2.009 2.008a1.463 1.463 0 1 0 2.069 2.069l2.008-2.008Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;
