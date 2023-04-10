import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeSideView = (
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
            d='M5.459 2.459a.75.75 0 0 0-1.06-1.06 10.75 10.75 0 0 0 6.85 18.325v1.526H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.526a10.751 10.751 0 0 0 6.852-3.123.75.75 0 0 0-1.06-1.06A9.25 9.25 0 1 1 5.459 2.458ZM12 15.999a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeSideView);
export default ForwardRef;
