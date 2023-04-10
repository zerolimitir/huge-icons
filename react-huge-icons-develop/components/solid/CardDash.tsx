import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardDash = (
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
            d='M2 7.75v2.5h20v-2.5H2Zm19.93-1.5H2.07A4.001 4.001 0 0 1 6 3h12c1.953 0 3.579 1.4 3.93 3.25ZM2 11.75h20V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.25Zm4 4.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDash);
export default ForwardRef;
