import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRecord = (
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
            d='M18.25 12A6.25 6.25 0 0 1 12 18.25v1.5A7.75 7.75 0 0 0 19.75 12h-1.5ZM12 18.25A6.25 6.25 0 0 1 5.75 12h-1.5A7.75 7.75 0 0 0 12 19.75v-1.5ZM5.75 12A6.25 6.25 0 0 1 12 5.75v-1.5A7.75 7.75 0 0 0 4.25 12h1.5ZM12 5.75A6.25 6.25 0 0 1 18.25 12h1.5A7.75 7.75 0 0 0 12 4.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRecord);
export default ForwardRef;
