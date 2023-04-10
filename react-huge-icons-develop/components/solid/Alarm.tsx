import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarm = (
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
            d='M7.497 3.687a.75.75 0 1 0-.601-1.374 12.797 12.797 0 0 0-5.52 4.636.75.75 0 0 0 1.249.83 11.297 11.297 0 0 1 4.872-4.092Zm9.607-1.374a.75.75 0 0 0-.601 1.374c1.99.87 3.681 2.301 4.872 4.093a.75.75 0 1 0 1.25-.83 12.797 12.797 0 0 0-5.521-4.637Zm1.887 16.355A9 9 0 1 0 3 13a8.97 8.97 0 0 0 2.008 5.668l-1.662 2.965a.75.75 0 1 0 1.308.734l1.443-2.573A8.966 8.966 0 0 0 12 22a8.965 8.965 0 0 0 5.903-2.206l1.443 2.573a.75.75 0 1 0 1.308-.734l-1.663-2.965ZM12 7.25a.75.75 0 0 1 .75.75v4.6l2.666 1.777a.75.75 0 1 1-.832 1.248l-3-2A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarm);
export default ForwardRef;
