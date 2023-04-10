import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWindRain = (
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
            d='M2 10a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 10Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.279 15.304a.75.75 0 0 1 .418.975l-2 5a.75.75 0 1 1-1.393-.557l2-5a.75.75 0 0 1 .975-.418Zm-3.943.025a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Zm8 0a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWindRain);
export default ForwardRef;
