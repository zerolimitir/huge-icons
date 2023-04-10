import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoon = (
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
            d='M15.439 11.248A4.997 4.997 0 0 1 17 11c1.102 0 2.12.356 2.947.96A4.993 4.993 0 0 0 22 7.92c0-.245-.267-.385-.495-.293a4 4 0 0 1-5.502-3.873c.015-.36-.293-.68-.634-.562a5.003 5.003 0 0 0-3.363 4.484 7.027 7.027 0 0 1 3.433 3.572ZM9 8.5a5.5 5.5 0 1 0 0 11h8a3.5 3.5 0 1 0-1.093-6.826 1.5 1.5 0 0 1-1.848-.835 5.527 5.527 0 0 0-2.698-2.808A5.473 5.473 0 0 0 9 8.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoon);
export default ForwardRef;
