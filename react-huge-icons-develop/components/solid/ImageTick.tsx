import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageTick = (
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
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h8a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18V9a.75.75 0 0 0-1.5 0v4.51a2.002 2.002 0 0 0-.14-.104l-2.381-1.587a4 4 0 0 0-5.048.5L10.32 15.68a4 4 0 0 1-5.047.5L2.75 14.5V6ZM11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm10.6-5.05a.75.75 0 1 0-1.2-.9l-2.308 3.078a.25.25 0 0 1-.377.026L16.53 4.47a.75.75 0 1 0-1.06 1.06l1.184 1.185a1.75 1.75 0 0 0 2.638-.187L21.6 3.45Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageTick);
export default ForwardRef;
