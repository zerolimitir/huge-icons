import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutFour = (
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
            d='M11.25 2H6a4 4 0 0 0-4 4v5.25h9.25V2ZM2 12.75V18a4 4 0 0 0 4 4h5.25v-9.25H2ZM12.75 22H18a4 4 0 0 0 4-4v-5.25h-9.25V22ZM22 11.25h-9.25V2H18a4 4 0 0 1 4 4v5.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutFour);
export default ForwardRef;
