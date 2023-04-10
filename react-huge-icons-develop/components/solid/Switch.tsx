import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSwitch = (
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
            d='M22.75 12A6.75 6.75 0 0 0 16 5.25H8a6.75 6.75 0 0 0 0 13.5h8A6.75 6.75 0 0 0 22.75 12Zm-9.657 5.25A5.998 5.998 0 0 1 10 12a5.998 5.998 0 0 1 3.093-5.25H8a5.25 5.25 0 1 0 0 10.5h5.093Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSwitch);
export default ForwardRef;
