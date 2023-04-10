import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonSnow = (
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
            d='M21 11a5 5 0 1 0-8.544-5.089A7.027 7.027 0 0 1 15.44 9.25 4.996 4.996 0 0 1 17 9c1.636 0 3.088.786 4 2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 12a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.75 21a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 19A.75.75 0 1 1 8 19a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.5-3A.75.75 0 1 1 8 16a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonSnow);
export default ForwardRef;
