import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifi = (
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
            d='M3.061 8.22A13.2 13.2 0 0 1 12 4.75a13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108A14.7 14.7 0 0 0 12 3.25a14.7 14.7 0 0 0-9.951 3.862A.75.75 0 0 0 3.06 8.22Zm3.22 3.834A8.22 8.22 0 0 1 12 9.75a8.22 8.22 0 0 1 5.719 2.304.75.75 0 1 0 1.04-1.081A9.72 9.72 0 0 0 12 8.25a9.72 9.72 0 0 0-6.759 2.723.75.75 0 1 0 1.04 1.08Zm3.265 3.815A3.24 3.24 0 0 1 12 14.75c.98 0 1.857.432 2.454 1.119a.75.75 0 0 0 1.131-.985A4.74 4.74 0 0 0 12 13.25a4.74 4.74 0 0 0-3.586 1.634.75.75 0 1 0 1.132.985ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;
