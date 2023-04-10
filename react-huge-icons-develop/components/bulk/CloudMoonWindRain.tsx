import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonWindRain = (
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
            d='M2 11a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 11Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21 10a5 5 0 1 0-8.544-5.089A7.027 7.027 0 0 1 15.44 8.25 4.996 4.996 0 0 1 17 8c1.636 0 3.088.786 4 2Zm-8.721 6.304a.75.75 0 0 1 .418.975l-2 5a.75.75 0 1 1-1.393-.557l2-5a.75.75 0 0 1 .975-.418Zm-3.943.025a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Zm8 0a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonWindRain);
export default ForwardRef;
