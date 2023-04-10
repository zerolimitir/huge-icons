import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinRectangle = (
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
            d='M9.75 15H7.874A4 4 0 0 0 4.8 16.44l-1.067 1.28C2.648 19.022 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44A4 4 0 0 0 16.127 15H14.25v1a2.25 2.25 0 0 1-4.5 0v-1Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 6.855a2 2 0 1 0-1.5 0V16a.75.75 0 0 0 1.5 0V6.855Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinRectangle);
export default ForwardRef;
