import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunWindRain = (
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
            d='M17 10c-.545 0-1.07.087-1.562.249a7.026 7.026 0 0 0-3.628-3.662 4 4 0 0 1 6.966 3.738A4.99 4.99 0 0 0 17 10Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm5.48 2.27a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0ZM22.75 9a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 13a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 13Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.279 16.304a.75.75 0 0 1 .418.975l-2 5a.75.75 0 1 1-1.393-.557l2-5a.75.75 0 0 1 .975-.418Zm-3.943.025a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Zm8 0a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunWindRain);
export default ForwardRef;
